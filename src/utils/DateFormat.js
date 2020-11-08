import dayJs from "moment";

export class DateFormatter {
  constructor() {
    this.formatStyle = {
      date: "YYYY-MM-DD",
      time: "HH:mm:ss",
      datetime: "YYYY-MM-DD HH:mm:ss",
      dateminute: "YYYY-MM-DD HH:mm",
      "year-month": "YYYY-MM",
      "month-day": "MM-DD"
    };
  }
  isValid(date) {
    return !!date;
  }
  getDate(date) {
    return dayJs(date);
  }
  getJsDate(data) {
    /*从 Day.js 对象中获取原生的 Date 对象*/
    return this.getDate(data).toDate();
  }
  getFormatStyle(type) {
    return this.formatStyle[type] || this.formatStyle.datetime;
  }
  getSecondStamp(stamp) {
    return Math.floor(Number(stamp) / 1000);
  }
  getTimeStr(date, fmt) {
    if (!this.isValid(date)) return date;
    if (String(date).length === 10) {
      date *= 1000;
    }
    return this.getDate(date).format(this.getFormatStyle(fmt));
  }
  getTimeStamp(date) {
    if (!this.isValid(date)) return date;
    return this.getSecondStamp(this.getDate(date).valueOf());
  }
  getStartTimeStamp(date) {
    if (!this.isValid(date)) return date;
    return this.getSecondStamp(
      this.getDate(date)
        .startOf("day")
        .valueOf()
    );
  }
  getEndTimeStamp(date) {
    if (!this.isValid(date)) return date;
    return this.getSecondStamp(
      this.getDate(date)
        .endOf("day")
        .valueOf()
    ); // endOf后获取到的时间戳为后一日的零点,需要减一才是23:59:59
  }
}
