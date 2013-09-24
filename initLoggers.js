// get the current time difference between page
// load and when this func was invoked
function getTimeDiff() {
  return new Date().getTime() - performance.timing.navigationStart;
}
var $log, jqLoaded = false;
function log(message) {
  if (jqLoaded) {
    $log = $log || $('#logger');
    $log.append('<p><b>' + getTimeDiff() + '</b>ms :: ' + message);
  }
  if (window.console) {
    console.log(getTimeDiff() + 'ms :: ' + message);
    if (console.timeStamp){
      console.timeStamp(message);
    }
  }

}
log('On HEAD, starting...');

window.onload = function () {log('window.onload fired.')};