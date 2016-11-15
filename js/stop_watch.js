/**
 * Created by David on 11/15/16.
 */
"use strict";
(function () {

    var stopwatchInterval = 100;    //counting in .1 seconds
    var time = 0;                   //timer start time
    var timer;                      //will hold the setInterval function
    var stopClicks = 1;     //provides a variable to prevent startTimer function from being called without a stop click while timer is running

    function startTimer () {
        if (time >= 0 && stopClicks >= 1) {
            timer = setInterval(updateTimer, stopwatchInterval);
            stopClicks = 0;
        }
    }

    function updateTimer () {
        document.getElementById("time").innerHTML = time.toFixed(1);
        time += .1;
    }

    function stopTimer () {
        clearInterval(timer);
        stopClicks += 1;
    }

    function resetTimer () {
        clearInterval(timer);
        time = 0;
        stopClicks = 1;
        document.getElementById("time").innerHTML = time.toFixed(1);
    }

    document.getElementById("startBtn").addEventListener("click", startTimer);
    document.getElementById("stopBtn").addEventListener("click", stopTimer);
    document.getElementById("resetBtn").addEventListener("click", resetTimer);


})();
