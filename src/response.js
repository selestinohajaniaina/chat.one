function responsejs() {
  var random = (nbr) => {
    return Math.floor(Math.random() * nbr);
  };
  //variable
  var newText = userText.split(" ");
  //rock paper siceau
  var chance = ["rock", "paper", "scissor"];
  //all
  if (userText.includes("hello") == true || userText.includes("hi") == true || userText.includes("coucou") == true || userText.includes("cc") == true) {
    ansResult = "Hello";
  } else if (userText.includes("paper") == true) {
    ansResult = chance[random(chance.length)];
    if (ansResult == "paper") {
      ansResult += "<br>we are same";
    }
    if (ansResult == "scissor") {
      ansResult += "<br>Congratulation! you win";
    }
    if (ansResult == "rock") {
      ansResult += "<br>Oh sorry! you lose";
    }
  } else if (userText.includes("rock") == true) {
    ansResult = chance[random(chance.length)];
    if (ansResult == "paper") {
      ansResult += "<br>Oh sorry! you lose";
    }
    if (ansResult == "scissor") {
      ansResult += "<br>Congratulation! you win";
    }
    if (ansResult == "rock") {
      ansResult += "<br>we are same";
    }
  } else if (userText.includes("scissor") == true) {
    ansResult = chance[random(chance.length)];
    if (ansResult == "paper") {
      ansResult += "<br>Congratulation! you win";
    }
    if (ansResult == "scissor") {
      ansResult += "<br>we are same";
    }
    if (ansResult == "rock") {
      ansResult += "<br>Oh sorry! you lose";
    }
  } else if (userText.includes("help") == true) {
    ansResult = `
  <b>Use one word of this list in your sentence:</b><br> - help, good, bye... //ex:Show me the list of help <br> -name <br> -date <br> -time <br>  -citation <br> -calcul //ex:calcul 2+3 <br> -rock, paper, scissor <br> -author <br> -kkk,😂, 🤣,...
  `;
  } else if (userText.includes("name") == true) {
    ansResult = "My name is Chat bot";
  } else if (userText.includes("kkk") == true || userText.includes("😂") == true || userText.includes("🤣") == true) {
    ansResult = "🤣🤣😂LOL";
  } else if (userText.includes("good") == true) {
    ansResult = "yes, right!";
  } else if (userText.includes("ping") == true) {
    ansResult = "pong!";
  } else if (userText.includes("bye") == true) {
    ansResult = "Goodbye!";
  } else if (userText.includes("author") == true) {
    ansResult = "Guy who created me: <a href='https://m.me/selestino.hajaniaina' target='blanck'>Selestino Hajaniaina</a>";
  } else if (userText.includes("citation") == true) {
    //ansResult = "Goodbye!";
    const citate = [
      '"It`s better to give than to receive."<br>-Unknown',
      '"Push yourself to do something."<br>-Unknown',
      '"Never give up, use totaly your energy."<br>-Unknown',
    ];
    ansResult = citate[random(citate.length)];
  } else if (userText.includes("time") == true) {
    var date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    ansResult = "It is "+hour + " h " + minute + " min";
  } else if (userText.includes("date") == true) {
    //declared
    let mois = [
      "january",
      "february",
      "march",
      "april",
      "may",
      "june",
      "jully",
      "aogoust",
      "septembre",
      "octobre",
      "novembre",
      "decembre",
    ];
    let jour = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
    ];
    var date = new Date();
    let newday_ = date.getUTCDay();
    let newDay = date.getDate();
    let newMonth = date.getMonth();
    let newYear = date.getFullYear();
    ansResult =
      "Today's date, "+ jour[newday_] + " , " + mois[newMonth] + " " + newDay + " , " + newYear;
    //
  } else {
    ansResult =
      "'" + userText + "' doesn't know, write 'help' to show the list";
  }
}
