
function diisplayTime(){
    let dateTime = new Date();
    let hrs = dateTime.getHours();
    let mins = dateTime.getMinutes();
    let secs = dateTime.getSeconds();

    let amPm = document.getElementById('am-pm');
    if(hrs >= 12){
        amPm.innerHTML='PM';
    }else{
        amPm.innerHTML='AM'
    }

    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minit').innerHTML = mins;
    document.getElementById('secound').innerHTML = secs;

}
setInterval(diisplayTime, 10)