import { action, makeObservable, observable } from 'mobx';
import { fromPromise, PromiseObserver } from '../../helpers/PromiseObserver';
import { SimpleStore } from '../../common/SimpleStore';

class Store extends SimpleStore {
  startPromise?: PromiseObserver<void> = undefined;
  constructor() {
    super();

    makeObservable(this, {
      startPromise: observable,
      start: action.bound,
      destroy: action.bound,
    });
  }

  start(id?: string) {
    this.startPromise = fromPromise(this.httpService.post(`/api/transaction/start/${id}`, {}));
  }

  destroy() {
    this.startPromise = undefined;
  }
}

export const store = new Store();
