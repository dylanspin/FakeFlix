
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
  for(i=1; i<=24; i++){
    var random = Math.floor(Math.random() * 105+1);
    document.getElementById(i).innerHTML = "<div class='movie'><img src='pic/m"+random+".jpg' class='film'></div>";
  }
}

var af = [0,0,0,0,0,0,0,0];
var tell = [3,3,3,3,3,3,3,3];

function next(t){
  if(tell[t] >= 0){
    af[t]-=2500;
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
    af[t]+=2500;
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
