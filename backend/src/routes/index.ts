import { Router } from 'express';
import pollsRouter from './polls.routes';

const routes = Router();

routes.use('/polls', pollsRouter);

export default routes;