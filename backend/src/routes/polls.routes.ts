import { Router } from 'express';
import { startOfHour, parseISO } from 'date-fns';

import CreateSuveryRepository from '../repositories/CreateSuveryRepository';

const createSuveryRouter = Router();
const createSuveryRepository = new CreateSuveryRepository();

// Criar Enequete
createSuveryRouter.post('/', (request, response) => {
  const { poll_name, start_date, end_date, status, created_at, updated_at, date} = request.body;

  const parsedDate = startOfHour(parseISO(date));

  /**
   * CRIAR CONDIÇÃO QUE IMPEDE VOTAR, DEPOIS DO HORARIO DE ENCERRAMENTO DA ENQUETE
   */

  const createSuvery = createSuveryRepository.create({
    poll_name, 
    start_date,
    end_date,
    status,
  });
  
  return response.json(createSuvery);
});

// Listar enquetes
createSuveryRouter.get('/', (request, response) => {
  //const createSuvery = createSuveryRepository.all();

  //return response.json(createSuvery);
});

// Editar enquetes

//Deletar enquetes
createSuveryRouter.delete('/:id', async (request, response) => {
  const createSuvery = await createSuveryRepository.delete(request.params.id);

  return response.json(createSuvery);
});


export default createSuveryRouter;