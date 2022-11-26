import React from 'react';

const Product = ({ product, setMproudcts }) => {
  const {
    img,
    title,
    description,
    resalePrice,
    originalPrice,
    brand,
    location,
    time,
  } = product;

  

  return (
    <div>
      <div className="card w-96 bg-base-100 drop-shadow-md">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div class="flex justify-between items-start gap-2 px-2">
            <div class="flex flex-col">
              <a
                href="#"
                class="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
              >
                {title}
              </a>
              <span class="text-gray-500">{brand}</span>
              <span class="text-gray-500">{location}</span>
              <span class="text-gray-500">
                Date:{time.slice(0, 10)} <br /> Time: {time.slice(11, 20)}
              </span>
            </div>

            <div class="flex flex-col items-end">
              <span class="text-gray-600 lg:text-lg font-bold">${resalePrice}</span>
              <span class="text-red-500 text-sm line-through">${originalPrice}</span>
            </div>
          </div>
          <p>{description.slice(0, 50)}</p>

          <div className="card-actions justify-end">
            <label
              onClick={() => setMproudcts (product)}
              htmlFor="my-modal-3"
              className="btn btn-primary"
            >
            Book Now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;