import koa from 'koa';
import bodyParser from 'koa-bodyparser';
import Router from './router';

import db from './database';

export default class Server {
  app = null;
  start() {
    this.app = new koa();

    this.app
      .use(bodyParser())
      .use(Router.routes())
      .use(Router.allowedMethods());

    db.start();

    const PORT = process.env.PORT || 3000;
    this.app.listen(PORT, () => {
      console.log(`Started Server on ${PORT}`);
    });

  }
}