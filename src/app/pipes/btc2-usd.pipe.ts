import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'btc2Usd'
})
export class Btc2UsdPipe implements PipeTransform {

  transform(amount: number, isBtcToUsd = 1): number {
    return isBtcToUsd?  38166 * amount : amount / 38166;
  }

}
