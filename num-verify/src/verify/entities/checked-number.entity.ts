import { Entity, Column, PrimaryColumn } from 'typeorm';
import { VerifyResult } from '../models/verify-result.model';

@Entity('number')
export class CheckedNumber {
  @PrimaryColumn()
  number: string;

  @Column()
  isValid: boolean;

  @Column({ nullable: true })
  location: string;

  @Column({ nullable: true })
  carrier: string;

  @Column({ nullable: true })
  country: string;

  @Column({ nullable: true })
  lineType: string;
}

export function formatCheckedNumberToVerifyResult(
  number: CheckedNumber,
): VerifyResult {
  return {
    valid: number.isValid,
    result: {
      carrier: number.carrier,
      country: number.country,
      location: number.location,
      lineType: number.lineType,
    },
  };
}
