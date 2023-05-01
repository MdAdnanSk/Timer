const timeshow = document.querySelector("h1");

var setMinutes=parseInt(prompt("Enter Minutes"));
var setSeconds=parseInt(prompt("Enter Seconds"));
var time = setMinutes*60 + setSeconds;;

// function getValues(){
//     setMinutes=parseInt(document.querySelector(".minutes").value);
//     setSeconds=parseInt(document.querySelector(".seconds").value);

//     window.location.href="./index.html";
// }

displayTime(time);


const countDown = setInterval(function(){
    time--;
    displayTime(time);

    if(time<=0 || time<1){
        endTime();
        clearInterval(countDown);
    }
},1000)

function displayTime(second){
    const min=Math.floor(second/60);
    const sec=Math.floor(second%60);

    timeshow.innerHTML=`${min}:${sec}`;
};

function endTime(){
    timeshow.innerHTML="TimeOut";
};
