import { Document } from 'mongoose';

export interface TodoDocument extends Document {
  readonly id: string;
  readonly body: string;
  readonly status: boolean;
  readonly tag?: string;
  readonly createdDate: Date;
}
