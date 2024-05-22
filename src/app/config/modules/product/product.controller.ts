import express, { Request, Response } from 'express';
import { ProductServices } from './product.service';
import studentvalidationSchema from './student.validation';
import mongoose from 'mongoose';
import { ProductModel } from './product.model';

const createProduct = async (req: Request, res: Response) => {
  try {
    const product = req.body;

    // const {error,value }=studentvalidationSchema.validate(student);
    // console.log(error,value);
    console.log('from body', product);

    const result = await ProductServices.createProductIntoDb(product);

    console.log(result);

    res
      .status(200)
      .json({
        success: true,
        message: 'product is created succesfully',
        data: result,
      });
  } catch (err: any) {
    {
      res.status(500).json({
        success: false,
        message: err.message || 'something went wrong',
        error: err,
      });
    }
  }
};
const getAllproducts = async (req: Request, res: Response) => {
  try {
    console.log(req.query.searchTerm);

    const param = req.query.searchTerm;
    const result = await ProductServices.getAllProductsFromDB(param);

    res.status(200).json({
      success: true,
      message: 'Students are retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response) => {
  try {
    const ProductId = req.params.productId;
    console.log(ProductId);
    const result = await ProductServices.getSingleProductFromDB(ProductId);

    res.status(200).json({
      success: true,
      message: 'Student is retrieved succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

// const searchProducts = async (req: Request, res: Response) => {
//   try {
//       const searchTerm = req.query.searchTerm;
// console.log(searchTerm)
//       // Perform the search query based on the searchTerm
//      const products = await ProductServices.SearchProductFromDB(searchTerm);
// console.log(req.query)

//      // const products = await ProductModel.find(req.query);

//       res.status(200).json({
//           success: true,
//           message: `Products matching search term '${searchTerm}' fetched successfully!`,
//           data: products
//       });
//   } catch (error) {
//       console.error('Error searching products:', error);
//       res.status(500).json({
//           success: false,
//           message: 'Internal server error'
//       });
//   }
// };

const deleteProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    const result = await ProductServices.deleteProductFromDB(productId);

    res.status(200).json({
      success: true,
      message: 'Student is deleted succesfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: err.message || 'something went wrong',
      error: err,
    });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  try {
    const { productId } = req.params;

    // Check if productId is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(productId)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid productId',
      });
    }

    const productData = req.body;

    // Update product information in the database
    const updatedProduct = await ProductServices.ProductUpdateFromDB(
      productId,
      productData,
    );

    if (!updatedProduct) {
      return res.status(404).json({
        success: false,
        message: 'Product not found',
      });
    }

    res.status(200).json({
      success: true,
      message: 'Product updated successfully!',
      data: updatedProduct,
    });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error',
    });
  }
};

export const productsControllers = {
  createProduct,
  getAllproducts,
  getSingleProduct,
  deleteProduct,
  updateProduct,
};
