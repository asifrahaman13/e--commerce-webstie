import React, { useRef } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import {
  AiOutlineShoppingCart,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";
import {MdAccountCircle} from "react-icons/md";

const Navbar = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {

  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
      console.log("df");
    }
  };

  const ref = useRef();

  return (
    <>
      <header className="text-gray-600 body-font sticky top-0 bg-white z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">
              <Link href={"/"}>E-commerce</Link>
            </span>
          </div>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/tshirts"} className="mr-5 hover:text-gray-900">
              T shirts
            </Link>
            <Link href={"/hoodies"} className="mr-5 hover:text-gray-900">
              Hoodies
            </Link>
            <Link href={"/cups"} className="mr-5 hover:text-gray-900">
              cups
            </Link>
            <Link href={"/pants"} className="mr-5 hover:text-gray-900">
              pants
            </Link>
          </nav>
          <div
            
            className="cursor-pointer cart absolute right-0 top-4 mx-5 flex"
          >
            <Link href={'/login'}>
            <MdAccountCircle className="text-xl md:text-2xl mx-2"/>
            </Link>
            <AiOutlineShoppingCart onClick={toggleCart} className="text-xl md:text-2xl" />
          </div>
          <div
            ref={ref}
            className={`sidebar h-[100vh] absolute top-0 right-0 bg-pink-100 px-10 py-10 transform transition-transform ${Object.keys(cart).length!=0? 'translate-x-0':'translate-x-full'}`}
          >
            <div className="font-bold text-xl text-center">
              Shop your products{" "}
            </div>
            <span
              className="cursor-pointer absolute top-2 right-2"
              onClick={toggleCart}
            >
              x
            </span>
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
                        <AiOutlineMinusCircle className="text-2xl mx-2" onClick={()=>{removeFromCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}/>
                        {cart[k].qty}
                        <AiOutlinePlusCircle className="text-2xl mx-2" onClick={()=>{addtoCart(k,1,cart[k].price,cart[k].name,cart[k].size,cart[k].variant)}}/>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="flex">
              <Link href={'/checkout'}><button className="flex mx-2 mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Checkout
              </button>
              </Link>
              <button
                onClick={clearCart}
                className="flex mx-2 mt-16 text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Clear cart
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
