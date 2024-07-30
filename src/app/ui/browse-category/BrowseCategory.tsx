import React from 'react'
import Link from 'next/link';
import CategoryCard from '@/app/components/CategoryCard'
import { IoPhonePortraitOutline, IoWatchOutline, IoCameraOutline, IoHeadsetOutline, IoDesktopOutline, IoGameControllerOutline, IoChevronBackSharp, IoChevronForwardSharp    } from "react-icons/io5";

const BrowseCategory = () => {
  return (
    <section className='flex flex-col mx-3'>
      
      <div className='flex justify-between mx-4'>
        <h3 className='text-lg font-semibold'>Browse By Category</h3>

        <div className='flex justify-between'>
          <Link href='/'>
            <IoChevronBackSharp size={30} />
          </Link>
          <Link href='/'>
            <IoChevronForwardSharp size={30} />
          </Link>
        </div>

      </div>
      
      <div className='flex flex-wrap justify-between gap-4 p-4 mb-7'>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Phones' icon={IoPhonePortraitOutline}/>
        </Link>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Smart Watches' icon={IoWatchOutline}/>
        </Link>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Cameras' icon={IoCameraOutline}/>
        </Link>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Headphones' icon={IoHeadsetOutline}/>
        </Link>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Computers' icon={IoDesktopOutline}/>
        </Link>
        <Link href='/'>
          <CategoryCard iconSize={35} iconColor='black' category='Gaming' icon={IoGameControllerOutline}/>
        </Link>
      </div>
    </section>
  )
}

export default BrowseCategory