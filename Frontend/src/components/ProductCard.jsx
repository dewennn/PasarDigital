import React from 'react'

const ProductCard = ({key, product}) => {
  return (
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
          <a href="">
            ✏️
          </a>
          <a href="">
            🗑️
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProductCard