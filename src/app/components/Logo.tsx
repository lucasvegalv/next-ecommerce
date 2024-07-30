import Link from 'next/link'
import React from 'react'
import { IoLogoStencil } from 'react-icons/io5'
import { Oswald } from 'next/font/google'

const oswald = Oswald({ subsets: ['latin'] })

interface LogoProps {
  logoColor?: string,
  logoSize?: number,
  textColor?: string,
  display?: string;
}


const Logo = ({ logoColor, logoSize = 25, textColor = 'text-black', display = 'flex justify-between gap-2' }: LogoProps) => {
  return (
    <div>
      <Link href="." className={display}>
        <IoLogoStencil size={logoSize} color={logoColor} />
        <h1 className={`${oswald.className} ${textColor}`}>Shape</h1>
      </Link>

    </div>
  )
}

export default Logo