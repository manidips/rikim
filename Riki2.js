var mySong = document.getElementById("mySong");
var icon = document.getElementById("icon");
var icon1 = document.getElementById("icon1")

// icon.onclick = function(){
//     if(mySong.paused){
//         mySong.play();
//         icon.src="Music1/pause-removebg-preview.png"
//     }else{
//         mySong.paused();
//         icon.src="Music1/play-symbol-removebg-preview.png"
//     }
// }
icon.onclick = function(){
    mySong.play();
}
icon1.onclick = function(){
    mySong.pause();
}