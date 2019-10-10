import { SortPapers } from "./SortPapers";

export class SortPapersFactory {
  constructor() {}
  static register(type, factoryClass) {
    if (
      !SortPapersFactory._registeredTypes.has(type) &&
      factoryClass.prototype instanceof SortPapers
    ) {
      SortPapersFactory._registeredTypes.set(type, factoryClass);
    } else {
      console.log("Couldn't register type in factory.");
      throw "Register error";
    }
  }
  static create(type, ...options) {
    if (!SortPapersFactory._registeredTypes.has(type)) {
      console.error("Type not registered in factory!");
      return null;
    }
    let factoryClass = this._registeredTypes.get(type);
    let instance = new factoryClass(...options);
    return instance;
  }
}
SortPapersFactory._registeredTypes = new Map();
