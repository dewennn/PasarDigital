import React from 'react'

const Navbar = () => {
  return (
    <header className='flex justify-between px-10 py-5 items-center'>
      {/* Left */}
      <div className='text-2xl font-bold'>
        <a href="/">PasarDigital</a>
      </div>

      {/* Right */}
      <div className='flex gap-8 items-center'>
        <div className='flex gap-8 bg-gray-200 px-8 py-3 rounded-full items-center'>
          <a href='' className='w-5'>
            <img src={`/resources/icon_bell.png`} alt="" />
          </a>

          <a href='' className='w-5'>
            <img src={`/resources/icon_message.png`} alt="" />
          </a>

          <a href='/create' className='w-5'>
            <img className='filter' src={`/resources/icon_plus.png`} alt="" />
          </a>
        </div>

        <div className='w-8'>
          <img src={`/resources/icon_profile.png`} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Navbar