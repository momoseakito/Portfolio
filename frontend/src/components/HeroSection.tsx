import { faRocket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";
import profileImg from "../../public/images/human.jpg";

const HeroSection = () => {
  return (
    <div
      id="home"
      className="container mt-16 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
    >
      <div className="flex flex-wrap">
        <div className="md:my-36 lg:ml-20 justify-center md:justify-start mx-auto max-w-xl flex flex-wrap">
          <h1 className="font-bold text-5xl text-center md:text-left lg:text-7xl md:text-6xl">
            TailWindCSSで
            <br />
            美しいサイトを
            <br />
            作ります
          </h1>
          <button className="px-6 py-4 mt-10 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
            <FontAwesomeIcon icon={faRocket} className="mr-1" />
            <span>もっと見る</span>
          </button>
        </div>
        <Image
          src={profileImg}
          alt="img"
          className="md:absolute lg:top-2 lg:right-52 md:w-3/5 w-10/12 mt-12 md:mt-0 right-6 mx-auto -z-10 lg:w-3/6"
        />
      </div>
    </div>
  );
};

export default HeroSection;
