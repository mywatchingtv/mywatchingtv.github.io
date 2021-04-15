document.getElementById("s1").onclick = function() {
    playPlayer("https://streaming.mytvback.com:443/stream/moqWr-2SiAyv0oZWikDS7A/1618531458/channel005/stream.m3u8");
};

document.getElementById("s2").onclick = function() {
    playPlayer("https://c402-node62-cdn.connectmedia.hu/33001/a64dd430fcda49d998f6d49e501db4d9/60786c74/ch4.m3u8");
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