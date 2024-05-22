import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const variantSchema = new Schema({
  type: String,
  value: String,
});

const inventorySchema = new Schema({
  quantity: Number,
  inStock: Boolean,
});

const productSchema = new Schema<Product>({
  id: { type: String },
  name: { type: String },
  description: { type: String },
  price: { type: Number },
  category: { type: String },
  tags: { type: [String] },
  variants: { type: [variantSchema] },
  inventory: { type: inventorySchema },
  isDeleted: {
    type: Boolean,
    default: false,
  },
});
export const ProductModel = model<Product>('Product', productSchema);
//const ProductModel = mongoose.model('Product', productSchema);

// export const StudentModel = model<Student>('Student', StudentSchema);

// Define schema for guardian

// const GuardianSchema = new Schema({
//   fatherName: { type: String, required: true },
//   fatherOccupation: { type: String, required: true },
//   fatherContactNo: { type: String, required: true },
//   motherName: { type: String, required: true },
//   motherOccupation: { type: String, required: true },
//   motherContactNo: { type: String, required: true },
// });

// // Define schema for local guardian
// const LocalGuardianSchema = new Schema({
//   name: { type: String },
//   occupation: { type: String },
//   contactNo: { type: String },
//   address: { type: String },
// });

// const userNameSchemaa = new Schema({
//   firstName: { type: String, required: true ,maxlength:5,trim:true},
//   middleName: { type: String },
//   lastName: { type: String },
// });

// // Define schema for student
// const StudentSchema = new Schema<Student>({
//   id: { type: String, required: [true, 'ID is required'], unique: true },
//   name: {
//     type: userNameSchemaa,
//     required: true,
//   },
//   gender: { type: String, enum: ['male', 'female'], required: true },
//   dateOfBirth: { type: String, required: true },
//   email: { type: String, required: true },
//   contactNumber: { type: String, required: true },
//   emergencyContactNo: { type: String, required: true },
//   bloodGroup: { type: String, enum: ['A+', 'B+'] },
//   presentAddress: { type: String },
//   permanetAddress: { type: String },
//   guardian: { type: GuardianSchema, required: true },
//   localGuardian: { type: LocalGuardianSchema, required: true },
//   profileImg: String,
//   isActive: { type: String, enum: ['active', 'inActive'], default: 'active', required: true },
// });

// Create and export Mongoose model based on the schema
// export const StudentModel = model<Student>('Student', StudentSchema);
