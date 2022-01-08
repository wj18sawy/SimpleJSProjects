// Stopwatch
const startStopBtn = document.querySelector("#startStopBtn");
const resetBtn = document.querySelector("#resetBtn");
const watch = document.querySelector(".watch");
const tensText = document.querySelector("span#tens");
const secondsText = document.querySelector("span#seconds");
const minutesText = document.querySelector("span#minutes");

let tens = 0;
let seconds = 0;
let minutes = 0;
let going = false;

function start () {

    tens++;
    if(tens < 10){
        tensText.innerHTML = "0" + tens
    }
    else if (tens > 99){
        // if 100 tens, add a second
        seconds++;
        if(seconds < 10){
            secondsText.innerHTML = "0" + seconds
        }
        else if (seconds > 59){
            // if 60 seconds, add a minute
            minutes++;
            if(minutes < 10){
                minutesText.innerHTML = "0" + minutes
            }
            else if(minutes > 59){
                clearInterval() // Add interval here
            }
            else{
                minutesText.innerHTML = minutes;
            }

            // and clear seconds to 00
            seconds = 0;
            secondsText.innerHTML = "00";
        }
        else{
            secondsText.innerHTML = seconds;
        }

        // and clear tens to 00
        tens = 0;
        tensText.innerHTML = "00";
    }
    else {
        tensText.innerHTML = tens;
    }
    return;
}

let intervalId;

startStopBtn.onclick = () => {
        
    if(going){
        going = false;
        clearInterval(intervalId);
        startStopBtn.innerHTML = "Start";
        return;
    }
    else{
        going = true;
        startStopBtn.innerHTML = "Stop";
    }

    intervalId = setInterval((start), 10);
}

resetBtn.onclick = () => {   
    going = false;
    clearInterval(intervalId);
    tens = 0;
    seconds = 0;
    minutes = 0;
    tensText.innerHTML = "00";
    secondsText.innerHTML = "00";
    minutesText.innerHTML = "00";
    startStopBtn.innerHTML = "Start";
}
