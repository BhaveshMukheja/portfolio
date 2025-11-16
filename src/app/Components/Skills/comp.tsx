import React from "react";
import SkillSphere from "../3D_Models/SkillSphere/comp";
import SkillBox from "./SkillBox/comp";

const comp = () => {
  return (
    <>
      <div className="min-h-screen w-screen relative bg-[#EEEFEE] flex flex-col space-y-6 md:space-y-16 p-4 md:p-6">
        <div className="flex items-center justify-center font-rob text-black uppercase text-md sm:text-lg md:text-3xl lg:text-5xl md:pt-8 text-center">
          Skills and Technologies
        </div>
        

        <div className="flex md:flex-col lg:flex-row items-center justify-center overflow-hidden">


          <div className="w-full flex justify-center items-center ">
            <SkillBox />
          </div>

          <div className=" hidden lg:block lg:w-2/5 ">
            {" "}
            <SkillSphere />
          </div>
        </div>
      </div>
    </>
  );
};

export default comp;
