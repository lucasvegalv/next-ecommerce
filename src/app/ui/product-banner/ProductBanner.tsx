import React from 'react'
import Link from 'next/link'

const ProductBanner = () => {
  return (
    <div className='bg-black flex flex-col justify-center items-center text-center min-h-screen p-4'>
      <div className='flex flex-col justify-center items-center'>
        <h3 className='text-white opacity-45 mb-5'>Pro. Beyond.</h3>
        <h1 className='text-5xl font-extralight text-white mt-2'>iPhone 14</h1>
        <h1 className='text-5xl font-bold text-white mt-1 mb-5'>Pro</h1>
        <p className='text-sm text-white font-extralight opacity-45 mt-1 mb-5 w-3/4'>
          Created to change everything for the better. For everyone
        </p>
      </div>
      <Link href='/' className="text-xs font-semibold py-3 px-10 border text-white border-gray-500 rounded-md hover:bg-gray-900 transition-all w-2/6 max-w-xs mt-1 mb-4">
        Shop Now
      </Link>
      <img src="https://www.notebookcheck.com/uploads/tx_nbc2/AppleiPhone14Pro__1__01.JPG" alt="iPhone 14 Pro" className="mt-4" />
    </div>
  )
}

export default ProductBanner