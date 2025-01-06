
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const CheckOut = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.newPrice, 0)
    .toFixed(2);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const onSubmit = async (data) => {
    const newOrder = {
      name: data.name,

      city: data.city,
      country: data.country,
      state: data.state,
      zipcode: data.zipcode,

      phone: data.phone,
      productIds: cartItems.map((item) => item?._id),
      totalPrice: totalPrice,
    };
    console.log(newOrder);
  };
  return (
    <>
      <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
        <div className="container max-w-screen-lg mx-auto">
          <div>
            <h2 className="font-semibold text-xl text-gray-600 mb-2">
              Cash On Delivery
            </h2>
            <p className="text-gray-500 mb-2">Total Price: ${totalPrice}</p>
            <p className="text-gray-500 mb-6">
              Items: {cartItems.length > 0 ? cartItems.length : 0}
            </p>

            <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3 my-8"
              >
                <div className="text-gray-600">
                  <p className="font-medium text-lg">Personal Details</p>
                  <p>Please fill out all the fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label htmlFor="full_name">Full Name</label>
                      <input
                        {...register("name", { required: "Name is required" })}
                        type="text"
                        id="name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.name && (
                        <p className="text-red-500 text-sm">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="email">Email Address</label>
                      <input
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                            message: "Enter a valid email address",
                          },
                        })}
                        type="text"
                        id="email"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-5">
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        {...register("phone", {
                          required: "Phone is required",
                        })}
                        type="number"
                        id="phone"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-3">
                      <label htmlFor="address">Address / Street</label>
                      <input
                        {...register("address", {
                          required: "Address is required",
                        })}
                        type="text"
                        id="address"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.address && (
                        <p className="text-red-500 text-sm">
                          {errors.address.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="city">City</label>
                      <input
                        {...register("city", { required: "City is required" })}
                        type="text"
                        id="city"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.city && (
                        <p className="text-red-500 text-sm">
                          {errors.city.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="country">Country</label>
                      <input
                        {...register("country", {
                          required: "Country is required",
                        })}
                        type="text"
                        id="country"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.country && (
                        <p className="text-red-500 text-sm">
                          {errors.country.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label htmlFor="state">State</label>
                      <input
                        {...register("state", {
                          required: "State is required",
                        })}
                        type="text"
                        id="state"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.state && (
                        <p className="text-red-500 text-sm">
                          {errors.state.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-1">
                      <label htmlFor="zipcode">Zipcode</label>
                      <input
                        {...register("zipcode", {
                          required: "Zipcode is required",
                        })}
                        type="text"
                        id="zipcode"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.zipcode && (
                        <p className="text-red-500 text-sm">
                          {errors.zipcode.message}
                        </p>
                      )}
                    </div>

                    <div className="md:col-span-5 mt-3">
                      <div className="inline-flex items-center">
                        <input
                          type="checkbox"
                          name="billing_same"
                          id="billing_same"
                          className="form-checkbox"
                          onChange={(e) => setIsChecked(e.target.checked)}
                        />
                        <label htmlFor="billing_same" className="ml-2">
                          I agree to the{" "}
                          <Link className="underline text-blue-600">
                            Terms & Conditions
                          </Link>{" "}
                          and{" "}
                          <Link className="underline text-blue-600">
                            Shopping Policy
                          </Link>
                          .
                        </label>
                      </div>
                    </div>

                    <div className="md:col-span-5 text-right">
                      <button
                        disabled={!isChecked}
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Place an Order
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckOut;
