export class CustomError {
  message!: string;
  status!: number;
  additionalInfo!: any;

  constructor(message: string, status: number = 500, additionalInfo: {}) {
    this.message = message;
    this.status = status;
    this.additionalInfo = additionalInfo;
  }
}
