import { Injectable } from '@nestjs/common';

@Injectable()
export class FactoryTestServiceService {
  getFactoryTestServiceData(): string {
    return 'getFactoryTestServiceData';
  }

  getFactoryTestServiceDataAsync(): string {
    return 'getFactoryTestServiceDataAsync';
  }
}
