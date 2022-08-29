import { Schema } from 'mongoose';

export const TodoSchema = new Schema(
  {
    id: { type: String, unique: true },
    body: String,
    status: Boolean,
    tag: { type: String, require: false },
    createdDate: { type: Date, default: new Date() },
  },
  {
    collection: 'todo',
    versionKey: false,
    toJSON: {
      virtuals: true,
    },
    toObject: {
      virtuals: true,
    },
  }
);
