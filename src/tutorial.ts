let people: (string | number)[] = ["alex", 6969];

let me: { name: string; age: number } = { name: "alex", age: 24 };
function giveMe(n: string, age?: number) {
  return `${n} ${age}`;
}
console.log(giveMe("alex", 24));

function processInput(variable: string | number) {
  if (typeof variable === "number") {
    console.log(variable * 2);
  } else {
    console.log(variable);
  }
}
processInput(10);
