import { DataStorageFactory } from "./DataStorage/Factory";
import { DataStorageWithDBLP } from "./DataStorage/withDBLP";
import { DATA_STORAGE_DBLP } from "./DataStorage/types";

import { StopwordsFactory } from "./StopwordsHandler/Factory";
import { StopwordsHandlerDefault } from "./StopwordsHandler/default";
import { STOPWORDS_DEFAULT } from "./StopwordsHandler/types";

import { WordShifterFactory } from "./WordShifter/Factory";
import { WordShifterDefault } from "./WordShifter/default";
import { WORDSHIFTER_DEFAULT } from "./WordShifter/types";

import { SortPapersFactory } from "./SortPapers/Factory";
import { SortPapersDefault } from "./SortPapers/default";
import { SORT_PAPERS_DEFAULT } from "./SortPapers/types";

import { OutputHandlerFactory } from "./OutputHandler/Factory";
import { OutputHandlerToText } from "./OutputHandler/toText";
import { OUTPUT_HANDLER_TEXT } from "./OutputHandler/types";

import readlineSync from "readline-sync";

DataStorageFactory.register(DATA_STORAGE_DBLP, DataStorageWithDBLP);

StopwordsFactory.register(STOPWORDS_DEFAULT, StopwordsHandlerDefault);

WordShifterFactory.register(WORDSHIFTER_DEFAULT, WordShifterDefault);

SortPapersFactory.register(SORT_PAPERS_DEFAULT, SortPapersDefault);

OutputHandlerFactory.register(OUTPUT_HANDLER_TEXT, OutputHandlerToText);

const dataStorage = DataStorageFactory.create(DATA_STORAGE_DBLP);
const stopwordsHandler = StopwordsFactory.create(STOPWORDS_DEFAULT);
const shifter = WordShifterFactory.create(WORDSHIFTER_DEFAULT);
const sorter = SortPapersFactory.create(SORT_PAPERS_DEFAULT);
const outputHandler = OutputHandlerFactory.create(OUTPUT_HANDLER_TEXT);

const queryCriteria = readlineSync.question("Enter your query criteria: ");

dataStorage.fetchData(queryCriteria);
stopwordsHandler.fetchStopwords("resources/stopwords.txt");

let markedPapers = dataStorage.data.map(paper => {
  return stopwordsHandler.markStopwords(paper);
});

let indexedPapers = markedPapers.reduce((acc, paper) => {
  shifter.shift(paper).map(shiftedPaper => {
    acc.push(shiftedPaper);
  });
  return acc;
}, []);

indexedPapers = sorter.sort(indexedPapers);

const indexedPapersText = indexedPapers.reduce((acc, cur) => {
  return acc.concat(cur + "\n");
}, "");
outputHandler.output(indexedPapersText, "output.txt");
