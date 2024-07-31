import Link from "next/link";
import React from "react";

interface ProductCardProps {
  src: string;
  title: string;
  description: string;
  width: number;
  height: number;
  alt: string;
  button?: string;
  btnHref?: string,
  style?: string;
}

const ProductCard = ({
  src,
  title,
  description,
  width,
  height,
  alt,
  button,
  btnHref,
  style,
}: ProductCardProps) => {
  return (
    <div className={`flex flex-col md:flex-row w-full m-2 ${style} p-5`}>
      <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
        <img
          src={src}
          width={width}
          height={height}
          alt={alt}
          className="object-cover rounded-md"
        />
      </div>

      <div className="flex flex-col justify-center text-center md:text-left mt-4 md:mt-0 md:ml-4 w-full md:w-1/2 items-center md:items-start">
        <div>
          <h3 className="font-semibold text-lg pb-2">{title}</h3>
          <p className="font-extralight text-xs">{description}</p>
        </div>
        {button && btnHref && (
          <Link href={btnHref} className="mt-4 text-xs font-semibold py-3 px-10 border border-gray-500 rounded-md hover:bg-black hover:opacity-80 hover:text-white transition-all w-1/2 md:w-full lg:w-3/4">
            {button}
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
