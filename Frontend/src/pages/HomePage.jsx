import React, { useEffect } from 'react'
import { useProductStore } from '../store/product'
import ProductCard from '../components/ProductCard';

const HomePage = () => {

  const {fetchProducts, products} = useProductStore();
  useEffect(() => {
    fetchProducts()
  }, [fetchProducts])

  return (
    <div className='flex flex-col gap-10'>
      <div className='flex justify-center'>
        <h1 className='text-3xl font-bold'>Current Products 🛒</h1>
      </div>

      {
        products ? 
          <div className='grid grid-cols-4 gap-4 px-10'>
            {
              products.map((product) => (
                <ProductCard key={product.id} product={product}/>
              ))
            }
          </div>
        :
          <div className='flex justify-center'>
            <h4 className='text-xl'>No products found 😞 <a href="/create" className='text-blue-400 underline'>Create a product</a></h4>
          </div>
      }
      
    </div>
  )
}

export default HomePage