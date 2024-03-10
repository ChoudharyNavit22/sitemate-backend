import { Migration } from '@mikro-orm/migrations';

export class Migration0606162800 extends Migration {
  async up(): Promise<void> {

    this.addSql(
        `
        CREATE TABLE IF NOT EXISTS user_issues
        (
          id BIGSERIAL PRIMARY KEY,
          title varchar(255) not null,
          description varchar(255) not null,
          is_active boolean default true,
          created_at timestamptz(0) not null,
          updated_at timestamptz(0) not null
        );
        `
    );
  }
}
