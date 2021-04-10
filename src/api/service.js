import ServiceError from "./serviceError";

export default class Service {
  constructor(api) {
    this.api = api;
  }

  handleResponse = (data) => {
    return data.results;
  };

  handleParseError = async (error) => {
    throw new ServiceError(error);
  };

  async fetchProducts() {
    return new Promise((resolve, reject) => {
      import("../api/mock/mockProducts.json").then((products) => {
        resolve(products);
      });
    });
  }
}
