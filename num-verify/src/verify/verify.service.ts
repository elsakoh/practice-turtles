import {
  BadGatewayException,
  BadRequestException,
  Injectable,
} from '@nestjs/common';
import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
import { ConfigService } from '../config/config.service';
import {
  formatResponseToVerifyResult,
  NumVerifyResponse,
} from './models/num-verify.response.model';
import { VerifyResult } from './models/verify-result.model';
import { InjectRepository } from '@nestjs/typeorm';
import {
  CheckedNumber,
  formatCheckedNumberToVerifyResult,
} from './entities/checked-number.entity';
import { Repository } from 'typeorm';

@Injectable()
export class VerifyService {
  private readonly baseUrl: string;
  private readonly apiKey: string;

  constructor(
    private readonly configService: ConfigService,
    @InjectRepository(CheckedNumber)
    private readonly checkedNumberRepository: Repository<CheckedNumber>,
  ) {
    const { url, apiKey } = configService.numVerifyConfig;
    this.baseUrl = url;
    this.apiKey = apiKey;
  }

  async verifyPhoneNumber(phoneNumber: string): Promise<VerifyResult> {
    const existingRecord = await this.checkExistingRecords(phoneNumber);
    if (existingRecord) return existingRecord;

    const checkResponse = await this.checkNumberViaAPI(phoneNumber);
    this.addCheckedResult(checkResponse);

    if (!checkResponse.valid) {
      this.throwInvalidNumber(checkResponse.number);
    }

    return formatResponseToVerifyResult(checkResponse);
  }

  private async checkExistingRecords(phoneNumber: string) {
    const existingRecord = await this.checkedNumberRepository.findOne({
      where: { number: phoneNumber },
    });

    if (existingRecord) {
      console.log(`Retreiving ${phoneNumber} from cache...`);
      if (!existingRecord.isValid) {
        this.throwInvalidNumber(existingRecord.number);
      }
      return formatCheckedNumberToVerifyResult(existingRecord);
    }
  }

  private async checkNumberViaAPI(
    phoneNumber: string,
  ): Promise<NumVerifyResponse> {
    try {
      const headers: AxiosRequestHeaders = { apiKey: this.apiKey };

      const requestOptions: AxiosRequestConfig = {
        method: 'GET',
        headers,
      };

      const result = await axios.get(
        `${this.baseUrl}?number=${phoneNumber}`,
        requestOptions,
      );
      return result.data;
    } catch (e) {
      throw new BadGatewayException(e.response.data.message);
    }
  }

  private async addCheckedResult(verifyResponse: NumVerifyResponse) {
    const dbEntity: CheckedNumber = {
      number: verifyResponse.number,
      isValid: verifyResponse.valid,
      location: verifyResponse.location,
      carrier: verifyResponse.carrier,
      country: verifyResponse.country_name,
      lineType: verifyResponse.line_type,
    };

    return this.checkedNumberRepository.insert(dbEntity);
  }

  private throwInvalidNumber(phoneNumber: string) {
    throw new BadRequestException(`${phoneNumber} is not a valid number`);
  }
}
