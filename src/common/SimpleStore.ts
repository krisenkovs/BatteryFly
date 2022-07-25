import { container } from '../container';

export abstract class SimpleStore {
  protected readonly httpService;

  protected constructor() {
    this.httpService = container.httpService;
  }
}
