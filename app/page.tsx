import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl py-24 px-4 mx-auto">
      <div className="">

        <div className="grid grid-cols-8 gap-6">

          {/* Left-side column */}
          <div className="col-span-3 w-full bg-white rounded-md shadow-sm">
            {/* Promotion */}
            <div className="flex flex-col gap-10 justify-between items-center">
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
          <div className="col-span-5 space-y-5 p-5 w-full">
            {/* Title */}
            <div className="">
              <h3 className="text-4xl text-black font-semibold">Top Picks</h3>
            </div>
            {/* Product Grid List */}
            <div className="flex gap-5">
              {/* Products */}
              <a href="#" className="group relative block rounded-lg shadow-sm overflow-hidden border border-transparent transition hover:border-[#d6d6d6]">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                  alt=""
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="relative border border-gray-100 bg-white p-3 space-y-3">
                  {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}

                  <h3 className="text-lg font-medium text-gray-900">Robot Toy</h3>

                  <p className="text-sm text-gray-700">$14.99</p>

                  <form className="mt-4">
                    <button
                      className="block w-full rounded bg-yellow-400 p-3 text-sm font-medium transition hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
              <a href="#" className="group relative block rounded-lg shadow-sm overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                  alt=""
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="relative border border-gray-100 bg-white p-3 space-y-3">
                  {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}

                  <h3 className="text-lg font-medium text-gray-900">Robot Toy</h3>

                  <p className="text-sm text-gray-700">$14.99</p>

                  <form className="mt-4">
                    <button
                      className="block w-full rounded bg-yellow-400 p-3 text-sm font-medium transition hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>
              <a href="#" className="group relative block rounded-lg shadow-sm overflow-hidden">
                <button className="absolute end-4 top-4 z-10 rounded-full bg-white p-1.5 text-gray-900 transition hover:text-gray-900/75">
                  <span className="sr-only">Wishlist</span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-4 w-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                    />
                  </svg>
                </button>

                <img
                  src="https://images.unsplash.com/photo-1599481238640-4c1288750d7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2664&q=80"
                  alt=""
                  className="h-44 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="relative border border-gray-100 bg-white p-3 space-y-3">
                  {/* <span className="whitespace-nowrap bg-yellow-400 px-3 py-1.5 text-xs font-medium"> New </span> */}

                  <h3 className="text-lg font-medium text-gray-900">Robot Toy</h3>

                  <p className="text-sm text-gray-700">$14.99</p>

                  <form className="mt-4">
                    <button
                      className="block w-full rounded bg-yellow-400 p-3 text-sm font-medium transition hover:scale-105"
                    >
                      Add to Cart
                    </button>
                  </form>
                </div>
              </a>

            </div>
            {/* Promotion */}
            <div className="">

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
