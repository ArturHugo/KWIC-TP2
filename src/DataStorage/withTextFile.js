import { DataStorage, Paper } from "./DataStorage";
import fs from "fs";

export class DataStorageWithTextFile extends DataStorage {
  constructor() {
    super();
    this.fetchData = function(filename) {
      this.data = fs
        .readFileSync(filename, "utf8")
        .split("\n")
        .map(string => new Paper(string));
    };
  }
}
