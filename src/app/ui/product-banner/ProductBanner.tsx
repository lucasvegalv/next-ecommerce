import React from 'react'
import Link from 'next/link'
import banner from '../../../../public/banner.jpeg'
import Image from 'next/image'

const ProductBanner = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row items-center justify-center text-center md:text-left py-10 px-5">
      <div className="flex flex-col md:w-3/4 md:pl-20 space-y-6 md:space-y-8">
        <h3 className="text-white opacity-45 text-sm md:text-base">Pro.Beyond.</h3>
        <div className="text-5xl font-thin text-white lg:text-7xl">
          iPhone 14<span className="block md:hidden"></span> <span className="font-semibold">Pro</span>
        </div>
        <p className="text-sm text-white font-extralight opacity-45 mb-12 md:mb-14">
          Created to change everything for the better. For everyone
        </p>
        <div className="w-full md:w-1/2 mx-auto md:mx-0 my-6 md:my-10 mt-8 md:mt-12">
          <Link href="/products" className="text-xs font-semibold py-3 px-10 border text-white border-gray-500 rounded-md hover:bg-gray-800 transition-all w-full">
            Shop Now
          </Link>
        </div>
      </div>
      <div className="mt-6 md:mt-0 md:w-1/2 flex justify-center">
        <Image
          src={banner}
          alt="iPhone 14 Pro"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  )
}

export default ProductBanner