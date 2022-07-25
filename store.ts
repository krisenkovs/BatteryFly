import { action, makeObservable, observable } from 'mobx';
import { SimpleStore } from './src/common/SimpleStore';
import { API } from './src/constants/api';
import { fromPromise, PromiseObserver } from './src/helpers/PromiseObserver';
import { Page, StationType } from '@types';

class Store extends SimpleStore {
  itemsPromise?: PromiseObserver<Page<StationType>> = undefined;
  constructor() {
    super();

    makeObservable(this, {
      itemsPromise: observable,
      loadItems: action.bound,
      destroy: action.bound,
    });
  }

  loadItems() {
    this.itemsPromise = fromPromise(
      this.httpService.get<Page<StationType>>(`${API.STATION}/all?page=0&size=999`)
    );
  }

  destroy() {
    this.itemsPromise = undefined;
  }
}

export const store = new Store();
