function answer() {
  console.log("answer");
  postMessage("");
}

onmessage = function(event) {
  console.log(event.data);
  setTimeout(answer, 3000);
}
