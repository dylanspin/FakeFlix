
function page(loc){
  window.location.href = loc+".html";
}

function check(){
  var p;
  for(p=1; p<=7; p++){
    document.getElementById("links"+p).style.visibility = "hidden";
  }
  console.log(document.getElementById('header').offsetHeight);
}

function random(){
  var i = 0;
  for(i=1; i<=31; i++){
    var random = Math.floor(Math.random() * 105+1);
    document.getElementById(i).innerHTML = "<div class='movie'><img src='pic/m"+random+".jpg' class='film'></div>";
  }
}

var af = [0,0,0,0,0,0,0,0];
var tell = [3,3,3,3,3,3,3,3];

function next(t){
  if(tell[t] >= 0){
    af[t]-=2728;
    tell[t] --;
    document.getElementById("links"+t).style.visibility = "visible";
    document.getElementById("slide"+t).style.marginLeft = af[t]+"px";
    if(tell[t] == -1){
      document.getElementById("rechts"+t).style.visibility = "hidden";
    }
  }
}

function back(t){
  if(tell[t] >= -1 && tell[t] <= 2 ){
    af[t]+=2728;
    tell[t] ++;
    document.getElementById("rechts"+t).style.visibility = "visible";
    document.getElementById("slide"+t).style.marginLeft = af[t]+"px";
    if(tell[t] == 3){
      document.getElementById("links"+t).style.visibility = "hidden";
    }
  }
  else{
    document.getElementById("links"+t).style.visibility = "hidden";
  }
}

var checktrue = [true,true,true];
var divs = ["search","notificatie","acount"]

function schuif(t,breed){
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) { //checkt all mobile moet nog aangepast worden
    breed -= 30;
  }
  var div = document.getElementById(divs[t]);
  if(checktrue[t]){
    checktrue[t] = false;
    div.style.visibility = "visible";
    if(divs[t] == "search"){
      div.style.width = breed+"vw";
    }
    else{
      div.style.height = breed+"vh";
    }
  }
  else{
    checktrue[t] = true;
    div.style.visibility = "hidden";
    if(divs[t] == "search"){
      div.style.width = "0vw";
    }
    else{
      div.style.height = "0vh";
    }
  }
}
