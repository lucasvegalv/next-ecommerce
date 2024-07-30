import React from 'react'
import Link from 'next/link'
import Logo from '@/app/components/Logo'
import { IoLogoTwitter, IoLogoFacebook, IoLogoTiktok, IoLogoInstagram } from 'react-icons/io5'

// To Do --> Guardar todos los servicios del footer en una lista y renderizarlos con un map para demotrar eso tambien
const services = []

const Footer = () => {
  return (
    <footer className='bg-black'>
      <div className='w-3/4 m-0 m-auto p-10'>
        <Logo logoSize={40} logoColor='white' textColor='text-white' display='flex justify-center gap-2 items-center'/>
        <p className='text-gray-400 font-extralight text-center text-xs my-5'>We are a residential <span className='text-white font-light'>interior design firm</span> located in Portland. Our boutique-studio offers more than</p>
        <ul className='text-gray-400 font-extralight text-center text-xs'>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Services</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Bonus Program</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Gift Cards</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Credit and Payments</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Service contracts</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Non-cash account</li>
          </Link>
          <Link href='/'>
            <li className='py-2 hover:text-white hover:font-light'>Payment</li>
          </Link>
        </ul>

        <div className='flex gap-5 items-center mt-10 justify-center'>
          <Link href='/'>
            <IoLogoTwitter color='white' size={25} />
          </Link>
          <Link href='/'>
            <IoLogoFacebook color='white' size={25} />
          </Link>
          <Link href='/'>
            <IoLogoTiktok color='white' size={25} />
          </Link>
          <Link href='/'>
            <IoLogoInstagram color='white' size={25} />
          </Link>
        </div>

      </div>
    </footer>
  )
}

export default Footer