import { UserSchema } from './schemas/user.schema';
import { Module } from '@nestjs/common';
import { IAuthDatabaseDatasource} from '@udao/backend-data';
import { MongooseModule } from '@nestjs/mongoose';
import { MongoAuthDatasource } from './mongo-auth-datasource';

const databaseProvider = {
  provide: IAuthDatabaseDatasource,
  useClass: MongoAuthDatasource,
};

@Module({
  imports: [MongooseModule.forFeature([{ name: 'User', schema: UserSchema }])],
  providers: [databaseProvider],
  exports: [databaseProvider],
})
export class MongoAuthDatasourceModule {}
