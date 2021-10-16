import { LocationDTO } from '../dtos/locationDTO';
import { Location } from '../infra/typeorm/models/Location';

export interface ILocation {
  create(location: LocationDTO): Promise<void>;
  locationPoint(id: string, miles: string): Promise<Location[] | undefined>;
}