const clockHandSec = document.querySelector(".sec");
const clockHandMin = document.querySelector(".min");
const clockHandH = document.querySelector(".h");

const setDate = function(){
    
    const date = new Date();
    
    const sec = date.getSeconds();
    const secDeg = ((sec / 60) *360) + 90;
    clockHandSec.style.transform = `rotate(${secDeg}deg)`;
    
    const min = date.getMinutes();
    const minDeg = ((min / 60) *360) + 90;
    clockHandMin.style.transform = `rotate(${minDeg}deg)`;
    
    const h = date.getHours();
    const hDeg = ((h / 12) *360) + 90;
    clockHandH.style.transform = `rotate(${hDeg}deg)`;
    
    console.log(min);
    
}

setInterval(setDate, 1000);