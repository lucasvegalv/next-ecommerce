import React from "react";
import Link from "next/link";
import Logo from "@/app/components/Logo";
import {
  IoLogoTwitter,
  IoLogoFacebook,
  IoLogoTiktok,
  IoLogoInstagram,
} from "react-icons/io5";

// To Do --> Guardar todos los servicios del footer en una lista y renderizarlos con un map para demotrar eso tambien
const services = [];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-16 py-5">
      <div className="w-full p-10">
        {/* Contenedor principal */}
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start md:gap-20">
          {/* Columna izquierda */}
          <div className="flex flex-col items-center md:items-start mb-10 md:mb-0">
            <Logo
              logoSize={40}
              logoColor="white"
              textColor="text-white"
              display="flex justify-center md:justify-start gap-2 items-center"
            />
            <p className="text-gray-400 font-extralight text-center text-xs md:text-left mt-5">
              We are a residential{" "}
              <span className="text-white font-light">
                interior design firm
              </span>{" "}
              located in Portland. Our boutique-studio offers more than
            </p>
          </div>

          {/* Columna de servicios */}
          <ul className="text-gray-400 font-extralight text-center text-xs md:text-left mb-5">
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Services
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Bonus Program
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Gift Cards
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Credit and Payments
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Service contracts
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Non-cash account
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Payment
              </li>
            </Link>
          </ul>

          <ul className="text-gray-400 font-extralight text-center text-xs md:text-left">
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Assistance to the buyer
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Find an order
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Terms of delivery
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Exchange and return of goods
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Guarantee
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Frequently asked questions
              </li>
            </Link>
            <Link href="/">
              <li className="py-2 hover:text-white hover:font-light">
                Terms of use of the site
              </li>
            </Link>
          </ul>
        </div>

        {/* Iconos de redes sociales */}
        <div className="flex gap-5 items-center justify-center md:justify-start mt-10">
          <Link href="/">
            <IoLogoTwitter color="white" size={25} />
          </Link>
          <Link href="/">
            <IoLogoFacebook color="white" size={25} />
          </Link>
          <Link href="/">
            <IoLogoTiktok color="white" size={25} />
          </Link>
          <Link href="/">
            <IoLogoInstagram color="white" size={25} />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
