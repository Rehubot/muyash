import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Reciepes} from '../models';
import {DbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ReciepesRepository extends DefaultCrudRepository<
  Reciepes,
  typeof Reciepes.prototype.reciepe_id
> {
  constructor(
    @inject('datasources.db') dataSource: DbDataSource,
  ) {
    super(Reciepes, dataSource);
  }
}
