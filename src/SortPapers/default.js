import { SortPapers } from "./SortPapers";

export class SortPapersDefault extends SortPapers {
  constructor() {
    super();
    this.sort = function(papers) {
      return papers.sort();
    };
  }
}
