import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { FaUpload } from "react-icons/fa";
import { useContext } from "react";
import swal from "sweetalert";
import { AuthContext } from "../../../Context/UserContext";

const AddProducts = () => {
  const imgHostKey = process.env.REACT_APP_Imgbb_Key;
  const {user} = useContext(AuthContext)
  const email = user.email
  const sellerName = user.displayName
  const navigate = useNavigate();
  const time = new Date()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLoginSubmit = (data) => {
   

    const image = data.img[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgdata) => {
        if (imgdata.success) {
          
          const products = {
            title: data.title,
            varifySeller: false,
            email,
            sellerName,
            phone: data.number,
            brand: data.brand,
            resalePrice: data.resalePrice,
            originalPrice: data.originalPrice,
            location: data.location,
            time: time,
            condition: data.condition,
            useYear: data.useYear,
            fuelType: data.fuelType,
            description: data.description,
            img: imgdata.data.url,
          };

          console.log(products);

          fetch("http://localhost:5000/products", {
            method: "POST",
            headers: {
              "CONTENT-TYPE": "application/json",
            },
            body: JSON.stringify(products),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
               swal({
                 title: `Successful added ${products.title}`,
                 icon: "success",
                 button: "ok",
               });
               navigate("/dashboard/myproducts");
            });
        }
      });
  };

  return (
    <div>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <h2 className="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-8">
            Add a Product
          </h2>
          <p className="text-rose-800   font-bold text-center mb-4 md:mb-4"></p>

          <form
            onSubmit={handleSubmit(handleLoginSubmit)}
            className="max-w-lg border rounded-lg mx-auto shadow-md"
          >
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Title
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("title", {
                    required: "Name is required",
                  })}
                />
                {errors.title && (
                  <p className="text-red-500">{errors.title.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Phone Number
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("number", {
                    required: "Phone number is required",
                  })}
                />
                {errors.number && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Location
                </label>
                <select
                  {...register("location", {
                    required: "location is required",
                  })}
                  className="select w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                >
                  <option>Dhaka</option>
                  <option>Chittagong</option>
                  <option>Rajshahi</option>
                  <option>Barisal</option>
                  <option>Khulna</option>
                  <option>Sylhet</option>
                  <option>Rangpur</option>
                  <option>Mymensingh</option>
                </select>

                {errors.location && (
                  <p className="text-red-500">{errors.location.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Brand Name
                </label>
                <select
                  {...register("brand", {
                    required: "brand Name is required",
                  })}
                  className="select w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                >
                  <option>toyota</option>
                  <option>honda</option>
                  <option>tesla</option>
                </select>

                {errors.brand && (
                  <p className="text-red-500">{errors.brand.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Resale Price
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("resalePrice", {
                    required: "Resale price is required",
                  })}
                />
                {errors.resalePrice && (
                  <p className="text-red-500">{errors.resalePrice.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Original Price
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("originalPrice", {
                    required: "Original price is required",
                  })}
                />
                {errors.originalPrice && (
                  <p className="text-red-500">{errors.originalPrice.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Years of use
                </label>
                <input
                  className="w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("useYear", {
                    required: "purchase year is required",
                  })}
                />
                {errors.useYear && (
                  <p className="text-red-500">{errors.useYear.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Car condition
                </label>
                <div className="flex justify-center gap-3">
                  <div>
                    <label className="label cursor-pointer ">
                      <span className="label-text mr-3">Excellent</span>
                      <input
                        {...register("condition")}
                        type="radio"
                        value="excellent"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="label cursor-pointer ">
                      <span className="label-text mr-3">Good</span>
                      <input
                        {...register("condition")}
                        type="radio"
                        value="good"
                      />
                    </label>
                  </div>
                  <div>
                    <label className="label cursor-pointer">
                      <span className="label-text mr-3">Fair</span>
                      <input
                        {...register("condition")}
                        type="radio"
                        value="fair"
                      />
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Fuel type
                </label>

                <div className="flex justify-center gap-4">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-3">CNG</span>
                      <input
                        {...register("fuelType")}
                        type="checkbox"
                        value="cng"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-3">Diesel</span>
                      <input
                        {...register("fuelType")}
                        type="checkbox"
                        value="diesel"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-3">Petrol</span>
                      <input
                        {...register("fuelType")}
                        type="checkbox"
                        value="petrol"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text mr-3">Octane</span>
                      <input
                        {...register("fuelType")}
                        type="checkbox"
                        value="octane"
                        className="checkbox checkbox-primary"
                      />
                    </label>
                  </div>
                </div>
                {errors.fuelType && (
                  <p className="text-red-500">{errors.fuelType.message}</p>
                )}
              </div>

              <div>
                <label className="inline-block text-gray-800 text-sm sm:text-base mb-2">
                  Description
                </label>
                <textarea
                  className="textarea textarea-bordered w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                  {...register("description", {
                    required: "description is required",
                  })}
                  placeholder="description"
                ></textarea>

                {errors.description && (
                  <p className="text-red-500">{errors.description.message}</p>
                )}
              </div>

              <div>
                {/* here start */}

                <div class="flex items-center justify-center w-full">
                  <label
                    for="dropzone-file"
                    class="flex flex-col items-center justify-center w-full border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                  >
                    <div class="flex flex-col items-center justify-center pt-5 pb-6">
                      <svg
                        aria-hidden="true"
                        class="w-10 h-10 mb-3 text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <FaUpload></FaUpload>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                        <span class="font-semibold">Click to upload</span> or
                        drag and drop
                      </p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF (MAX. 800x400px)
                      </p>
                    </div>
                    <input
                      id="dropzone-file"
                      type="file"
                      className="hidden w-full bg-gray-50 text-gray-800 border focus:ring ring-indigo-300 rounded outline-none transition duration-100 px-3 py-2"
                      {...register("img", {
                        // required: "image is required",
                      })}
                    />
                  </label>
                </div>

                {errors.img && (
                  <p className="text-red-500">{errors.img.message}</p>
                )}

                {/* here end */}
              </div>

              <button className="btn btn-primary w-full">Add a Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProducts;
