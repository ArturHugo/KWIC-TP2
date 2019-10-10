export class DataStorage {
  constructor() {
    this.data;
    this.fetchData = function() {
      throw Error("fetchData method not implemented!");
    };
  }
}

export class Paper {
  constructor(value, stopwordsIndexes) {
    this.value = value;
    this.stopwordsIndexes = stopwordsIndexes;
    this.asWordList = function() {
      return this.value.split(" ").reduce((acc, word, idx) => {
        if (Array.isArray(this.stopwordsIndexes)) {
          acc.push(new Word(word, this.stopwordsIndexes.indexOf(idx) > -1));
        } else acc.push(new Word(word, this.stopwordsIndexes === idx));
        return acc;
      }, []);
    };
  }
}

export class Word {
  constructor(value, isStopword) {
    this.value = value;
    this.isStopword = isStopword;
  }
}
