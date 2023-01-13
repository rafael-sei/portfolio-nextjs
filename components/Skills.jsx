import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Skills
        </p>
        <h2 className="py-4">What Can Do</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* HTML*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/html.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">HTML</h3>
              </div>
            </div>
          </div>

          {/* css*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/css.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">CSS</h3>
              </div>
            </div>
          </div>

          {/* javascript*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/javascript.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Javascript</h3>
              </div>
            </div>
          </div>

          {/* react*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/react.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">React</h3>
              </div>
            </div>
          </div>

          {/* tailwind*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/tailwind.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Tailwind</h3>
              </div>
            </div>
          </div>

          {/* firebase*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/firebase.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Firebase</h3>
              </div>
            </div>
          </div>
           
          {/* github*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/github1.png"
                  width={64}
                  height={64}
                  alt="/"
                   
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Github1</h3>
              </div>
            </div>
          </div>

          {/* shopify*/}
          <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 justify-center items-center">
              <div className="m-auto">
                <Image
                  src="/assets/skills/shopify.png"
                  width={64}
                  height={64}
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3 className="">Shopify</h3>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
