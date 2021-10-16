
import { Location } from "../infra/typeorm/models/Location";
import { LocationRepository } from "../infra/typeorm/repositories/LocationRepository";

export class ListDepositService {
  constructor(
    private locationRepository: LocationRepository,
  ) {}

  public async execute(id: string, mile: string): Promise<Location[] | undefined> {
    const deposit = await this.locationRepository.locationPoint(id, mile);

    return deposit;
  }
}