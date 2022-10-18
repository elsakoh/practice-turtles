import { VerifyResult } from './verify-result.model';

export class NumVerifyResponse {
  valid: boolean;

  number: string;

  local_format: string;

  international_format: string;

  country_prefix: string;

  country_name: string;

  country_code: string;

  location: string;

  carrier: string;

  line_type: string;
}

export function formatResponseToVerifyResult(
  response: NumVerifyResponse,
): VerifyResult {
  return {
    valid: response.valid,
    result: {
      country: response.country_name,
      location: response.location,
      carrier: response.carrier,
      lineType: response.line_type,
    },
  };
}
