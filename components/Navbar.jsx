import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsPersonLinesFill } from "react-icons/bs";
import { useRouter } from "next/router";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState("#ecf0f3");
  const [linkColor, setLinkColor] = useState("#1f2937");

  // Routerオブジェクトに直接アクセスするパッケージとなります。
  const router = useRouter();

  useEffect(() => {
    if (
      // router.asPathとすることで[id]の中身も文字列で取得できます。
      // ① http://localhost:3000/property === "/property" または "/crypto" または "/netfilx" または "/twitch"
      // ② (background-color)を(transparent) で透明化
      // ③ linkの色も変更する
      // ④ Path が一致しなければ、(background-color)を("#ecf0f3")にする。Linkの色も("#1f2937")に変更する
      router.asPath === "/property" ||
      router.asPath === "/crypto" ||
      router.asPath === "/netfilx" ||
      router.asPath === "/twitch"
    ) {
      setNavBg("transparent");
      setLinkColor("#ecf0f3");
    } else {
      setNavBg("#ecf0f3");
      setLinkColor("#1f2937");
    }
  }, [router]);

  useEffect(() => {
    {
      /* スクロールしたらboxshadowを表示する*/
    }
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  // メニューバー切り替え関数
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      style={
        // Set default backgroundColor.("#ecf0f3")
        // Change to transparent at the specified path. ("transparent")
        { backgroundColor: `${navBg}` }
      }
      /* Show boxshadow when scrolled */
      className={
        shadow
          ? " fixed w-full h-20 shadow-xl z-[100]"
          : " fixed w-full h-20  z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image className="w-auto h-auto"
            src="/assets/navLogo.png"
            alt="/"
            width={65}
            height={50}
            priority
          />
        </Link>
        <div>
          {/* 768以上でflexにする。768以下は隠す */}
          <ul
            style={
              // Set default LinkColor.("#1f2937")
              // Change the color at the specified path. ("#ecf0f3")
              { color: `${linkColor}` }
            }
            className="hidden md:flex"
          >
            <Link href="/">
              <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 text-sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/#skills">
              <li className="ml-10 text-sm uppercase hover:border-b">Skill</li>
            </Link>
            <Link href="/#projects">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Project
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 text-sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
          </ul>
          {/* 768以上で隠す。*/}
          <div className="md:hidden">
            {/* 1,true when clicked  / 2,Show sidebar */}
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>
        </div>
      </div>

      <div
        className={
           // darken the screen when true
          nav ? "md:hidden fixed top-0 left-0 w-full h-screen bg-black/70" : ""
        }
      >
        <div
          className={
            /* trueの時にサイドを表示させる*/
            /* falseの時にサイドを-100%で消す。*/
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="">
                <Image className="w-auto h-auto"
                  src="/assets/navLogo.png"
                  width={67}
                  height={35}
                  alt="/"
                  priority
                />
              </Link>
              {/* CloseButton */}
              <div className="rounded-full shadow-lg shadow-gray-400 p-1 cursor-pointer ">
                <AiOutlineClose onClick={handleNav} size={25} />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%]">
                let's build something legendary togethe
              </p>
            </div>
          </div>

          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Skill
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Project
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
            </ul>

            <div className="pt-40">
              <p className="uppercase tracking-widest text-[#5651e5]">
                Let's Connect
              </p>

              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
