import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class Location1634229862250 implements MigrationInterface {
  
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table(
      {
        name: 'location',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          // {
          //   name: 'longitude',
          //   type: 'float'
          // },
          // {
          //   name: 'latitude',
          //   type: 'float'
          // },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'radius',
            type: 'varchar',
            isNullable: true
          },
          {
            name: 'location',
            type: 'varchar',
            isNullable: true,
            spatialFeatureType: 'Point',
            srid: 4326
          }
        ]
      }
    ))
  }
  
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('location')
  }
  
}
