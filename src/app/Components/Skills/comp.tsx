import React from "react";
import SkillSphere from "./SkillSphere/comp";
import SkillBox from "./SkillBox/comp";
import TrueFocus
 from "../TrueFocus/comp";
const comp = () => {
  return (
    <div className="h-screen">
      <div className="text-5xl flex items-center justify-center font-rob font-semibold p-6 mt-8">
      <TrueFocus 
sentence="Skills and Technologies"
manualMode={false}
blurAmount={2.5}
borderColor="blue"
animationDuration={1}
pauseBetweenAnimations={1}
/>
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
