"use client";
import React from "react";
import { BiMessageRounded } from "react-icons/bi";
import {
  FaHeart,
  FaRegHeart,
  FaRegBookmark,
  FaGithub,
  FaEnvelope
} from "react-icons/fa";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { IoIosMore } from "react-icons/io";
import { LuMessageCircleMore } from "react-icons/lu";

const TodayDate: React.FC = () => {
  const today = new Date();
  const options: Intl.DateTimeFormatOptions = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = today.toLocaleDateString("en-US", options);

  return (
    <div className="text-xs text-gray-500">
      {formattedDate}
    </div>
  );
};

const SocialIconsCard = () => {
  return (
    <div className="flex items-center justify-center p-1 gap-6 mb-3   border-t border-gray-200">
      <a
        href="https://www.instagram.com/bhavesh_mukheja/" target="blank"
        className="group w-[42px] h-[42px] rounded-full flex items-center justify-center transition duration-300 hover:bg-[#d62976] active:scale-90"
      >
        <FaInstagram className="w-5 h-5 group-hover:animate-slidein" />
      </a>

      <a
        href="mailto:bhavesh.bm.3000@gmail.com"
        className="group w-[42px] h-[42px] rounded-full flex items-center justify-center transition duration-300 hover:bg-[#f2a60c] active:scale-90"
      >
        <FaEnvelope className="w-5 h-5 group-hover:animate-slidein" />
      </a>

      <a
        href="https://www.linkedin.com/in/bhavesh-mukheja-1925b2239/" target="blank"
        className="group w-[42px] h-[42px] rounded-full flex items-center justify-center transition duration-300 hover:bg-[#0072b1] active:scale-90"
      >
        <FaLinkedinIn className="w-5 h-5 group-hover:animate-slidein" />
      </a>

      <a
        href="https://github.com/BhaveshMukheja" target="blank"
        className="group w-[42px] h-[42px] rounded-full flex items-center justify-center transition duration-300 hover:bg-[#501DAF] active:scale-90"
      >
        <FaGithub className="w-5 h-5 group-hover:animate-slidein" />
      </a>
    </div>
  );
};

const IPhoneInstagramUI: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full animate-wave">
      <div className="relative w-[300px] h-[620px] bg-black rounded-[40px] shadow-2xl border-[6px] border-gray-800 overflow-hidden">
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-b-2xl z-10" />

        {/* Screen */}
        <div className="relative z-0 w-full h-full bg-white rounded-[34px] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <div className="text-xl  font-insta">Instagram</div>
            <div className="text-sm flex space-x-2">
              {" "}
              <FaRegHeart /> <LuMessageCircleMore />{" "}
            </div>
          </div>

          {/* Demo post */}
          <div className="flex-1 overflow-y-auto">
            <div className="border-b border-gray-200">
              <div>
                <div className="flex items-center px-2 py-2">
                  <img
                    className="w-8 h-8 rounded-full object-cover"
                    src="assets/yoyo5.jpg"
                    alt="Rounded avatar"
                  ></img>
                  <span className="font-semibold text-sm ml-3">
                    bhavesh_mukheja
                  </span>

                  <span className="absolute right-7">
                    <IoIosMore />
                  </span>
                </div>
              </div>
              <div className="w-full h-72 bg-gray-300">
                <img
                  className="w-full h-full object-cover"
                  src="assets/insta.jpeg"
                  alt="Rounded avatar"
                ></img>
              </div>
              <div className="p-2 flex justify-between">
                <div className="flex space-x-4 ">
                  <FaHeart className="text-xl text-red-500" />
                  <BiMessageRounded className="text-xl scale-x-[-1]" />
                  <FiSend className="text-xl" />
                </div>
                <div>
                  <FaRegBookmark className="text-xl " />
                </div>
              </div>
              <div className="text-sm p-2">
                <span className="font-bold">bhavesh_mukheja </span>
                Let's connect. You can find my contact links below.
                <p className="text-xs text-gray-500 mt-1">View all 7 comments</p>
                <p className="text-xs text-gray-500 mt-1"></p>
                <TodayDate/>
              </div>
            </div>
          </div>

          <SocialIconsCard />

          <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-black rounded-2xl z-10"></div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneInstagramUI;
