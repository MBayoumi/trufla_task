const SOURCE_PATH = (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'development') ? 'dist' : 'src';
module.exports = {
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": process.env.DB_PORT,
    "username": process.env.DB_USERNAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "entities": [
        `${SOURCE_PATH}/**/**.entity{.ts,.js}`
    ],
    "migrations": [`${SOURCE_PATH}/migration/**/*{.ts,.js}`],
    migrationsRun: process.env.DB_RUNMIGRATIONS,
    cli: {
      migrationsDir: 'src/migration',
    },
    "synchronize": process.env.DB_SYNCHRONIZE
};
