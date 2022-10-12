//Global variables
const timeElement = document.querySelector(".watch #stopwatch");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

let seconds = 0; //acts as counter
let interval = null;

//Event listeners
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);

//Update the time
function handleTime() {
  seconds++; //seconds=seconds+1

  //Format time: 1hr=60min=3600sec
  let hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
  let mins = String(Math.floor((seconds - hours * 3600) / 60)).padStart(2, "0");
  let secs = String(seconds % 60).padStart(2, "0");

  /* Either use padStart() for string or use below code 
if (secs<10) secs='0'+secs;
if (mins<10) mins='0'+mins;
if (hours<10) hours='0'+hours;
10보다 작은건 두자리 숫자가 아닌것을 이용한 코드
 */

  timeElement.innerText = `${hours}:${mins}:${secs}`;
}

function startTime(){
    if(interval){
        return
        //using return w/o value returns 'undefined'
        //if interval exists, return 
        //if it is already running, we don't need to start again.
    }
    interval=setInterval(handleTime,1000); //every 1seconds, calling handleTime function
}

function stopTime(){
    clearInterval(interval); //Cancel the repeating interval
    interval=null;
}
function resetTime(){
    stopTime();
    seconds=0;
    timeElement.innerText='00:00:00';
}

/*need to make if user press stop button it will change to resume button and if user click it again
one button two events? 
*/