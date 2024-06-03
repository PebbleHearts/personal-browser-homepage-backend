import { NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    console.log(
      'Url: ',
      req.originalUrl,
      'Method: ',
      req.method,
      'IP: ',
      req.ip,
      'Time: ',
      new Date().toISOString(),
    );
    next();
  }
}
