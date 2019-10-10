import { WordShifterFactory } from "./Factory";
import { WordShifterDefault } from "./default";
import { WORDSHIFTER_DEFAULT } from "./types";
import { Paper, Word } from "../DataStorage/DataStorage";

describe("Testing word shifter", () => {
  WordShifterFactory.register(WORDSHIFTER_DEFAULT, WordShifterDefault);
  const wordShifter = WordShifterFactory.create(WORDSHIFTER_DEFAULT);

  it("should return a list of wordshifts of the paper", () => {
    const paper = new Paper("This is a test paper", [0, 1, 2]);

    const expectedResult = ["test paper This is a", "paper This is a test"];
    const wordShifts = wordShifter.shift(paper);

    expect(wordShifts).toEqual(expectedResult);
  });
});
