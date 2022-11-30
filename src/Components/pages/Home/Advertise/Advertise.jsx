import React from 'react';
import { useContext } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AuthContext } from '../../../../Context/UserContext';

const Advertise = ({ product, setMproudcts }) => {
       const { user } = useContext(AuthContext);

  const {
    img,
    title,
    description,
    resalePrice,
    originalPrice,
    brand,
    location,
    time,
    varifySeller,
  } = product;

  return (
    <div className="card w-96 bg-base-100 drop-shadow-md h-[90%]">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start gap-2 px-2">
          <div className="flex flex-col">
            <a
              href="#"
              className="text-gray-800 hover:text-gray-500 text-lg lg:text-xl font-bold transition duration-100"
            >
              {title}
            </a>
            <small>
              <span className="text-gray-500 capitalize">
                Brand Name: {brand}
              </span>
            </small>

            <span className="text-gray-500 mt-2">
              {/* Year of used: {useYear} years */}
            </span>
          </div>

          <div className="flex flex-col items-end">
            <div className="flex gap-2 items-end">
              {/* <small>{sellerName}</small> */}
              {/* {users.map((user, i) => {
                  return user?.sellerStatus !== "verifySeller" ? (
                    <FaCheckCircle className="text-success"></FaCheckCircle>
                  ) : (
                    <FaRegTimesCircle className="text-red-600"></FaRegTimesCircle>
                  );
                })} */}
            </div>

            <span className="text-gray-600 lg:text-lg font-bold">
              ${resalePrice}
            </span>
            <span className="text-red-500 text-sm line-through">
              ${originalPrice}
            </span>
            <span className="text-gray-500 flex items-center gap-2 mt-3">
              <small>{location}</small>
              <FaMapMarkerAlt className="text-secondary" />
            </span>
            <span className="text-gray-500">
              Time: <small>{time.slice(11, 16)}</small>
            </span>
          </div>
        </div>
        <p className="text-gray-500 my-2">{description.slice(0, 70)}</p>

        <div className="card-actions justify-end">
          <label
            onClick={() => setMproudcts(product)}
            htmlFor="my-modal-3"
            className="btn btn-primary w-full"
          >
            Book Now
          </label>
        </div>
      </div>
    </div>
  );
};

export default Advertise;