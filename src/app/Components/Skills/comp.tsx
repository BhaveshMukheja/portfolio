import React from "react";
import SkillSphere from "./SkillSphere/comp";
import SkillBox from "./SkillBox/comp";
import TrueFocus from "../TrueFocus/comp";
const comp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-900 to-indigo-900 ">
      <div className="text-5xl flex items-center justify-center font-rob  p-6 text-white uppercase">
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
