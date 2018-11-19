import {belongsTo,Entity, model, property} from '@loopback/repository';
import {Reciepecats} from './reciepecats.model';

@model()
export class Reciepes extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  reciepe_id: number;

  @property({
    type: 'string',
    required: true,
  })
  reciepe_name: string;

  //@property({
  //  type: 'number',
  //  required: true,
  //})
 //reciepe_cat: number;


  @belongsTo(() => Reciepecats)
  reciepe_cat: number;

  @property({
    type: 'string',
    required: true,
  })
  reciepe_ins: string;

  @property({
    type: 'string',
    required: true,
  })
  reciepe_prep_time: string;

  @property({
    type: 'number',
    required: true,
  })
  reciepe_srv_prsn: number;

  @property({
    type: 'string',
    required: true,
  })
  reciepe_video: string;

  constructor(data?: Partial<Reciepes>) {
    super(data);
  }
}
