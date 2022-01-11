/**
 * 
 * @param {*} time 
 * @returns 
 */
function zerotumi(time){
  return time <10 ? "0" + time : time;
}
/**
 * 
 * @param {*} month 
 * @returns 
 */
function mont(month){
  return month <10 ? time+"1" : time;
}

function hour ( hours ){
  return hours > 12 ? hours - 12 : hours;
}