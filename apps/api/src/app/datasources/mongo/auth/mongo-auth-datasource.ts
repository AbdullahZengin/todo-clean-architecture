import { IAuthDatabaseDatasource } from '@udao/backend-data';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';

export class MongoAuthDatasource implements IAuthDatabaseDatasource {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async getUser(username: string): Promise<User | undefined> {
    const user = await this.userModel.findOne({ username });

    if (!user) {
      return undefined;
    }

    return user;
  }
}
