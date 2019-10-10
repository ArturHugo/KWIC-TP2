import { DataStorage, Paper } from "./DataStorage";
import request from "sync-request";

export class DataStorageWithDBLP extends DataStorage {
  constructor() {
    super();
    this.fetchData = function(queryCriteria) {
      const DBLPUrl = "http://dblp.org/search/publ/api";
      const queryURL = `${DBLPUrl}/?q=${queryCriteria}&format=json`;

      const res = request("GET", queryURL);

      this.data = JSON.parse(res.getBody("utf8")).result.hits.hit.map(
        hit => new Paper(hit.info.title)
      );
    };
  }
}
