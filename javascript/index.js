let hrs = document.getElementById('Hrs')
let min = document.getElementById('Min')
let sec = document.getElementById('Sec')

setInterval(()=>{
    let  currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours()<10?'0':'') + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes()<10?'0':'') + currentTime.getMinutes();
    sec.innerHTML = (currentTime.getSeconds()<10?'0':'') + currentTime.getSeconds();
},1000)
