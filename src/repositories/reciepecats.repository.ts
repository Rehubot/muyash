import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Reciepecats} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReciepecatsRepository extends DefaultCrudRepository<
  Reciepecats,
  typeof Reciepecats.prototype.reciepecat_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Reciepecats, dataSource);
  }
}
