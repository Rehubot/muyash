import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Reciepes} from '../models';
import {ReciepesRepository} from '../repositories';

export class ReciepesController {
  constructor(
    @repository(ReciepesRepository)
    public reciepesRepository : ReciepesRepository,
  ) {}

  @post('/reciepes', {
    responses: {
      '200': {
        description: 'Reciepes model instance',
        content: {'application/json': {schema: {'x-ts-type': Reciepes}}},
      },
    },
  })
  async create(@requestBody() reciepes: Reciepes): Promise<Reciepes> {
    return await this.reciepesRepository.create(reciepes);
  }

  @get('/reciepes/count', {
    responses: {
      '200': {
        description: 'Reciepes model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reciepes)) where?: Where,
  ): Promise<Count> {
    return await this.reciepesRepository.count(where);
  }

  @get('/reciepes', {
    responses: {
      '200': {
        description: 'Array of Reciepes model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Reciepes}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reciepes)) filter?: Filter,
  ): Promise<Reciepes[]> {
    return await this.reciepesRepository.find(filter);
  }

  @patch('/reciepes', {
    responses: {
      '200': {
        description: 'Reciepes PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() reciepes: Reciepes,
    @param.query.object('where', getWhereSchemaFor(Reciepes)) where?: Where,
  ): Promise<Count> {
    return await this.reciepesRepository.updateAll(reciepes, where);
  }

  @get('/reciepes/{id}', {
    responses: {
      '200': {
        description: 'Reciepes model instance',
        content: {'application/json': {schema: {'x-ts-type': Reciepes}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reciepes> {
    return await this.reciepesRepository.findById(id);
  }

  @patch('/reciepes/{id}', {
    responses: {
      '204': {
        description: 'Reciepes PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() reciepes: Reciepes,
  ): Promise<void> {
    await this.reciepesRepository.updateById(id, reciepes);
  }

  @del('/reciepes/{id}', {
    responses: {
      '204': {
        description: 'Reciepes DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reciepesRepository.deleteById(id);
  }
}
