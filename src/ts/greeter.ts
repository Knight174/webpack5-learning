import * as _ from "lodash";
// import _ from "lodash";
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return _.join(["Hello, ", this.greeting], "");
  }
}

export default Greeter;
