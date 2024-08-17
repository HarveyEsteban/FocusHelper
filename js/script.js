let playbtn = document.getElementById('play-btn');
let stopRes = document.getElementById('stop-reset-btn');
let timerDis = document.getElementById('timer');

let hrs = 0;
let sec = 0;
let min = 0;

let leadsec = 0;
let leadmin = 0;
let leadhrs = 0;

let timerStat = "Stop";
let timeInterval = null;

function stopWatch() {

    sec++;

    if (sec / 60 === 1) {
        sec = 0;
        min++;
        if (min / 60 === 1) {
            min = 0;
            hrs++;
        }
    }

    if (sec < 10) {
        leadsec = "0" + sec.toString();
    }
    else {
        leadsec = sec
    }
    if (min < 10) {
        leadmin = "0" + min.toString();
    }
    else {
        leadmin = min
    }
    if (hrs < 10) {
        leadhrs = "0" + hrs.toString();

    }
    else {
        leadhrs = hrs
    }

    timerDis.innerHTML = leadhrs + ":" + leadmin + ":" + leadsec;
}

playbtn.addEventListener('click', () => {

    if (timerStat === "Stop") {
        timeInterval = window.setInterval(stopWatch, 1000)
        timerStat = "Play";
    }
    else {
        console.log("Error Has occurred: ");
    }
});

stopRes.addEventListener('click', () => {

    if (timerStat === "Play") {
        window.clearInterval(timeInterval);
        timerStat = "Stop";
    }

});