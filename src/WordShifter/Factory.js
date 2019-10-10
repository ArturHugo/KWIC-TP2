import { WordShifter } from "./WordShifter";

export class WordShifterFactory {
  constructor() {}
  static register(type, factoryClass) {
    if (
      !WordShifterFactory._registeredTypes.has(type) &&
      factoryClass.prototype instanceof WordShifter
    ) {
      WordShifterFactory._registeredTypes.set(type, factoryClass);
    } else {
      console.log("Couldn't register type in factory.");
      throw "Register error";
    }
  }
  static create(type, ...options) {
    if (!WordShifterFactory._registeredTypes.has(type)) {
      console.error("Type not registered in factory!");
      return null;
    }
    let factoryClass = this._registeredTypes.get(type);
    let instance = new factoryClass(...options);
    return instance;
  }
}
WordShifterFactory._registeredTypes = new Map();
