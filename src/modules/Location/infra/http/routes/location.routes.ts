import { Router } from 'express';
import { LocationController } from '../controller/LocationController';

export const locationRouter = Router();

const locationController = new LocationController();

locationRouter.post('/', locationController.create);
locationRouter.get('/', locationController.show);