function countingTF() {
  input = document.querySelector("input").value;
  let arraySetup = input.split(",").map((value) => value.trim());
  console.log(arraySetup);
  let trueValues = 0;
  let falseValues = 0;
  for (let item of arraySetup) {
    if (item == "true") {
      trueValues++;
    } else if (item == "false") {
      falseValues++;
    } else {
      prompt("There was an error when entering your values. Please try again");
    }
  }
  document.querySelector(".true").innerText = trueValues;
  document.querySelector(".false").innerText = falseValues;
}
btn = document.querySelector("button");
btn.addEventListener("click", () => countingTF());
