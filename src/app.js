//get text of input and point into variable
var userText;
//
function addSend(){
  if (userText != "") {
    //
    //created a random

    //

    //
    userText = input.value;
    //
    var newText = userText.split(" ");
    //pierre papier siceau
    var chance = ["pierre", "papier", "ciseau"];
    //
    ///swicth sase
    //
    var random = (nbr) => {
      return Math.floor(Math.random() * nbr);
    };
    //

    switch (newText[0]) {
      case "calcul":
        ansResult = eval(newText[1]);
        break;

      // incorporez autant de case que vous le souhaitez
      default:
        responsejs();
    }
    //
    //
    //
    //end else of typeof
    input.value = "";
    pause(() => {
      body.appendChild(insert(userText));
      body.scrollTop = body.scrollHeight;
      pause(() => {
        response(); //dans le fichier src/response.js
      });
    });
  }
}
// body.scrollTop = body.scrollHeight;
input.onkeypress = (e) => {
  if (e.code == "Enter") {
    if(input.value!=""){
      addSend();
    }
  }
};
spanSend.onclick=()=>{
  if(input.value!=""){
    addSend();
  }
}

//function to insert message in body
function insert(textMessage) {
  let p = window.document.createElement("div");
  //style of 'p' to positioning right yellow
  p.style.background = "transparent";
  p.style.display = "flex";
  p.style.justifyContent = "flex-end";
  p.style.overflow = "hidden";
  //text into 'p' and span brown
  let span = window.document.createElement("span");
  p.appendChild(span);
  span.innerText = textMessage;
  span.style.width = "fit-content";
  span.style.background = "#fe5";
  span.style.padding = "10px";
  span.style.margin = "1px";
  span.style.borderRadius = "15px 15px 0px 15px";
  span.style.animation = "anime 0.5s linear ";
  return p;
}

//function to rest pause
function pause(functionPaused) {
  setTimeout(functionPaused, 500);
}

function botAnswer(msg) {
  //creat a champ of bot's message
  let botP = window.document.createElement("div");
  botP.style.background = "transparent";
  botP.style.display = "flex";
  let botSpan = window.document.createElement("span");
  botP.appendChild(botSpan);
  botSpan.innerHTML = msg;
  botSpan.style.background = "#4f7";
  botSpan.style.padding = "10px";
  botSpan.style.margin = "1px";
  botSpan.style.borderRadius = "15px 15px 15px 0px";
  return botP;
}

//three point to wainting
function p3() {
  let P3 = window.document.createElement("div");
  P3.id = "P3";
  P3.style.background = "#4f7";
  P3.style.display = "flex";
  P3.style.padding = "15px";
  P3.style.borderRadius = "15px 15px 15px 0px";
  P3.style.width = "fit-content";
  let span1 = window.document.createElement("span");
  let span2 = window.document.createElement("span");
  let span3 = window.document.createElement("span");
  P3.appendChild(span1);
  P3.appendChild(span2);
  P3.appendChild(span3);
  span1.style.width = "5px";
  span2.style.width = "5px";
  span3.style.width = "5px";
  span1.style.height = "5px";
  span2.style.height = "5px";
  span2.style.margin = "0 5px";
  span3.style.height = "5px";
  span1.style.background = "#000";
  span2.style.background = "#000";
  span3.style.background = "#000";
  span1.style.borderRadius = "15px ";
  span2.style.borderRadius = "15px ";
  span3.style.borderRadius = "15px ";
  span1.style.animation = "grandi1 1s linear infinite";
  span2.style.animation = "grandi2 1s linear infinite";
  span3.style.animation = "grandi3 1s linear infinite";
  return P3;
}
