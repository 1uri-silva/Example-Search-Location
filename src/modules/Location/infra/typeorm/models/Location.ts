import {Entity, PrimaryGeneratedColumn, Column} from 'typeorm';

@Entity('location')
export class Location {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  // @Column()
  // longitude: number;

  // @Column()
  // latitude: number;

  @Column()
  name: number;

  @Column()
  radius: number;

  @Column("geography", {
    nullable: true,
    spatialFeatureType: "Point",
    srid: 4326
  })
  location: string;
}