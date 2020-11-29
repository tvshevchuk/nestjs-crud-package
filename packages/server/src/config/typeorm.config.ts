import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as config from 'config';

const dbConfig = config.get('db');

export const typeOrmConfig: TypeOrmModuleOptions = {
    type: dbConfig.type,
    host: process.env.RDS_HOSTNAME || dbConfig.host,
    port: process.env.RDS_PORT || dbConfig.port,
    username: process.env.RDS_USERNAME || dbConfig.username,
    password: process.env.RDS_PASSWORD || dbConfig.password,
    database: process.env.RDS_DB_NAME || dbConfig.database,
    entities: [__dirname + '/../**/*.entity.{ts,js}'],
    synchronize: process.env.TYPEORM_SYNC || dbConfig.synchronize
}

// MongoDB TypeORM config
export const mongoConfig: TypeOrmModuleOptions = {
    type: 'mongodb',
    url: 'mongodb+srv://m001-student:nfhfc1993@sandbox.nd8hb.mongodb.net/tasks?retryWrites=true&w=majority',
    synchronize: true,
    useUnifiedTopology: true,
    entities: [__dirname + '/../**/*.entity.{ts,js}']
}