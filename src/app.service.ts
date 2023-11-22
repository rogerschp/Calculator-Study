import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  async getSum(x: number, y: number): Promise<number> {
    return x + y;
  }

  async getSubtraction(x: number, y: number): Promise<number> {
    return x - y;
  }

  async getMultiplication(x: number, y: number): Promise<number> {
    return x * y;
  }

  async getDivision(x: number, y: number): Promise<number> {
    if (y === 0) {
      throw new Error('Cannot divide by zero.');
    }
    return x / y;
  }
}
