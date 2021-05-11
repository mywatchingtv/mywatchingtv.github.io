var videoFormat;

document.getElementById("k1").onclick = function() {
    videoFormat = 2;
    playPlayer();
    //playPlayer("https://streaming.mytvback.com:443/stream/1twqLb8XauVBWDLLs-xPzA/1618531439/channel001/stream.m3u8");
};

document.getElementById("k2").onclick = function() {
    playPlayer("https://streaming.mytvback.com:443/stream/rWGeoFGF_a0c9tNoyg6RUw/1618531482/channel002/stream.m3u8");
};

document.getElementById("k3").onclick = function() {
    playPlayer("https://streaming.mytvback.com:443/stream/Iw1BSEb7u0LjGsCWx0e1lg/1618531452/channel006/stream.m3u8");
};

document.getElementById("k4").onclick = function() {
    playPlayer("https://streaming.mytvback.com:443/stream/Ud4zvhg-GI79VCbDPWNqMw/1618531427/channel003/stream.m3u8");
};

document.getElementById("k5").onclick = function() {
    playPlayer("https://streaming.mytvback.com:443/stream/B_ngdfUTjOcdXWrWRgWvFg/1618531433/channel004/stream.m3u8");
};

document.getElementById("k6").onclick = function() {
    playPlayer("");
};


function playPlayer(newLink) {
    presentChild();
    buildPlayer();
    //document.getElementById("vlink").src = newLink;
    //videoInit();
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
    if (videoFormat == 1) {
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
    } else if (videoFormat == 2) {
        var x = document.createElement("iframe");
        var y = document.getElementById("cen");
        x.setAttribute("id", "my-video");
        y.appendChild(x);
        //document.getElementById("my-video").setAttribute("class", "video-js vjs-default-skin");
        //document.getElementById("my-video").setAttribute("controls", "");
        document.getElementById("my-video").setAttribute("loading", "lazy");
        document.getElementById("my-video").setAttribute("scr", "");
        //document.getElementById("my-video").setAttribute("preload", "auto");
        //document.getElementById("my-video").setAttribute("width", "300");
        //document.getElementById("my-video").setAttribute("height", "165");
        //document.getElementById("my-video").setAttribute("scrolling", "no");
        //document.getElementById("my-video").setAttribute("frameborder", "0");
        //document.getElementById("my-video").setAttribute("marginwidth", "0");
        //document.getElementById("my-video").setAttribute("marginheight", "0");
        //document.getElementById("my-video").setAttribute("allowfullScreen", "true");
        //document.getElementById("my-video").setAttribute("webkitallowfullscreen", "true");
        //document.getElementById("my-video").setAttribute("mozallowfullscreen", "true");
        //var z = document.createElement("SOURCE");
        //z.setAttribute("id", "vlink");
        //x.appendChild(z);
        //document.getElementById("vlink").setAttribute("src", "");
        //document.getElementById("vlink").setAttribute("type", "application/x-mpegurl");



        //<iframe src="http://play4you.icu/e/1b6d437dbd" height="165"  scrolling="no" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
    }
};  

function videoInit() {
    //document.getElementById("my-video").setAttribute("datasetup", "");
    videojs(document.getElementById("my-video"), {}, function(){});
    var myPlayer = videojs('my-video');
    myPlayer.ready(function() {
    myPlayer.requestFullscreen();
    });
};