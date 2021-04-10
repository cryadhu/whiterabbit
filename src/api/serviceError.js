import { string } from "../assets/strings";

class ServiceError extends Error {
  constructor(error) {
    const message = error.message || string("serverError.defaultError");
    super(message);
  }
}

export default ServiceError;
