import { OutputHandler } from "./OutputHandler";
import { writeFileSync } from "fs";

export class OutputHandlerToText extends OutputHandler {
  constructor() {
    super();
    this.output = function(input, fileName) {
      writeFileSync(fileName, input);
    };
  }
}
