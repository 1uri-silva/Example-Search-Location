import {getRepository, Repository} from 'typeorm'
import {Point} from 'geojson'

import { LocationDTO } from "../../../dtos/locationDTO";
import { ILocation } from "../../../repositories/LocationRepository";
import { Location } from '../models/Location';

export class LocationRepository implements ILocation {

  private ormRepository: Repository<Location>;

  constructor() {
    this.ormRepository = getRepository(Location);
  }
  
  public async create({longitude, latitude, radius, name}: LocationDTO): Promise<void> {
    const deposit: Location = await this.ormRepository.query(
      'INSERT INTO location (name, radius, location)' + 
      'VALUES ($1, $2, ST_SetSRID(ST_MakePoint($3, $4), 4326));',
      [name, radius, longitude, latitude]
    );

    return;
  }

  public async locationPoint(id: string, miles: string): Promise<Location[] | undefined> {

    //ALGO DEU ERRADO, RETORNA CERTO MAS TODOS TEM O MESMO 'ID'

    // const radiusSearch = await this.ormRepository.query(
    //   `SELECT *, ST_Distance(location.location, eu.location) AS distance
    //   FROM location, LATERAL(SELECT * FROM location WHERE id=$1) AS eu
    //   WHERE location.id <> eu.id order by distance
    //   `,
    //   [id]
    // )

    const radiusSearch = await this.ormRepository.query(
      `SELECT *, ST_Distance(location.location, eu.location) AS distance
      FROM location, LATERAL(SELECT * FROM location WHERE id=$1) AS eu
      WHERE location.id <> eu.id
      AND ST_Distance(location.location, eu.location) <= $2
      order by distance LIMIT 20
      `,
      [id, miles]
    )

    return radiusSearch
  }
}