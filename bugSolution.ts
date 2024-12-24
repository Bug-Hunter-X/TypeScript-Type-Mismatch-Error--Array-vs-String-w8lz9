function greeter(person: string): string {
  return "Hello, " + person;
}

// Solution 1: Modify the greeter function to accept an array
function greeterArray(people: string[]): string {
  return "Hello, " + people.join(' ');
}

let user = ["Jane", "Doe"];

console.log(greeterArray(user)); // Works correctly

// Solution 2:  Modify how user is used to provide a single string
let user2 = "Jane Doe";
console.log(greeter(user2)); // Works correctly