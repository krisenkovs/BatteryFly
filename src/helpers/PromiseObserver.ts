import { AxiosResponse } from 'axios';
import { makeObservable, observable, runInAction } from 'mobx';

enum PROMISE_TYPE {
  PENDING,
  FULFILLED,
  ERROR,
}

export class PromiseObserver<T> {
  state: PROMISE_TYPE = PROMISE_TYPE.PENDING;
  value?: T = undefined;

  constructor(promise: Promise<T>) {
    makeObservable(this, {
      state: observable,
      value: observable,
    });

    promise
      .then((response: unknown) => {
        runInAction(() => {
          this.state = PROMISE_TYPE.FULFILLED;
          this.value = (response as AxiosResponse<T>)?.data;
        });
      })
      .catch(() =>
        runInAction(() => {
          this.state = PROMISE_TYPE.ERROR;
        })
      );
  }

  get pending() {
    return this.state === PROMISE_TYPE.PENDING;
  }

  get fulfilled() {
    return this.state === PROMISE_TYPE.FULFILLED;
  }

  get error() {
    return this.state === PROMISE_TYPE.ERROR;
  }
}

export function fromPromise<T>(promise: Promise<T>) {
  return new PromiseObserver(promise);
}
