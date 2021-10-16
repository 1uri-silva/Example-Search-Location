import { Request, Response } from 'express';

import { CreateLocationService } from '../../../services/CreateLocation';
import { ListDepositService } from '../../../services/ListLocation';
import { LocationRepository } from '../../typeorm/repositories/LocationRepository';

export class LocationController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { latitude, longitude, radius, name } = request.body;

    const locationRepository = new LocationRepository()
    const locationService = new CreateLocationService(locationRepository);

    const deposit = await locationService.execute({
      latitude,
      longitude,
      radius,
      name
    });

    return response.json(deposit);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id, mile } = request.body;

    const locationRepository = new LocationRepository()
    const locationService = new ListDepositService(locationRepository);

    const deposit = await locationService.execute(id, mile)

    return response.json(deposit);
  }
}
