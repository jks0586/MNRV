import * as mongoose from 'mongoose';
export const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: false,
    },
    description: {
      type: String,
      required: true,
      unique: false,
    },
  },
  { timestamps: true },
);

// export interface Category extends mongoose.Document {
export interface Category {
  _id: string;
  name: string;
  description: string;
}
