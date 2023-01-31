async function responsejs() {
  let textH = userText;
  let data = await fetch({
    // mode: "no-cors",
    url: `https://api.monkedev.com/fun/chat?msg=hello`,
  });
  console.log(data);
  return `hello => ${userText}`;
}
