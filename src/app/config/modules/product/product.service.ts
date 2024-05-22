import { ProductModel } from './product.model';
import { Product } from './product.interface';

const createProductIntoDb = async (product: Product) => {
  const result = await ProductModel.create(product);

  return result;
};
const getAllProductsFromDB = async (searchTerm: string) => {
  let query = {};
  console.log(searchTerm);
  if (searchTerm) {
    if (typeof searchTerm === 'string') {
      query = {
        $or: [
          { name: { $regex: searchTerm, $options: 'i' } },
          { description: { $regex: searchTerm, $options: 'i' } },
        ],
      };
    } else {
      console.warn('Search term is not a string. Ignoring search.');
    }
  }

  const result = await ProductModel.find(query);
  return result;
};

//   const getSingleStudentFromDB = async (id: string) => {
//     const result = await Student.aggregate([{ $match: { id } }]);
//     return result;
//   };

const deleteProductFromDB = async (id: string) => {
  const result = await ProductModel.deleteOne({ productId: id});
  return result;
};

const getSingleProductFromDB = async (id: string) => {
  const result = await ProductModel.findOne({ productId: id });
  return result;
};
const ProductUpdateFromDB = async (id: string, productData: object) => {
  const result = await ProductModel.findByIdAndUpdate(id, productData, {
    new: true,
  });
  return result;
};
// const SearchProductFromDB = async (searchTerm) => {
//     const result = await ProductModel.find({
//         $or: [
//             { name: { $regex: searchTerm, $options: 'i' } }, // Case-insensitive search on product name
//             { description: { $regex: searchTerm, $options: 'i' } } // Case-insensitive search on product description
//         ]
//     });
//     return result;
//   };

export const ProductServices = {
  createProductIntoDb,
  getAllProductsFromDB,
  ProductUpdateFromDB,
  getSingleProductFromDB,
  deleteProductFromDB,
};
