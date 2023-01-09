import React from "react";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

const Checkout = ({ cart, clearCart, addtoCart, removeFromCart, subTotal }) => {
  return (
    <>
      <div className="container mx-2 sm:m-auto">
        <h1 className="font-bold text-3xl my-8 text-center">Checkout</h1>
        <h2>1.Delivery details</h2>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label for="text" className="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="px-2 w-full">
          <div className="mb-4">
            <label
              htmlFor="address"
              className="leading-7 text-sm text-gray-600"
            >
              Address
            </label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="10"
              className="w-full bg-white round border border-gray-300 focus:border-indigo-500 focus:ring-2 focues:ring-indigo text-base outline-none text-gray-7000 py-1 px-3 leading -g transaction-colots duration-200 ease-in-out"
            ></textarea>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className="mb-4">
              <label for="text" className="leading-7 text-sm text-gray-600">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label for="city" className="leading-7 text-sm text-gray-600">
                city
              </label>
              <input
                type="city"
                id="city"
                name="city"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto flex my-4">
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label for="state" className="leading-7 text-sm text-gray-600">
                State
              </label>
              <input
                type="state"
                id="state"
                name="state"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
          <div className="px-2 w-1/2">
            <div className=" mb-4">
              <label for="pincode" className="leading-7 text-sm text-gray-600">
                Pincode
              </label>
              <input
                type="pincode"
                id="pincode"
                name="pincode"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
          </div>
        </div>
        <h2 className="font-semibold text-xl">2.Review cart items</h2>
        <div className="sidebar bg-pink-100 p-6 m-2">
          <div className="font-bold text-xl text-center">
            Shop your products{" "}
          </div>

          <ol className="list-decimal">
            {Object.keys(cart).length === 0 && (
              <div className="my-4 font-semibold text-center">
                No items in the cart
              </div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-3 mx-3">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 spacex">
                      <AiOutlineMinusCircle
                        className="text-2xl mx-2"
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                      {cart[k].qty}
                      <AiOutlinePlusCircle
                        className="text-2xl mx-2"
                        onClick={() => {
                          addtoCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                      />
                    </div>
                  </div>
                  <span className="total">Subtotal:{subTotal}</span>
                  <Link href={"/checkout"}>
                    <button className="flex mx-2 mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                      Pay now
                    </button>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default Checkout;
