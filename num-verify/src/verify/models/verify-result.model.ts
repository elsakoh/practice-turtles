export type VerifyResult = {
  valid: boolean;
  result?: {
    country: string;
    location: string;
    carrier: string;
    lineType: string;
  };
};
