class DateTime {
  constructor() {
      this.now = new Date(); //当前日期
      this.nowDayOfWeek = this.now.getDay(); //今天本周的第几天
      this.nowDay = this.now.getDate(); //当前日
      this.nowMonth = this.now.getMonth(); //当前月
      this.nowYear = this.now.getYear(); //当前年
      this.nowYear += (this.nowYear < 2000) ? 1900 : 0; //
      this.lastMonthDate = new Date(); //上月日期
      this.lastMonthDate.setDate(1);
      this.lastMonthDate.setMonth(this.lastMonthDate.getMonth()-1);
  };
  //格式化日期：yyyy-MM-dd
  formatDate(date) {
      var myyear = date.getFullYear();
      var mymonth = date.getMonth()+1;
      var myweekday = date.getDate();
      if(mymonth < 10){
          mymonth = "0" + mymonth;
      }
      if(myweekday < 10){
          myweekday = "0" + myweekday;
      }
      return (myyear+"-"+mymonth + "-" + myweekday);
  };
  //获得本周的开始日期
  getWeekStartDate(isformatDate) {
      var weekStartDate = new Date(this.nowYear, this.nowMonth, this.nowDay - this.nowDayOfWeek);
      return isformatDate?this.formatDate(weekStartDate):weekStartDate.getTime();
  };
  //获得本周的结束日期
  getWeekEndDate(isformatDate) {
      var weekEndDate = new Date(this.nowYear, this.nowMonth, this.nowDay + (6 - this.nowDayOfWeek));
      return isformatDate?this.formatDate(weekEndDate):weekEndDate.getTime();
  };
  //获得本月的开始日期
  getMonthStartDate(isformatDate){
      var monthStartDate = new Date(this.nowYear, this.nowMonth, 1);
      return isformatDate?this.formatDate(monthStartDate):monthStartDate.getTime();
  };
  //获得某月的天数
   getMonthDays(myMonth){
      var monthStartDate = new Date(this.nowYear, myMonth, 1);
      var monthEndDate = new Date(this.nowYear, myMonth + 1, 1);
      var days = (monthEndDate - monthStartDate)/(1000 * 60 * 60 * 24);
      return days;
  }
  //获得本月的结束日期
  getMonthEndDate(isformatDate){
      var days= this.getMonthDays(this.nowMonth);//获取当月总共有多少天
      var monthEndDate = new Date(this.nowYear, this.nowMonth, days);
      return isformatDate?this.formatDate(monthEndDate):monthEndDate.getTime();
  };
  getYearStartData(isformatDate){
      var currentYear=this.now.getFullYear();//获得当前年份4位年
      var currentYearFirstDate=new Date(currentYear,0,1); //本年第一天
      return isformatDate
        ? this.formatDate(currentYearFirstDate)
        : currentYearFirstDate.getTime();
  };
  getCurrentStartData(isformatDate){
      var currentDay=new Date(this.nowYear, this.nowMonth, this.nowDay); //今日第一天
      return isformatDate?this.formatDate(currentDay):currentDay.getTime();
  }
}
export default new DateTime()
