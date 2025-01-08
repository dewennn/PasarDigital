import React, { useState } from 'react'
import { useProductStore } from '../store/product'

const ProductCard = ({product}) => {

  const[active, setActive] = useState(false)
  const {deleteProduct, updateProduct} = useProductStore()

  // For delete
  const handleDeleteProduct = async(id) => {
    const {success, message} = deleteProduct(id)
    console.log("Success", success)
    console.log("Message", message)
  }

  // For update
  const [newProduct, setNewProduct] = useState({
    name: product.name, price: product.price, image: product.image
  })

  const handleUpdateProduct = async(id) => {
    const {success, message} = await updateProduct(id, newProduct)
    console.log("Success", success)
    console.log("Message", message)
    setActive(false)
  }

  return (
    <div>
      <div className='hover:-translate-y-2 transition-all ease-in-out'>
        <div className='h-64'>
          <img className='w-full h-full object-center object-cover' src={product.image} alt="" />
        </div>

        <div className='mt-2'>
          <h1 className='text-lg font-semibold'>{product.name}</h1>
          <h2>
            {new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR',
              currencyDisplay: 'code' // This will display the currency as "IDR" instead of the symbol (optional)
            }).format(product.price)}
          </h2>

          <div className='flex gap-2 text-xl mt-2'>
            <button onClick={() => {setActive(true)}}>
              ✏️
            </button>
            <button onClick={() => {handleDeleteProduct(product._id)}}>
              🗑️
            </button>
          </div>
        </div>
      </div>
      
      <div
        className={`
          fixed bg-gray-500 bg-opacity-50 left-0 right-0 top-0 bottom-0
          flex flex-col justify-center items-center ${active ? 'block' : 'hidden'}`
        }
      >
        <div className='w-[40%] border border-gray-600 flex flex-col justify-center items-center p-4 gap-4 rounded-lg bg-white'>
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

          <div className='w-full flex gap-2'>
            <button
              className='bg-gray-900 px-4 py-2 rounded-md text-lg font-bold text-white'
              onClick={() => {handleUpdateProduct(product._id)}}
            >
              Submit
            </button>

            <button
              className='bg-gray-900 px-4 py-2 rounded-md text-lg font-bold text-white'
              onClick={() => {setActive(false)}}
            >
              Close
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ProductCard