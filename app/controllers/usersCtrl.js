'use strict';

import AppCtrl from './appCtrl';

export default class UsersCtrl extends AppCtrl {
  index() {
    return async (ctx, next) => {
      ctx.body = 'users';
    };
  }

  show() {
    return async () => {
      super.raise('not implemented', 404);
    };
  }
}
