import Image from "next/image";
import React from "react";
import portfolio1 from "../../public/images/portfolio1.jpg";
import portfolio2 from "../../public/images/portfolio2.jpg";
import portfolio3 from "../../public/images/portfolio3.jpg";
import portfolio4 from "../../public/images/portfolio4.jpg";
import portfolio5 from "../../public/images/portfolio5.jpg";
import portfolio6 from "../../public/images/portfolio6.jpg";

const PortfolioSection = () => {
  return (
    <div
      id="portfolio"
      className="container mt-64 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">私のポートフォリオ</h2>
        <p className="section-paragraph">
          私が作ってきたWebアプリケーションがこちら
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
          <Image
            src={portfolio1}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
          <Image
            src={portfolio2}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
          <Image
            src={portfolio3}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
          <Image
            src={portfolio4}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
          <Image
            src={portfolio5}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
          <Image
            src={portfolio6}
            alt="img1"
            className="w-full h-36 lg:h-72 object-cover rounded-md cursor-pointer"
          />
        </div>
      </section>
    </div>
  );
};

export default PortfolioSection;
