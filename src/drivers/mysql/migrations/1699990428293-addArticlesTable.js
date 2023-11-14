// const { MigrationInterface, QueryRunner } = require('typeorm');

module.exports = class AddArticlesTable1699990428293 {
  async up(queryRunner) {
    await queryRunner.query(
      `CREATE TABLE articles (
        id INT AUTO_INCREMENT PRIMARY KEY,
        title VARCHAR(255),
        author VARCHAR(255),
        text VARCHAR(2048),
        published_at VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      );`,
    );
  }

  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE articles`);
  }
};
