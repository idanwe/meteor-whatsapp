angular
  .module('Whatsapp')
  .filter('waCalendar', waCalendar);

function waCalendar () {
  return function (time) {
    if (!time) return;

    return moment(time).calendar(null, {
      lastDay : '[Yesterday]',
      sameDay : 'LT',
      lastWeek : 'dddd',
      sameElse : 'DD/MM/YY'
    });
  }
}
