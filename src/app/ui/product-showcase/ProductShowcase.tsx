import React from "react";
import ProductCard from "@/app/components/ProductCard";

const ProductShowcase = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row w-full">
        <div className="flex flex-col md:w-1/2">
          <div className="flex justify-center mb-4 md:mb-0">
            <ProductCard
              src="https://nextgames.com.ar/img/Public/1040/producto-ps5-slim-lectora-3327.jpg"
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
                src="https://i5.walmartimages.com/seo/Apple-AirPods-Max-Silver_8048f1a5-9111-44fc-a338-094c16736be0.6f4fd3e0c63c8968c2dc4e812848823a.jpeg"
                title="Apple AirPods Max"
                alt="Apple Airpods Max"
                description="Computational audio. Listen, it is powerful"
                width={250}
                height={250}
              />
            </div>
            <div className="flex-1 flex justify-center">
              <ProductCard
                src="https://cms.nsflow.com/wp-content/uploads/2024/02/Apple-vision-pro-specs-micro%E2%80%91OLED-1.png"
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
            src="https://m.media-amazon.com/images/I/71vFKBpKakL._AC_UF894,1000_QL80_.jpg"
            title="MacBook Air"
            alt="MacBook Air"
            description="The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
            width={250}
            height={250}
            button="Shop Now"
            btnHref="/"
            style="md:h-full "
          />
        </div>
      </section>
    </>
  );
};

export default ProductShowcase;
