import { StopwordsFactory } from "./Factory";
import { StopwordsHandlerDefault } from "./default";
import { STOPWORDS_DEFAULT } from "./types";
import { Paper, Word } from "../DataStorage/DataStorage";

describe("Testing stopwords", () => {
  StopwordsFactory.register(STOPWORDS_DEFAULT, StopwordsHandlerDefault);
  const stopwordsHandler = StopwordsFactory.create(STOPWORDS_DEFAULT);
  const paper = new Paper("test word");

  it("should get a list of stopwords", () => {
    stopwordsHandler.fetchStopwords("resources/stopwordsTest.txt");
    expect(stopwordsHandler.stopwords).toEqual(["test", "string"]);
  });

  it("should mark stopwords in the paper", () => {
    const markedPaper = stopwordsHandler.markStopwords(paper);
    expect(markedPaper.asWordList()[0].isStopword).toEqual(true);
    expect(markedPaper.asWordList()[1].isStopword).toEqual(false);
  });
});
