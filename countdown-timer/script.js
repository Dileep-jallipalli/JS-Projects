const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minEl = document.getElementById('mins');
const secEl = document.getElementById('secs')

const newYears = "01/01/2021";

function countdown(){
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSec = (newYearsDate-currentDate)/1000;

    const days = Math.floor(totalSec / 3600 / 24 );
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor(totalSec) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minEl.innerHTML = formatTime(mins);
    secEl.innerHTML = formatTime(sec);
 

}

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}
countdown()

setInterval(countdown,1000)