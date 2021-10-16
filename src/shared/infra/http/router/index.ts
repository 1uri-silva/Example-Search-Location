import { Router } from 'express';
import { locationRouter } from '@modules/Location/infra/http/routes/location.routes';

const routes = Router();

routes.use('/location', locationRouter);

export default routes;