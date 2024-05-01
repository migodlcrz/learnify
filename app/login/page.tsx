import React from "react";
import LoginForm from "../components/LoginForm";
import Image from "next/image";

const Login = () => {
  return (
    <div className="flex flex-col lg:flex-row overflow-hidden">
      <div className="w-full lg:w-1/2 h-20 lg:h-screen bg-emerald-300 relative">
        <Image
          src="/dmitri.png"
          alt="Loading"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="w-full lg:w-1/2">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
