import { SortPapersFactory } from "./Factory";
import { SortPapersDefault } from "./default";
import { SORT_PAPERS_DEFAULT } from "./types";

describe("Testing sort papers", () => {
  SortPapersFactory.register(SORT_PAPERS_DEFAULT, SortPapersDefault);
  const sorter = SortPapersFactory.create(SORT_PAPERS_DEFAULT);

  it("should return a list of papers sorted alphabeticaly", () => {
    const papers = ["Bowl of rice", "Airplanes are cool", "Cow says moo"];

    const expectedResult = [
      "Airplanes are cool",
      "Bowl of rice",
      "Cow says moo"
    ];
    const sortedPapers = sorter.sort(papers);

    expect(sortedPapers).toEqual(expectedResult);
  });
});
