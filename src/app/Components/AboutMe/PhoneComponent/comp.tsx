'use client';
import React from 'react';
import { BiLogoGmail, BiMessageRounded } from 'react-icons/bi';
import { FaHome, FaSearch, FaPlusSquare, FaHeart, FaUserCircle, FaRegHeart, FaRegBookmark, FaGithub } from 'react-icons/fa';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa6';
import { FiSend } from 'react-icons/fi';
import { LuMessageCircleMore } from 'react-icons/lu';

const IPhoneInstagramUI: React.FC = () => {
  return (
    <div className="flex items-center justify-center p-4 w-full">
      <div className="relative w-[300px] h-[620px] bg-black rounded-[40px] shadow-2xl border-[6px] border-gray-800 overflow-hidden">
        {/* Top notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-5 bg-gray-800 rounded-b-2xl z-10" />
        
        {/* Screen */}
        <div className="relative z-0 w-full h-full bg-white rounded-[34px] overflow-hidden flex flex-col">
          
          {/* Header */}
          <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
            <div className="text-xl  font-insta">Instagram</div>
            <div className="text-sm flex space-x-2"> <FaRegHeart/> <LuMessageCircleMore/> </div>
          </div>

          {/* Demo post */}
          <div className="flex-1 overflow-y-auto">
            <div className="border-b border-gray-200">
              <div className="flex items-center px-2 py-2">
            <img className="w-8 h-8 rounded-full object-cover" src="assets/bhavesh2.jpg" alt="Rounded avatar"></img>
                <span className="font-semibold text-sm ml-3">bhavesh_mukheja</span>
              </div>
              <div className="w-full h-72 bg-gray-300">
                <img className="w-full h-full object-cover" src="assets/bhavesh2.jpg" alt="Rounded avatar"></img>
              </div>
              <div className="p-2 flex justify-between">
                <div className="flex space-x-4 mb-2">
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
                </div>
            </div>
          </div>

          {/* Bottom Navigation */}
          <div className="flex justify-around items-center py-2 border-t border-gray-200 mb-6">
            <FaLinkedinIn className="text-xl" />
            <FaInstagram className="text-xl" />
            <FaGithub className="text-xl" />
            <BiLogoGmail className="text-xl" />
            <FaUserCircle className="text-xl" />
          </div>
          <div className='absolute bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-black rounded-2xl z-10'></div>
        </div>
      </div>
    </div>
  );
};

export default IPhoneInstagramUI;
