import {Entity, model, property} from '@loopback/repository';

@model()
export class Reciepecats extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  reciepecat_id: number;

  @property({
    type: 'string',
    required: true,
  })
  reciepecat_name: string;

  constructor(data?: Partial<Reciepecats>) {
    super(data);
  }
}
