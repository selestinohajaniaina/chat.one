//function wait before to answer
function resolveAfter2Seconds() {
  return new Promise((responseReturn) => {
    //verify connection
    //go to the internet
    //let ansResult;

    setTimeout(() => {
      //waiting example returnning 'ok'
      responseReturn(ansResult);
    }, 2000);
  });
}

async function response() {

  body.appendChild(p3());
  body.scrollTop = body.scrollHeight;
  const result = await resolveAfter2Seconds();
  let P3 = document.querySelector("#P3");
  //removed a P3 waiting
  P3.style.display = "none";
  P3.remove();
  body.appendChild(botAnswer(result));
  lire(ansResult);
  body.scrollTop = body.scrollHeight;
}
