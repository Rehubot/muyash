import {MuyashApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

import {dsMigrate, dsUpdate} from './migrate';

export {MuyashApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new MuyashApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

   await dsMigrate(app);
   await dsUpdate(app)

  return app;
}
