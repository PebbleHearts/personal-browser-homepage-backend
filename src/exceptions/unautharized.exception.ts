import { HttpException, HttpStatus } from '@nestjs/common';

export class UnAutharizedException extends HttpException {
  constructor() {
    super('UnAutharized', HttpStatus.UNAUTHORIZED);
  }
}
