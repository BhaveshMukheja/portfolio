import React from "react";
import SkillSphere from "./SkillSphere/comp";
import SkillBox from "./SkillBox/comp";
import DotGrid from "../DotGrid/dotGrid";

const comp = () => {
  return (
    <div className="h-screen w-screen relative bg-[#EEEFEE] -mt-16">
      {/* <div className="h-screen w-screen absolute -z-1 bg-[#EEEFEE]">
      <DotGrid
      className="z-10"
    dotSize={2}
    gap={50}
    baseColor="#000000ff"
    activeColor="#5227FF"
    proximity={80}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
  </div> */}
      <div className="text-5xl flex items-center justify-center font-rob p-6 pt-24 text-black uppercase">
    Skills and Technologies
      </div>
      <div className="flex items-center justify-center overflow-hidden">
        <div className="w-3/5 pl-6">
          <SkillBox />
        </div>

        <div className="w-2/5">
          {" "}
          <SkillSphere />
        </div>
      </div>
    </div>
  );
};

export default comp;
