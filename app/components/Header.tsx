import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const router = useRouter();

  return (
    <div className="navbar w-full p-10 h-20 bg-cream shadow-xl">
      <h1 className="flex-1 font-bold text-black text-3xl">
        <Image src="/learnify.png" alt="Loading" width="50" height="50" />
        Learnify
      </h1>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-1">
          <li>
            <button
              onClick={() => {
                router.push("/login");
              }}
              className="font-bold rounded-none"
            >
              <h3 className="text-black font-bold">Sign In</h3>
            </button>
          </li>
          <li className="bg-harvest_gold">
            <button
              onClick={() => {
                router.push("/register");
              }}
              className="font-bold"
            >
              <h3 className="font-bold text-black ">Register</h3>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
