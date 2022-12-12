//get contener of html file
const contener = document.querySelector(".contener");

//created a 'window' with border white of bot
let border = window.document.createElement("div");
border.id = "grand_bordure";
border.style.width = window.innerWidth - 10 + "px";
border.style.height = window.innerHeight - 10 + "px";
border.style.border = "1px solid white";
contener.appendChild(border);

//created a red content of bot
const fenetre = document.createElement("div");
fenetre.id = "fenetre";
fenetre.style.borderRadius = "20px 20px 0 0";
fenetre.style.overflow = "hidden";
border.appendChild(fenetre);

//created a head color white
let head = window.document.createElement("div");
head.id = "head";
head.style.background = "#fff";
head.style.fontSize = "20pt";
head.style.fontFamily = "cooper";
head.style.border = "1px solid white";
head.style.height = "20%";
head.innerText = "Chat Bot";
fenetre.appendChild(head);

//image icon on chatbot
// let img = window.document.createElement('img');
// img.id='img';
// img.class='fd';
// img.style.backgroundImage='url("../img/apple.png")';
// img.style.backgroundSize='cover';
// img.style.backgroundPosition='center center';
// img.style.minWidth='80px';
// img.style.margin='10%';
// img.style.minHeight='100px';
// img.style.borderRadius='100%';
// img.style.border='0.01em solid #3f3f3f';
// head.prepend(img);

//parent of body green color red
let firstBody = window.document.createElement("div");
firstBody.id = "firstBody";
firstBody.style.width = "100%";
firstBody.style.height = "100%";
firstBody.style.display = "flex";
firstBody.style.flexDirection = "column";
firstBody.style.justifyContent = "flex-end";
firstBody.style.background = "transparent";
fenetre.appendChild(firstBody);

//body content of text green of '...'
let body = window.document.createElement("div");
body.style.background = "transparent";
body.style.maxHeight = "420px";
body.style.overflowY = "auto";
firstBody.appendChild(body);

//bottom of bot [input & butttom]
let botTom = window.document.createElement("div");
botTom.id = "botTom";
botTom.style.background = "#fff";
botTom.style.height = "10%";
botTom.style.display = "flex";
botTom.style.justifyContent = "center";
botTom.style.alignItems = "center";
fenetre.appendChild(botTom);

//input text
let input = window.document.createElement("input");
input.id = "input";
input.placeholder='or enter to send...'
input.style.borderRadius = "100px";
input.style.height = "50%";
input.style.width = "80%";
input.style.padding = "0 10px 0 10px";
botTom.appendChild(input);

//icon send
let spanSend = window.document.createElement("spanSend");
spanSend.innerText = "send";
spanSend.style.display = "grid";
spanSend.style.placeContent = "center";
spanSend.style.margin = "5px";
spanSend.style.padding = "5px";
spanSend.style.borderRadius = "2px";
spanSend.style.cursor = "pointer";
spanSend.style.border = "1px solid #3f3f3f";
botTom.appendChild(spanSend);
