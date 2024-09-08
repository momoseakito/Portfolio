import {
  faFacebook,
  faInstagram,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ContactSection = () => {
  return (
    <div
      id="contact"
      className="container mt-52 mb-20 flex justify-between items-center px-8 md:px-14 lg:px-24 w-full"
    >
      <section className="w-full">
        <h2 className="secondary-title">お問い合わせ</h2>
        <p className="section-paragraph">
          私の経歴が気になる方ご一報ください。即時対応します。
        </p>
        <div className="w-full grid lg:grid-cols-2 gap-8 lg:gap-32 mt-16">
          <div className="space-y-12">
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                お名前
              </label>
              <input
                type="text"
                className="w-full border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                メールアドレス
              </label>
              <input
                type="email"
                className="w-full border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <div>
              <label className="text-white block mb-6 text-xl font-bold">
                メッセージ
              </label>
              <input
                type="text"
                className="w-full border-inputBorder bg-input px-4 py-4"
              />
            </div>
            <button className="px-8 py-3 bg-theme font-bold rounded-lg hover:bg-purple-600 transition-all duration-300">
              送信する
            </button>
          </div>
          <div>
            <p className="text-secondary">0000-1111-2222</p>
            <a href="mailto:aaaaa@gmail.com">mailto:aaaaa@gmail.com</a>
            <div className="mt-20 space-x-6">
              <a href="#">
                <FontAwesomeIcon icon={faSquareXTwitter} className="text-3xl" />
              </a>

              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="text-3xl text-blue-600"
                />
              </a>

              <a href="#">
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-3xl text-pink-400"
                />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactSection;
