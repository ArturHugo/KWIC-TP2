import { OutputHandler } from "./OutputHandler";

export class OutputHandlerFactory {
  constructor() {}
  static register(type, factoryClass) {
    if (
      !OutputHandlerFactory._registeredTypes.has(type) &&
      factoryClass.prototype instanceof OutputHandler
    ) {
      OutputHandlerFactory._registeredTypes.set(type, factoryClass);
    } else {
      console.log("Couldn't register type in factory.");
      throw "Register error";
    }
  }
  static create(type, ...options) {
    if (!OutputHandlerFactory._registeredTypes.has(type)) {
      console.error("Type not registered in factory!");
      return null;
    }
    let factoryClass = this._registeredTypes.get(type);
    let instance = new factoryClass(...options);
    return instance;
  }
}
OutputHandlerFactory._registeredTypes = new Map();
