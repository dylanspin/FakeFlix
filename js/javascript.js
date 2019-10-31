
function page(loc){
  if(loc == 10){
    window.location.href = "mylist.html";
    console.log("tien");
  }
  else{
    console.log("test");
    window.location.href = loc+".html";
  }
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

function profiel(){
  var path = window.location.pathname;
  var page = path.split("/").pop().replace('.html','');
  document.getElementById('profile').innerHTML = "<img src='pic/prof"+page+".png' class='image' onclick='schuif(2,46)'>";
}

function random(){
  var films = ["","Forrest Gump","Live Die repeat","Hacksaw Ridge","Joker","Ted","King Arthur","LEGEND",
               "Ted 2","A million ways to die in the wild west","Ready Player one","Why Him","Vacation"
               ,"We are the Millers","Fury","Mad Max","Advengers End game","Spider man 2","Spider man",
               "Deadpool","night at the museum","The wolf of wall street","Dunkirk","Martian","Venom",
               "Ant-man","Grown ups 2","Grown ups 1","War dogs","Pirates of the carabian","Pirates of the carabian",
                "Jhony English 2","Jhony English","22 Jump Street","23 Jump Street","Baby driver","Green book","Inglorius bastards",
               "Transcendence","Burnt","White boy Ricky","Unbroken","Hansel and Gretal","U.N.C.L.E","Non-Stop","Idiocrecy","Click",
                ]
    var random = Math.floor(Math.random() * 46+1);
    document.getElementById('naam').innerHTML = films[random];
    document.getElementById('movie').innerHTML = "<img src='pic/m"+random+".jpg' class='film'>";
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
