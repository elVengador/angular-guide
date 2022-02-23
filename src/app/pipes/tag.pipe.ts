import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tag'
})
export class TagPipe implements PipeTransform {

  transform(value: string, amountSymbols: number = 1, symbol: string = "#"): string {
    if (amountSymbols < 1) return value

    const symbols = new Array(amountSymbols).fill(symbol).join('')
    return `${symbols}${value}`;
  }

}
