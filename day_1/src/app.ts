import {getInput, getProblem} from "./problem";
import {solve} from "./solve";

getProblem()
  .then(console.log)
  .then(getInput)
  .then(solve)
  .then(console.log)
