'use strict';

export default class AppCtrl {
  raise(msg) {
    throw new Error(msg);
  }
}
