//document.getElementById("csat").hide;
var channelNum;

function channelNumber() {
    var x = document.createElement("p");
        var y = document.getElementById("myDIV");
        x.setAttribute("id", "csat");
        y.appendChild(x);
        if (channelNum == null) {
            document.getElementById("csat").innerHTML = 1;       
        } else {
            document.getElementById("csat").innerHTML = channelNum;
        };
};

channelNumber();


channelList();
//var csat = parseInt(document.getElementById("csat").innerHTML);
channelNum = parseInt(document.getElementById("csat").innerHTML);
window.addEventListener('wheel', function(event){
    if (event.deltaY < 0){
        //csat = csat + 1;
        channelNum = channelNum + 1;
        //document.getElementById("csat").innerHTML = csat;
        document.getElementById("csat").innerHTML = channelNum;
        document.getElementById;
        channelList();
    } else if (event.deltaY > 0) {
        //csat = csat - 1;
        channelNum = channelNum - 1;
        //if (csat < 1){
        if (channelNum < 1) {    
            // csat = 1;};
            channelNum = 1; 
        };
        //document.getElementById("csat").innerHTML = csat;
        document.getElementById("csat").innerHTML = channelNum;
        channelList();
    };
});

function channelList() {
if (parseInt(document.getElementById("csat").innerHTML) == 1) {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlklub/hls1/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 2) {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtl2/hls1/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 3) {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlgold/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 4) {
    playPlayer("https://stream.y5.hu:443/stream/stream_rtlp/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 5) {
    playPlayer("https://stream.y5.hu:443/stream/stream_filmp/hls1/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 6) {
    playPlayer("https://stream.y5.hu:443/stream/stream_cool/hls1/stream.m3u8");
} else if (parseInt(document.getElementById("csat").innerHTML) == 7) {
    playPlayer("https://stream.y5.hu/stream/stream_sorozatp/stream.m3u8");
};
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
    document.getElementById("my-video").setAttribute("width", "600");
    document.getElementById("my-video").setAttribute("height", "340");
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
