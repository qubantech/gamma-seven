export class ReportRequestDto {
  dateStart: string;
  dateEnd: string;

  constructor(start: string, end: string) {
    this.dateStart = start;
    this.dateEnd = end;
  }
}
