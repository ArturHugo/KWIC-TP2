import { StopwordsHandler } from "./StopwordsHandler";
import fs from "fs";
import { Word, Paper } from "../DataStorage/DataStorage";

export class StopwordsHandlerDefault extends StopwordsHandler {
  constructor() {
    super();

    this.fetchStopwords = function(stopwordsFile) {
      this.stopwords = fs.readFileSync(stopwordsFile, "utf8").split("\n");
    };

    this.markStopwords = function(paper) {
      const stopwordsIndexes = paper.value
        .split(" ")
        .reduce((acc, word, idx) => {
          if (this.isStopword(word)) {
            acc.push(idx);
            return acc;
          } else return acc;
        }, []);
      return new Paper(paper.value, stopwordsIndexes);
    };
  }
}
