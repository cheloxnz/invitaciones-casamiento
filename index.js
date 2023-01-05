var count = 0;

document.getElementById("toggle-button").onclick = function() {
        if(count%2==0){
            document.getElementById("player2").play();
            document.getElementById("icons").classList.remove("fa-play-circle-o");
            document.getElementById("icons").classList.add("fa-pause-circle-o");
        }else{
            document.getElementById("player2").pause();
            document.getElementById("icons").classList.add("fa-play-circle-o");
            document.getElementById("icons").classList.remove("fa-pause-circle-o");
        }
        count++;
}

const end = new Date("Apr 23, 2023 00:00:00").getTime();
//const end = new Date("November 09, 2020 00:00:00").getTime();
const dayEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const seconds = 1000;
const minutes = seconds * 60;
const hours = minutes * 60;
const days = hours * 24;

const x = setInterval(function () {
  let now = new Date().getTime();
  const difference = end - now;
  
  if (difference < 0) {
    clearInterval(x);
    document.getElementById("done").innerHTML = "We're married! 🎉";
    return;
  }
    
  dayEl.innerText = Math.floor(difference / days);
  hoursEl.innerText = Math.floor( (difference % days) / hours );
  minutesEl.innerText = Math.floor( (difference % hours) / minutes );
  secondsEl.innerText = Math.floor( (difference % minutes) / seconds );  
}, seconds);
