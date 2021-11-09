import "./assets/styles/reset.css";

// import { add } from "./assets/js/math.js";
// console.log(add);

import Greeter from "./ts/greeter";
let greeter = new Greeter("TypeScript!");
// let greeter = new Greeter(0);

// import Greeter from "./ts/greeter";
// let greeter = new Greeter("JavaScript!");

let button = document.createElement("button");
button.textContent = "Say Hello";
button.onclick = function () {
  alert(greeter.greet());
};

document.body.appendChild(button);
