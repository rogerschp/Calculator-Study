import { Controller, Get, ParseIntPipe, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('basic')
export class AppController {
  constructor(private readonly appService: AppService) {}
  @Get('sum')
  getSum(
    @Query('x', ParseIntPipe) x: number,
    @Query('y', ParseIntPipe) y: number,
  ) {
    return this.appService.getSum(x, y);
  }

  @Get('subtraction')
  getSubtraction(
    @Query('x', ParseIntPipe) x: number,
    @Query('y', ParseIntPipe) y: number,
  ) {
    return this.appService.getSubtraction(x, y);
  }

  @Get('multiplication')
  getMultiplication(
    @Query('x', ParseIntPipe) x: number,
    @Query('y', ParseIntPipe) y: number,
  ) {
    return this.appService.getMultiplication(x, y);
  }

  @Get('division')
  getDivision(
    @Query('x', ParseIntPipe) x: number,
    @Query('y', ParseIntPipe) y: number,
  ) {
    return this.appService.getDivision(x, y);
  }
}
