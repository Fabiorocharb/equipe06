import { StackEnum } from "src/roadmap/dto/StackEnum";
import { MigrationInterface, QueryRunner } from "typeorm";


export class CreateTableRoadmap1718314009064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE IF EXISTS roadmap;`);
        await queryRunner.query(`
            CREATE TABLE roadmap (
                id  VARCHAR(100) PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                description VARCHAR(255) NOT NULL,
                stack ENUM('FRONTEND', 'BACKEND', 'MOBILE', 'DEVOPS') NOT NULL
            )
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DROP TABLE IF EXISTS roadmap
        `);
    }

}
