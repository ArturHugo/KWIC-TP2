export class StopwordsHandler {
  constructor() {
    this.stopwords;
    this.fetchStopwords = function() {
      throw Error("fetcStopword method not implemented!");
    };
    this.markStopwords = function() {
      throw Error("markStopwords method not implemented!");
    };
    this.isStopword = function(wordString) {
      return this.stopwords.indexOf(wordString.toLowerCase()) > -1;
    };
  }
}
