export class SendReportRequestDto {
  dateStart: string;
  dateEnd: string;
  email: string | null;

  constructor(start: string, end: string, email?: string) {
    this.dateStart = start;
    this.dateEnd = end;
    this.email = email && email || null;
  }
}
