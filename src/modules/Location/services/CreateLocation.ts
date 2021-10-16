import { Location } from "../infra/typeorm/models/Location";

import { LocationDTO } from "../dtos/locationDTO";
import { LocationRepository } from "../infra/typeorm/repositories/LocationRepository";

export class CreateLocationService {
  constructor(
    private locationRepoPrisma: LocationRepository,
  ) {}

  public async execute(data: LocationDTO): Promise<Location> {
    const deposit = await this.locationRepoPrisma.create(data);

    return deposit;
  }
}