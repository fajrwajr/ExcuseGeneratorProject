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
  document.querySelector("#excuse").innerHTML = excuseGenerator();
  fajrsObjectWithArrays.what.push(document.querySelector("#inputText").value);
  console.log(fajrsObjectWithArrays.what);
}

document.querySelector("#addButton").addEventListener("click", addExcuse);
