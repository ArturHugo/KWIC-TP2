import { DataStorageFactory } from "./Factory";
import { DataStorageWithTextFile } from "./withTextFile";
import { DATA_STORE_TEXT, DATA_STORAGE_DBLP } from "./types";
import { DataStorageWithDBLP } from "./withDBLP";
import { DataStorage, Paper } from "./DataStorage";

describe("Testing data storage with text file", () => {
  it("should register a new class to the factory", () => {
    try {
      DataStorageFactory.register(DATA_STORE_TEXT, DataStorageWithTextFile);
    } catch (error) {
      expect.rejects;
    } finally {
      expect.resolves;
    }
  });
  it("should not register a class that is already regitered", () => {
    try {
      DataStorageFactory.register(DATA_STORE_TEXT, DataStorageWithTextFile);
    } catch (error) {
      if (error === "Register error") expect.resolves;
      else expect.rejects;
    }
  });
  it("should register a different type", () => {
    try {
      DataStorageFactory.register(DATA_STORAGE_DBLP, DataStorageWithDBLP);
    } catch (error) {
      expect.rejects;
    } finally {
      expect.resolves;
    }
  });
  it("should create a data storage object", () => {
    expect(
      DataStorageFactory.create(DATA_STORE_TEXT) instanceof DataStorage
    ).toEqual(true);
  });
  it("should set data to text", () => {
    const textStorage = DataStorageFactory.create(DATA_STORE_TEXT);
    textStorage.fetchData("resources/dataStorageTest.txt");
    expect(textStorage.data[0].value).toEqual("test string 1");
    expect(textStorage.data[1].value).toEqual("test string 2");
  });
  it("should set data to json", () => {
    const DBLPStorage = DataStorageFactory.create(DATA_STORAGE_DBLP);
    DBLPStorage.fetchData("boni");
    expect(DBLPStorage.data.length).toEqual(30);
  });
});
