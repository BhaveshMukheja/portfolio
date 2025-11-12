import React from "react";
import SkillSphere from "../3D_Models/SkillSphere/comp";
import SkillBox from "./SkillBox/comp";

const comp = () => {
  return (
    <>
      <div className="md:min-h-screen md:w-screen relative bg-[#EEEFEE] sm:flex sm:justify-center sm:items-center p-6 flex-col">
        <div className="flex items-center justify-center font-rob p-6 py-20 text-black uppercase text-heading-tiny sm:text-lg md:text-4xl lg:text-5xl text-center">
          Skills and Technologies
        </div>

        <div className="flex items-center justify-center overflow-hidden">
          <div className="lg:w-3/5 md:w-full sm:w-full pl-6 sm:flex sm:justify-center sm:items-center sm:text-md text-tiny">
            <SkillBox />
          </div>

          <div className="lg:w-2/5 w-[0%] ">
            {" "}
            <SkillSphere />
          </div>
        </div>
      </div>
    </>
  );
};

export default comp;
