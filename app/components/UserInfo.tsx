"use client";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const UserInfo = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div>
      <div className="grid place-items-center h-screen bg-cream">
        <div className="shadow-lg p-8 flex flex-col gap-2 my-6">
          <div>
            Name: <span className="font-bold">{session?.user?.name}</span>
          </div>
          <div>
            Email: <span className="font-bold">{session?.user?.email}</span>
          </div>
          <button
            onClick={() => {
              router.push("/");
              signOut();
            }}
            className="bg-green-700 text-white font-bold cursor-pointer py-2 hover:bg-green-800 hover:text-slate-200"
          >
            Logout
          </button>
        </div>
        <div className="max-w-[500px] mx-auto">
          <Carousel
            showArrows={true}
            autoPlay={true}
            interval={3000}
            infiniteLoop={true}
            showThumbs={false}
          >
            <div>
              <Image
                src="/dmitri.png"
                alt="Banner image"
                width={1200}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/globalteklogo.PNG"
                alt="Banner image"
                width={1200}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/dmitri.png"
                alt="Banner image"
                width={1200}
                height={300}
              />
            </div>
            <div>
              <Image
                src="/guy2.png"
                alt="Banner image"
                width={1200}
                height={300}
              />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
