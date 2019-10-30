
function page(loc){
  window.location.href = loc+".html";
}
function check(){
  var y = window.scrollY;
  if(y <= 270){
    document.getElementById('header').style.background = "none";
  }
  else{
    document.getElementById('header').style.backgroundColor = "#141414";
  }
}

function random(){
  var films = ["","Forrest Gump","Live Die repeat","Hacksaw Ridge","Joker","Ted","King Arthur","LEGEND",
               "Ted 2","A million ways to die in the wild west","Ready Player one","Why Him","Vacation"
               ,"We are the Millers","Fury","Mad Max","Advengers End game","Spider man 2","Spider man",
               "Deadpool","night at the museum","The wolf of wall street","Dunkirk","Martian","Venom",
               "Ant-man","Grown ups 2","Grown ups 1","War dogs","Pirates of the carabian","Pirates of the carabian"]
    var random = Math.floor(Math.random() * 30+1);
    document.getElementById('naam').innerHTML = films[random];
    document.getElementById('movie').innerHTML = "<img src='pic/m"+random+".jpg' class='film'>";
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
