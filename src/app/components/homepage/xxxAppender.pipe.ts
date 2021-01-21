import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "xxxAppender",
})
export class XxxAppenderPipe implements PipeTransform {
  transform(value: string, currentid: number, id: number) {
    if (currentid === id) {
      return `${value} XXX`;
    }
    return value;
  }
}
