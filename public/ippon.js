const video = document.getElementById("video")
navigator.mediaDevices.getUserMedia({
    video: true,
    audio: false,
}).then(stream => {
    video.srcObject = stream;
    video.play()
}).catch(e => {
    console.log(e)
})


document.addEventListener('keypress', push);

var point = 0;

function push (e){
    if (e.code === 'Enter'){
        point = 0;
    }else{
        point ++;
        console.log(point);
    }
}


function get(){

    var canvas = document.getElementById("canvas");
    if (point>=1) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFF33";
        ctx.fillRect (0, 0, 800, 600);
        ctx.clearRect(60, 65, 680, 470);
        ctx.strokeStyle = "#CCCC00"
        ctx.strokeRect(60, 65, 680, 470);
    }
    if (point>=2) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFF33";
        ctx.fillRect (60, 65, 680, 470);
        ctx.clearRect(120, 130, 560, 340);
        ctx.strokeStyle = "#CCCC00"
        ctx.strokeRect(120, 130, 560, 340);
    }
    if (point>=3) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFF33";
        ctx.fillRect (120, 130, 560, 340);
        ctx.clearRect(180, 195, 440, 210);
        ctx.strokeStyle = "#CCCC00"
        ctx.strokeRect(180, 195, 440, 210);
    }
    if (point>=4) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFF33";
        ctx.fillRect (180, 195, 440, 210);
        ctx.clearRect(240, 260, 320, 80);
        ctx.strokeStyle = "#CCCC00"
        ctx.strokeRect(240, 260, 320, 80);
    }
    if (point>=5) {
        var ctx = canvas.getContext("2d");
        ctx.fillStyle = "#FFFF33";
        ctx.fillRect (240, 260, 320, 80);
    }
    if(point==0){
        var ctx = canvas.getContext("2d"); 
        ctx.clearRect(0, 0, 800, 600);
    }
}
setInterval(get,10);