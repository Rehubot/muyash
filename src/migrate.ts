import {DataSource, Repository} from '@loopback/repository';
import {MuyashApplication} from './index';
import {ReciepesRepository, ReciepecatsRepository} from './repositories';

export async function dsMigrate(app: MuyashApplication) {
	
	const ds = await app.get<DataSource>('datasources.db');
const reciepesRepo = await app.getRepository(ReciepesRepository);
const reciepecatsRepo = await app.getRepository(ReciepecatsRepository);
await ds.automigrate();

}


export async function dsUpdate(app: MuyashApplication) {
  const ds = await app.get<DataSource>('datasources.db');
 const reciepesRepo = await app.getRepository(ReciepesRepository);
const reciepecatsRepo = await app.getRepository(ReciepecatsRepository);

  await ds.autoupdate();
}