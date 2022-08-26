import { Schema } from 'mongoose';

export const TodoSchema = new Schema(
  {
    id: { type: String, unique: true },
    body: String,
    status: Boolean,
    tag: String,
    createdDate: Date,
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
