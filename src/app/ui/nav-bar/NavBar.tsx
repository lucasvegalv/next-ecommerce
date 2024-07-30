import React from 'react'
import Link from 'next/link'
import Logo from '@/app/components/Logo'
import { IoMenu, IoLogoStencil } from "react-icons/io5"

const NavBar = () => {
  return (
    <div className='py-5 px-5 flex justify-between'>

      <Logo />

      <Link href="/">
        <IoMenu size={25}/>
      </Link>
    </div>
  )
}

export default NavBar