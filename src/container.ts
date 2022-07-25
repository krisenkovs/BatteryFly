import { HTTPService } from './common/HTTPService';

class Container {
  private readonly httpServiceInstance;

  constructor() {
    this.httpServiceInstance = new HTTPService();
  }

  get httpService() {
    return this.httpServiceInstance;
  }
}

export const container = new Container();
