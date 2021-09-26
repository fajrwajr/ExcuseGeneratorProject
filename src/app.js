let fajrsObjectWithArrays = {
  who: ["The dog", "My grandma", "His turtle", "My bird"],
  action: ["ate", "peed", "crushed", "broke"],
  what: ["my homework", "the keys", "the car"],
  when: [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]
};

function excuseGenerator() {
  return (
    fajrsObjectWithArrays.who[
      Math.floor(Math.random() * fajrsObjectWithArrays.who.length)
    ] +
    " " +
    fajrsObjectWithArrays.action[
      Math.floor(Math.random() * fajrsObjectWithArrays.action.length)
    ] +
    " " +
    fajrsObjectWithArrays.what[
      Math.floor(Math.random() * fajrsObjectWithArrays.what.length)
    ] +
    " " +
    fajrsObjectWithArrays.when[
      Math.floor(Math.random() * fajrsObjectWithArrays.when.length)
    ]
  );
}

function addExcuse() {
  let inputValue = document.getElementById("inputText").value;
  let option = document.getElementById("selectExcuse").value;
  switch (option) {
    case "Who":
      fajrsObjectWithArrays.who.push(inputValue);
      break;
    case "Action":
      fajrsObjectWithArrays.action.push(inputValue);
      break;
    case "What":
      fajrsObjectWithArrays.what.push(inputValue);
      break;
    case "When":
      fajrsObjectWithArrays.when.push(inputValue);
      break;
  }
  document.querySelector("#excuse").innerHTML = excuseGenerator();
}

document.querySelector("#addButton").addEventListener("click", addExcuse);
