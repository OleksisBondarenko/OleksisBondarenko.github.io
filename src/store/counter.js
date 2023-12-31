import { makeAutoObservable } from 'mobx';

class AuthUser {
  name = '';

  surname = '';

  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }
}

export default new AuthUser();
