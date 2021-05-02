//document.getElementById("csat").hide;
let channelNum = 2;
let channelData;

function read() {
    fetch('/my.txt')
    .then(response => response.text())
    .then(data => {
  	// Do something with your data
  	console.log(data);
    channelData = data;
    console.log(channelData);
  });
};

read();

console.log("I am the first log");

setTimeout(function(){
    console.log("I am the third log after 5 seconds");
 

buildPlayer();

//document.getElementById("vlink").src = "https://stream.y5.hu:443/stream/stream_cool/hls1/stream.m3u8";
document.getElementById("vlink").src = channelData;
channelNum = channelData;
videoInit();



createChannelNumber();
numberStepper();




function createChannelNumber() {
    var x = document.createElement("p");
        var y = document.getElementById("myDIV");
        x.setAttribute("id", "csat");
        y.appendChild(x);
        if (channelNum == null) {
            channelNum = 5;
            document.getElementById("csat").innerHTML = channelNum;       
        } else {
            document.getElementById("csat").innerHTML = channelNum;
        };
};



function numberStepper() {
//var csat = parseInt(document.getElementById("csat").innerHTML);
channelNum = parseInt(document.getElementById("csat").innerHTML);
window.addEventListener('wheel', function(event){
    if (event.deltaY < 0){
        //csat = csat + 1;
        channelNum = channelNum + 1;
        //document.getElementById("csat").innerHTML = csat;
        document.getElementById("csat").innerHTML = channelNum;
        //document.getElementById;
        presentChild;
        channelList();
    } else if (event.deltaY > 0) {
        //csat = csat - 1;
        channelNum = channelNum - 1;
        //if (csat < 1){
        if (channelNum >= 1) {    
            //document.getElementById("csat").innerHTML = csat;
            document.getElementById("csat").innerHTML = channelNum;
            channelList();
        } else {
            // csat = 1;};
            channelNum = 1;
        };
    };
});
};

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
    //reLoad();
    
    //presentChild();
    //buildPlayer();
    //document.getElementById("vlink").src = newLink;
    //videoInit();
};   

function reLoad() {
    var myPlayer = videojs('my-video');
    myPlayer.reset ();
    //var child = document.getElementById("cen").childElementCount;
    //location.reload();
};

function presentChild() {
    var child = document.getElementById("cen").childElementCount;
    console.log(child);
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
    //var myPlayer = videojs('my-video');
    //myPlayer.ready(function() {
    //myPlayer.requestFullscreen();
    //});
};  

},1000);

console.log("I am the second log");