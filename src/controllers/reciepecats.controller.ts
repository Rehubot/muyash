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
import {Reciepecats} from '../models';
import {ReciepecatsRepository} from '../repositories';

export class ReciepecatsController {
  constructor(
    @repository(ReciepecatsRepository)
    public reciepecatsRepository : ReciepecatsRepository,
  ) {}

  @post('/reciepecats', {
    responses: {
      '200': {
        description: 'Reciepecats model instance',
        content: {'application/json': {schema: {'x-ts-type': Reciepecats}}},
      },
    },
  })
  async create(@requestBody() reciepecats: Reciepecats): Promise<Reciepecats> {
    return await this.reciepecatsRepository.create(reciepecats);
  }

  @get('/reciepecats/count', {
    responses: {
      '200': {
        description: 'Reciepecats model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Reciepecats)) where?: Where,
  ): Promise<Count> {
    return await this.reciepecatsRepository.count(where);
  }

  @get('/reciepecats', {
    responses: {
      '200': {
        description: 'Array of Reciepecats model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Reciepecats}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Reciepecats)) filter?: Filter,
  ): Promise<Reciepecats[]> {
    return await this.reciepecatsRepository.find(filter);
  }

  @patch('/reciepecats', {
    responses: {
      '200': {
        description: 'Reciepecats PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() reciepecats: Reciepecats,
    @param.query.object('where', getWhereSchemaFor(Reciepecats)) where?: Where,
  ): Promise<Count> {
    return await this.reciepecatsRepository.updateAll(reciepecats, where);
  }

  @get('/reciepecats/{id}', {
    responses: {
      '200': {
        description: 'Reciepecats model instance',
        content: {'application/json': {schema: {'x-ts-type': Reciepecats}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Reciepecats> {
    return await this.reciepecatsRepository.findById(id);
  }

  @patch('/reciepecats/{id}', {
    responses: {
      '204': {
        description: 'Reciepecats PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() reciepecats: Reciepecats,
  ): Promise<void> {
    await this.reciepecatsRepository.updateById(id, reciepecats);
  }

  @del('/reciepecats/{id}', {
    responses: {
      '204': {
        description: 'Reciepecats DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.reciepecatsRepository.deleteById(id);
  }
}
