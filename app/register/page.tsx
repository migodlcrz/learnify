"use client";

import RegisterForm from "@/app/components/RegisterForm";
import React from "react";
import Image from "next/image";

const Register = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 lg:h-screen bg-emerald-300">
        <Image src="/noriel.png" alt="Loading" width={1000} height={1000} />
      </div>
      <div className="w-full lg:w-1/2">
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
