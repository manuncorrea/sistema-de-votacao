import CreateSuvery from '../models/Polls';

interface CreateSuveryDTO {
  poll_name: string;
  start_date: Date;
  end_date: Date;
  status: boolean;
}

class CreateSuveryRepository {
  private createSuverys: CreateSuvery[];

  constructor() {
    this.createSuverys = [];
  }

  // CRIAR ENQUETE
  public create({ poll_name, start_date, end_date, status }: CreateSuveryDTO ): CreateSuvery {
    const createSuvery = new CreateSuvery({ poll_name, start_date, end_date, status });

    this.createSuverys.push(createSuvery);

    return createSuvery;

  }

  //LISTAR TODAS AS ENQUETES
  public all(): CreateSuvery[] {
    return this.createSuverys;
  }

  // DELETAR ENQUETE
  public delete(id: string) {
    const index = this.createSuverys.findIndex(vote => vote.id === id)

    this.createSuverys.splice(index, 1);
  
  }
}

export default CreateSuveryRepository;