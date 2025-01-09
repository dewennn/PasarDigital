import mongoose from "mongoose"
import Product from "../models/product.model.js"

// Get products
export const getProducts = async(req, res) => {
  try {
    const products = await Product.find({})
    res.status(200).json({success: true, data: products})

  } catch (error) {
    console.error("Error in fetching products:", error.message)
    res.status(500).json({success:false, message:"Server Error!"})

  }
}

// Add a product
export const createProduct = async (req,res) => {
  const product = req.body // users data

  if(!product.name || !product.price || !product.image){
    return res.status(400).json({success:false, message:"Please provide all fields"})
  }

  const newProduct = new Product(product)

  try {
    await newProduct.save()
    res.status(201).json({success: true, data: newProduct})

  } catch (error) {
    res.status(500).json({success:false, message:"Server Error!"})

  }
}

// Validate ID
function validateId(id, res){
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({success: false, message: 'Invalid Product Id'})
  }
}

// Update a product
export const updateProduct = async (req, res) => {
  const {id} = req.params
  const product = req.body
  if(validateId(id, res)) return

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, product, {new:true})
    res.status(200).json({success: true, data: updatedProduct})

  } catch (error) {
    res.status(500).json({success:false, message:"Server Error!"})
    
  }
}

// Delete a product
export const deleteProduct = async (req, res) => {
  const {id} = req.params
  if(validateId(id, res)) return
  
  try {
    await Product.findByIdAndDelete(id)
    res.status(200).json({success:true, message:"Product Deleted"})
  } catch (error) {
    res.status(500).json({success:false, message:"Server Error!"})
  }
}