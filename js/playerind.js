
document.getElementById("i1").onclick = function() {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlklub/hls1/stream.m3u8");
};

document.getElementById("i2").onclick = function() {
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
        var myobj2 = document.getElementById("my-video");
        myobj2.remove(); 
    };
}; 

function buildPlayer() {
var x = document.createElement("video");
    var y = document.getElementById("cen");
    x.setAttribute("id", "my-video");
    y.appendChild(x);
    document.getElementById("my-video").setAttribute("class", "video-js vjs-default-skin");
    document.getElementById("my-video").setAttribute("controls", "");
    document.getElementById("my-video").setAttribute("preload", "auto");
    document.getElementById("my-video").setAttribute("width", "300");
    document.getElementById("my-video").setAttribute("height", "150");
    document.getElementById("my-video").setAttribute("autoplay", "true");
    document.getElementById("my-video").setAttribute("AllowfullScreen", "true");
    var z = document.createElement("SOURCE");
    z.setAttribute("id", "vlink");
    x.appendChild(z);
    document.getElementById("vlink").setAttribute("src", "");
    document.getElementById("vlink").setAttribute("type", "application/x-mpegurl");
};  

function videoInit() {
    //document.getElementById("my-video").setAttribute("datasetup", "");
    videojs(document.getElementById("my-video"), {}, function(){});
    var myPlayer = videojs('my-video');
    myPlayer.ready(function() {
    myPlayer.requestFullscreen();
    });
};