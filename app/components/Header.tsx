"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

const Header = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className="navbar w-full p-10 h-20 bg-cream shadow-xl">
      <h1 className="flex-1 font-bold text-black text-3xl">
        <Image src="/learnify.png" alt="Loading" width="50" height="50" />
        Learnify
      </h1>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-1">
          {session?.user ? (
            <div className="flex flex-row items-center justify-center space-x-4">
              <li>{session?.user?.name}</li>
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="bg-harvest_gold rounded-none text-white font-bold cursor-pointer py-2 hover:bg-green-800 hover:text-slate-200"
                >
                  Logout
                </button>
              </li>
            </div>
          ) : (
            <>
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
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
