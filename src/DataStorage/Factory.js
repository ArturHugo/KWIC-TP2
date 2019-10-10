import { DataStorage } from "./DataStorage";

export class DataStorageFactory {
  constructor() {}
  static register(type, factoryClass) {
    if (
      !DataStorageFactory._registeredTypes.has(type) &&
      factoryClass.prototype instanceof DataStorage
    ) {
      DataStorageFactory._registeredTypes.set(type, factoryClass);
    } else {
      console.log("Couldn't register type in factory.");
      throw "Register error";
    }
  }
  static create(type, ...options) {
    if (!DataStorageFactory._registeredTypes.has(type)) {
      console.error("Type not registered in factory!");
      return null;
    }
    let factoryClass = this._registeredTypes.get(type);
    let instance = new factoryClass(...options);
    return instance;
  }
}
DataStorageFactory._registeredTypes = new Map();
