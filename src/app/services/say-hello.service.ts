import { Injectable } from '@angular/core';
import {Logger} from "./logger";

@Injectable()
export class SayHelloService {

  constructor(
    private logger: Logger
  ) { }

  hello() {
    this.logger.logger('hello');
  }
}
