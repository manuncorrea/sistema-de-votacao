import CreatePolls from '../models/Polls';
import { getCustomRepository } from 'typeorm';
import { EntityRepository, Repository } from 'typeorm';
import { startOfHour } from 'date-fns';

@EntityRepository(CreatePolls)
class CreatePollsRepository extends Repository<CreatePolls> {
  public async findByDate(date: Date): Promise<CreatePolls | null> {
    const findCreatePolls = await this.findOne({
      where: { date },
    })

    return findCreatePolls || null;
  }
  
  
}

export default CreatePollsRepository;

/**
 * // CRIAR ENQUETE
  public create({ poll_name, start_date, end_date }: CreatePollsDTO ): CreatePolls {
    const createPolls = new CreatePolls({ poll_name, start_date, end_date});

    this.createPolls.push(createPolls);

    return createPolls;

  }

  //LISTAR TODAS AS ENQUETES
  public all(): CreatePolls[] {
    return this.createPolls;
  }

  // DELETAR ENQUETE
  public delete(id: string) {
    const index = this.createPolls.findIndex(vote => vote.id === id)

    this.createPolls.splice(index, 1);
  
  }
 */