import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseArrayOptionalPipe implements PipeTransform {
  private separator: string = ',';

  constructor(separator?: string) {
    if (separator) {
      this.separator = separator;
    }
  }

  transform(value: any, metadata: ArgumentMetadata) {
    if (value === undefined || (typeof value === 'string' && value.trim() === '')) {
      return [];
    }
    return value.split(this.separator).map((val: string) => val.trim());
  }
}
