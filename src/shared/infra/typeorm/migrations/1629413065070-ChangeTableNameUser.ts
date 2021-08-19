import {MigrationInterface, QueryRunner} from "typeorm";

export class ChangeTableNameUser1629413065070 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.renameTable('user', 'users');
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
