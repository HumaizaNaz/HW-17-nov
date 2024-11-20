import React from "react";
import Image from "next/image";
const Cards = () => {
  return (
    <>
 <div className="flex items-center flex-wrap gap-8  md:flex-row lg:flex-row justify-around mt-6">
        {/* card-1 */}

 <div className="lg:w-3/12 w-9/12 md:w-5/12 bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2">
         
         
          <Image
            src="/images/r6.jpg"
            alt="pic1"
            width={300}
            height={400}
            className="mx-auto h-44 w-36"
          />



          <p className="text-center text-green-600 font-bold pt-4">PKR 4,000</p>


          <p className="text-xs text-center mt-2">
            <span className="text-orange-500">
              &#9733;&#9733;&#9733;&#9734;&#9734;
            </span>{" "}
            721 Reviews
          </p>



          <div className="flex justify-center items-center my-3">

 <button className="lg:px-4 lg:py-2 px-2 py-2  bg-blue-700 text-white rounded-md hover:bg-pink-700 text-xs"
            >
              Buy Now
            </button>

          </div>
          
        </div>
        {/* card-2 */}

        <div className="lg:w-3/12 w-9/12 md:w-5/12  bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2">
          <Image
            src="/images/r5.jpg"
            alt="pic2"
            width={200}
            height={300}
            className="mx-auto h-44 w-36"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 3,500</p>


          <p className="text-xs text-center mt-2">
            <span className="text-orange-500">
              &#9733;&#9733;&#9733;&#9734;&#9734;
            </span>{" "}
            145 Reviews
          </p>


          <div className="flex justify-center items-center my-3">
            <button
              className="lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
                            hover:bg-pink-700 text-xs"
            >
              Buy Now
            </button>
          </div>
        </div>
        {/* card-3 */}
        <div
          className="lg:w-3/12 w-9/12 md:w-5/12 
                       bg-purple-100 shadow-lg shadow-red-700 mb-20 p-2 border-gray-300 border-2"
        >
          <Image
            src="/images/r4.jpg"
            alt="pic3"
            width={200}
            height={300}
            className="mx-auto h-44 w-36"
          />
          <p className="text-center text-green-600 font-bold pt-4">PKR 4,999</p>
          <p className="text-xs text-center mt-2">
            <span className="text-orange-500">
              &#9733;&#9733;&#9733;&#9734;&#9734;
            </span>{" "}
            751 Reviews
          </p>
          <div className="flex justify-center items-center my-3">
            <button
              className="lg:px-4 lg:py-2 px-2 py-2 bg-blue-700 text-white rounded-md
                                hover:bg-pink-700 text-xs"
            >
              Buy Now
            </button>
          </div>
        </div>
    
      </div>
    </>
  );
};

export default Cards;
