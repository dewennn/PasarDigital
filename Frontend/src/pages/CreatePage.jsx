import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: '', price: '', image: ''
  })

  const {createProduct} = useProductStore()

  const handleAddProduct = async() => {
    const {success, message} = await createProduct(newProduct)
    console.log("Success", success)
    console.log("Message", message)
    setNewProduct({name: '', price: '', image: ''})
  }

  return (
    <div className='flex flex-col justify-center items-center gap-5'>
      <h1 className='text-3xl font-bold'>Create new product</h1>

      <div className='w-[40%] border border-gray-600 flex flex-col justify-center items-center p-4 gap-4 rounded-lg'>
        <input
          type="text"
          placeholder='Product name'
          className='w-full rounded-sm p-4 bg-transparent border border-gray-600'
          value={newProduct.name}
          onChange={(e) => setNewProduct({...newProduct, name: e.target.value})}
        />

        <input
          type="text"
          placeholder='Price'
          className='w-full rounded-sm p-4 bg-transparent border border-gray-600'
          value={newProduct.price}
          onChange={(e) => setNewProduct({...newProduct, price: e.target.value})}
        />

        <input
          type="text"
          placeholder='Image URL'
          className='w-full rounded-sm p-4 bg-transparent border border-gray-600'
          value={newProduct.image}
          onChange={(e) => setNewProduct({...newProduct, image: e.target.value})}
        />

        <div className='w-full'>
          <button
            className='bg-gray-900 px-4 py-2 rounded-md text-lg font-bold text-white'
            onClick={() => {handleAddProduct()}}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreatePage