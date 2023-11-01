let close = document.querySelector(".close-btn");
let vedio_player=document.querySelector(".vedio-player");
let myvideo = document.getElementById("video");

function closeVideo(){
    vedio_player.style.display= "none";
    myvideo.pause()
}
function playVideo(file){
        myvideo.src =file;
        vedio_player.style.display ="block"

}