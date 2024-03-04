import Image from "next/image";
import ProductCard from "./components/product-card";

export default function Home() {
  return (
    <section className="max-w-7xl py-24 px-4 mx-auto">
      <div className="">

        <div className="grid grid-cols-8 gap-6">

          {/* Left-side column */}
          <div className="col-span-3 w-full">
            {/* Promotion */}
            <div className="flex flex-col gap-10 justify-between items-center bg-white  rounded-md shadow-sm">
              {/* Promotion Description */}
              <div className="flex flex-col gap-5 items-center justify-center text-center mt-10 p-10">
                <h4 className="text-2xl font-semibold">Introducing New Winter Collection</h4>
                <p className="font-normal text-base text-stone-500">Starting at $87 & save upto 30%</p>
                <a href="" className="text-base uppercase border-b-2 border-red-500 p-0.5">shop now</a>
              </div>
              {/* Promotion Image */}
              <div className="">
                <img 
                  src="https://bonik-react.vercel.app/assets/images/products/chair-with-clothes.png" 
                  alt="Product Image"
                  className="w-full h-auto"
                />
              </div>

            </div>
          </div>

          {/* Right-side column */}
          <div className="col-span-5 flex flex-col justify-between gap-8 p-5 md:px-2 md:py-0 w-full">
            {/* Title */}
            <div className="">
              <h3 className="text-4xl text-black font-semibold">Top Picks</h3>
            </div>
            {/* Product Grid List */}
            <div className="grid grid-cols-3 gap-6">
              {/* Products */}
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            {/* Promotion */}
            <div className="flex gap-10 justify-between items-center bg-white  rounded-md shadow-sm p-8">
              {/* Promotion Image */}
              <div className="flex justify-center items-center">
                <img 
                  src="https://bonik-react.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fkris-gerhard-0BKZfcamvGg-unsplash-removebg-preview%201.1322ceac.png&w=256&q=75" 
                  alt="Product Image"
                  className="w-full h-auto"
                  />
              </div>
              {/* Promotion Description */}
              <div className="flex flex-col gap-5 justify-center">
                <h4 className="text-2xl font-semibold">Introducing New Winter Collection</h4>
                <p className="font-normal text-base text-stone-500">Starting at $87 & save upto 30%</p>
                <a href="" className="text-base uppercase border-b-2 border-red-500 p-0.5 self-start">shop now</a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
