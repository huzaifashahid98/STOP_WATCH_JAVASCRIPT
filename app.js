var count=0;
var flag=0;
var interval;
var minutes=document.getElementById('min');
var seconds=document.getElementById('sec')
var milliseconds=document.getElementById('msec')
var start=document.getElementById('start')
var stop_watch=document.getElementById('stop')
var reset=document.getElementById('reset')
function timer(){
    count=count+1;  
    milliseconds.innerHTML=count;
    if (count==100)
    {
        seconds.innerHTML++;
        count=0;
    }
    if(seconds.innerHTML==60)
    {
        minutes.innerHTML++;
        seconds.innerHTML=0;
    }
}
function start_timer(){
   
    start.disabled=true;
    stop_watch.disabled=false;
    reset.disabled=false;
    interval=setInterval(timer,10);
}

function stop_timer(){
    start.disabled=false;
   reset.disabled=false;
    stop_watch.disabled=true;
    clearInterval(interval)
}
function reset_timer()
{
    stop_watch.disabled=false;
    start.disabled=false;
    reset.disabled=true;
    minutes.innerHTML=0;
    seconds.innerHTML=0;
    milliseconds.innerHTML=0;
    stop_timer()
}
// setTimeout(stop_timer,6000)

