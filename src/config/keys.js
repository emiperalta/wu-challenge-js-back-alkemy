require('dotenv/config');

module.exports = {
  conOpt: {
    database: process.env.DB_NAME,
    dialect: 'mysql',
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
  },
  PORT: process.env.PORT || 5000,
};
