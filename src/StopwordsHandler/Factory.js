import { StopwordsHandler } from "./StopwordsHandler";

export class StopwordsFactory {
  constructor() {}
  static register(type, factoryClass) {
    if (
      !StopwordsFactory._registeredTypes.has(type) &&
      factoryClass.prototype instanceof StopwordsHandler
    ) {
      StopwordsFactory._registeredTypes.set(type, factoryClass);
    } else {
      console.log("Couldn't register type in factory.");
      throw "Register error";
    }
  }
  static create(type, ...options) {
    if (!StopwordsFactory._registeredTypes.has(type)) {
      console.error("Type not registered in factory!");
      return null;
    }
    let factoryClass = this._registeredTypes.get(type);
    let instance = new factoryClass(...options);
    return instance;
  }
}
StopwordsFactory._registeredTypes = new Map();
