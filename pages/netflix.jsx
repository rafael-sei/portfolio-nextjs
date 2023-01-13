import Image from "next/image";
import React from "react";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () =>{
  return (
    <div className="w-full">
      <div className=" w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="bg-black/80 absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10" />
        <Image className="absolute object-cover" fill priority src={netflixImg} alt="/" />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Netfilx App</h2>
          <h3 className="">React JS / Tailwind / Firebase</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2>Overbiew</h2>
          <p>
            I built this application in React JS and is hosted on GitHub pages.
            This app features user authentication with firebase as well as the
            firestore cloud storage database. This application is pulling movie
            data from an the IMDB movie API and displaying different categories.
            It features horizontal sliding and a featured selection. The
            useContext hook is also being implemented for app-wide state
            management.
          </p>
          <button className="px-8 py-2 mt-4 mr-8">Demo</button>
          <button className="px-8 py-2 mt-4">Code</button>
        </div>

        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2 ">Tecchnologies</p>

            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Tailwind
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Google API
              </p>
              <p className="text-gray-600 py-2 flex items-center ">
                <RiRadioButtonFill className="pr-1" />
                Zillow API
              </p>
            </div>
          </div>
        </div>

        <Link href="/#projects">
          <p className="underline cursor-pointer ">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;

