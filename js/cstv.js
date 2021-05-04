var channel = localStorage.channelNumber;
var stepper = parseInt(localStorage.channelNumber);
var videoName;
var channelName;
var sWidth = screen.width;
var pWidth = sWidth * 0.45;

numberStepper();
channelList();


function playPlayer(newLink) {
    
    //kiir();
    presentChild();
    videoName = ("my-video" + channel);
    document.getElementById("channelName").innerHTML = channelName;
    buildPlayer();
    document.getElementById("vlink").src = newLink;
    videoInit();
    setTimeout(function(){
        document.getElementById("channelName").style.visibility = "hidden";
    },5000);
};   

function kiir() {
    console.log(channel);
};

function channelList() {
    if (channel == 1) {
        channelName = "RTL KLUB";
        playPlayer("https://stream.y5.hu:443/stream/stream_rtlklub/hls1/stream.m3u8");
    } else if (channel == 2) {
        channelName = "RTL2";
        playPlayer("https://stream.y5.hu:443/stream/stream_rtl2/hls1/stream.m3u8");
    } else if (channel == 3) {
        channelName = "RTL GOLD";
        playPlayer("https://stream.y5.hu:443/stream/stream_rtlgold/stream.m3u8");
    } else if (channel == 4) {
        channelName = "RTL+";
        playPlayer("https://stream.y5.hu:443/stream/stream_rtlp/stream.m3u8");
    } else if (channel == 5) {
        channelName = "FILM+";
        playPlayer("https://stream.y5.hu:443/stream/stream_filmp/hls1/stream.m3u8");
    } else if (channel == 6) {
        channelName = "COOL";
        playPlayer("https://stream.y5.hu:443/stream/stream_cool/hls1/stream.m3u8");
    } else if (channel == 7) {
        channelName = "SOROZAT+";
        playPlayer("https://stream.y5.hu/stream/stream_sorozatp/stream.m3u8");
    } else if (channel == 8) {
        channelName = "HBO";
        playPlayer("http://82.197.212.210:8000/play/a11d/index.m3u8");
    };
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
    x.setAttribute("id", videoName);
    y.appendChild(x);
    document.getElementById(videoName).setAttribute("class", "video-js vjs-default-skin");
    document.getElementById(videoName).setAttribute("controls", "");
    document.getElementById(videoName).setAttribute("preload", "auto");
    document.getElementById(videoName).setAttribute("width", pWidth);
    //document.getElementById(videoName).setAttribute("height", "150");
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
    var myPlayer = videojs(videoName);
    videojs(document.getElementById(videoName), {}, function(){}); 
    
    //myPlayer.ready(function() {
    //var myVar = ;
    //setTimeout(function(){
    //    ;
    //    console.log("I am the third log after 5 seconds");
    //},5000);
    //myPlayer.requestFullscreen();
    //console.log("0mp");
    //})
};

function numberStepper() {
    window.addEventListener('wheel', function(event){
        if (event.deltaY < 0){
            stepper = stepper + 1;
            if (stepper <= 7) {  
            } else {
                stepper = 7;
            };
            channelNumber();
        } else if (event.deltaY > 0) {
            stepper = stepper - 1;
            if (stepper >= 1) {    
            } else {
                stepper = 1;
            };
            channelNumber();
        };
    });
    };

    function channelNumber() {
        if (typeof(Storage) !== "undefined") {
          if (localStorage.setItem) {
            localStorage.setItem("channelNumber", stepper);
          } else {
            localStorage.setItem = 1;
          }
        }
        channel = localStorage.channelNumber;
        location.reload();
        channelList();
      };