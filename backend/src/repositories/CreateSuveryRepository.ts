import CreateSuvery from '../models/CreateSuvery';

interface CreateSuveryDTO {
  name: string;
  options: string;
  date: Date;
}

class CreateSuveryRepository {
  private createSuverys: CreateSuvery[];

  constructor() {
    this.createSuverys = [];
  }

  // CRIAR ENQUETE
  public create({ name, options, date }: CreateSuveryDTO ): CreateSuvery {
    const createSuvery = new CreateSuvery({ name, options, date });

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