import React from "react";
import ProductCard from "@/app/components/ProductCard";
import macbook from '@/../public/showcase/macbook.jpg';
import playstation from '@/../public/showcase/playstation.jpg';
import airpods from '@/../public/showcase/airpods.png'
import visionpro from '@/../public/showcase/visionpro.png'

const ProductShowcase = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-center mb-4 md:mb-0">
            <ProductCard
              src={playstation}
              title="Playstation 5"
              alt="Playstation 5"
              description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
              width={250}
              height={250}
            />
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <div className="flex-1 flex justify-center mb-4 md:mb-0">
              <ProductCard
                src={airpods}
                title="Apple AirPods Max"
                alt="Apple Airpods Max"
                description="Computational audio. Listen, it is powerful"
                width={250}
                height={250}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <ProductCard
                src={visionpro}
                title="Apple Vision"
                alt="Apple Vision"
                description="An immersive way to experience entertainment"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ProductCard
            src={macbook}
            title="MacBook Air"
            alt="MacBook Air"
            description="The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
            width={250}
            height={250}
            button="Shop Now"
            btnHref="/products"
            style="md:h-full "
          />
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
