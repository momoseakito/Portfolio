import { faJs, faPython } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React from "react";

const SkilsSection = () => {
  return (
    <div
      id="skils"
      className="container mt-64 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">スキルスタック</h2>
        <p className="section-paragraph">
          私は以下のプログラミング言語を1年取り扱ってきました。
        </p>

        <div className="my-16">
          <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-yellow-300 transition-all duration-300 cursor-pointer">
            <div className="mb-6 lg:mb-0 self-center">
              <FontAwesomeIcon
                icon={faJs}
                className="text-9xl text-yellow-300"
              />
            </div>
            <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
              <h3 className="text-3xl font-semibold">JavaScript</h3>
              <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">Webサイト制作</div>
                <div className="badge">フロントエンド開発</div>
              </div>
              <p className="text-secondary">
                JavaScriptエンジニア。普段はReactを使って開発現場で働いています。
              </p>
            </div>
          </div>
        </div>

        <div className="my-16">
          <div className="w-full border border-purple-300 p-16 lg:px-32 lg:py-20 flex justify-center lg:justify-start flex-wrap lg:space-x-32 hover:border-blue-600 transition-all duration-300 cursor-pointer">
            <div className="mb-6 lg:mb-0 self-center">
              <FontAwesomeIcon
                icon={faPython}
                className="text-9xl text-blue-600"
              />
            </div>
            <div className="text-center flex flex-wrap justify-center lg:text-left lg:block">
              <h3 className="text-3xl font-semibold">Python</h3>
              <div className="flex flex-wrap w-full justify-center gap-3 lg:w-auto lg:justify-start mt-6 mb-8">
                <div className="badge">Webサイト制作</div>
                <div className="badge">バックエンド開発</div>
              </div>
              <p className="text-secondary">
                Pythonエンジニア。API開発を行っています。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SkilsSection;
