import { WordShifter } from "./WordShifter";

export class WordShifterDefault extends WordShifter {
  constructor() {
    super();
    this.shift = function(paper) {
      return paper.asWordList().reduce((acc, word, idx) => {
        if (!word.isStopword) {
          const firstHalf = paper.value.split(" ").slice(idx);
          const secondHalf = paper.value.split(" ").slice(0, idx);
          acc.push(firstHalf.concat(secondHalf).join(" "));
        }
        return acc;
      }, []);
    };
  }
}
