var user=parseInt(prompt("Let's start the time:"))
var startMin=user;
var time=startMin*60

var countdown=document.getElementById('countdown')
setInterval(countDown,1000)
function countDown(){
    var minutes=Math.floor(time/60)
    var seconds=time%60
    countdown.innerHTML=`${minutes}:${seconds}`
    time--;
}