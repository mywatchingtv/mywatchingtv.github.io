let videoName = "my-video";
let channelNumber;

document.getElementById("i1").onclick = function() {
    channelNumber = 1;
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlklub/hls1/stream.m3u8");
};

document.getElementById("i2").onclick = function() {
    channelNumber = 2;
    playPlayer("https://stream.y5.hu:443/stream/stream_rtl2/hls1/stream.m3u8");
};

document.getElementById("i3").onclick = function() {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlgold/stream.m3u8");
};

document.getElementById("i4").onclick = function() {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlp/stream.m3u8");
};

document.getElementById("i5").onclick = function() {
    playPlayer("https://stream.y5.hu:443/stream/stream_filmp/hls1/stream.m3u8");
};

document.getElementById("i6").onclick = function() {
    playPlayer("https://stream.y5.hu:443/stream/stream_cool/hls1/stream.m3u8");
};

document.getElementById("i7").onclick = function() {
    playPlayer("https://stream.y5.hu/stream/stream_sorozatp/stream.m3u8");
};

document.getElementById("i8").onclick = function() {
    playPlayer("");
};



function playPlayer(newLink) {
    presentChild();
    buildPlayer();
    document.getElementById("vlink").src = newLink;
    videoInit();
};   

function presentChild() {
    var child = document.getElementById("cen").childElementCount;
    if (child != 0) {
        var myobj = document.getElementById("vlink");
        myobj.remove();
        var myobj2 = document.getElementById(videoName);
        myobj2.remove(); 
    };
}; 

function buildPlayer() {
var x = document.createElement("video");
    var y = document.getElementById("cen");
    //let videoName = "my-video"
    videoName = ("my-video" + channelNumber);
    console.log(videoName);
    
    x.setAttribute("id", videoName);
    y.appendChild(x);
    document.getElementById(videoName).setAttribute("class", "video-js vjs-default-skin");
    document.getElementById(videoName).setAttribute("controls", "");
    document.getElementById(videoName).setAttribute("preload", "auto");
    document.getElementById(videoName).setAttribute("width", "300");
    document.getElementById(videoName).setAttribute("height", "150");
    document.getElementById(videoName).setAttribute("autoplay", "true");
    document.getElementById(videoName).setAttribute("AllowfullScreen", "true");
    var z = document.createElement("SOURCE");
    z.setAttribute("id", "vlink");
    x.appendChild(z);
    document.getElementById("vlink").setAttribute("src", "");
    document.getElementById("vlink").setAttribute("type", "application/x-mpegurl");
};  

function videoInit() {
    //document.getElementById("my-video").setAttribute("datasetup", "");
    videojs(document.getElementById(videoName), {}, function(){}); 
    var myPlayer = videojs(videoName);
    //myPlayer.ready(function() {
    //var myVar = ;
    //setTimeout(function(){
    //    myPlayer.requestFullscreen();
    //    console.log("I am the third log after 5 seconds");
    //},5000);
    //myPlayer.requestFullscreen();
    //console.log("0mp");
    //})
};