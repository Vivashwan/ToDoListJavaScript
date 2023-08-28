const dayEle = document.getElementById('days');
const hrsEle = document.getElementById('hours');
const minEle = document.getElementById('minutes');
const secEle = document.getElementById('seconds');

const deadLine = "1 Jan 2023";

countDown = ()=>{
    const newYearDate = new Date(deadLine);
    const currentDate = new Date();

    const timeLeftInSeconds = (newYearDate-currentDate)/1000;

    const days = Math.floor((timeLeftInSeconds/3600)/24); // (hrs)/24 = days left.
    const hrs = Math.floor(timeLeftInSeconds/3600)%24; // (hrs)%24 = hrs left.
    const mins = Math.floor(timeLeftInSeconds/60)%60; // (min)%60 = mins left.
    const sec = Math.floor(timeLeftInSeconds%60); // (sec)%60 = sec left.
   
    dayEle.innerHTML = days;
    hrsEle.innerHTML = (hrs);
    minEle.innerHTML = (mins);
    secEle.innerHTML = (sec);
    
}

countDown();

setInterval(countDown, 1000);

