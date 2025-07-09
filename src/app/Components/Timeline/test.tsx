import React, { useRef, useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BiHeart } from "react-icons/bi";
import expData from "../../Data/expAndEdu.json";
import { GiCircuitry } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
import { IoPlanet } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";

const iconMap: Record<string, React.ComponentType> = {
  GiCircuitry,
  RiMentalHealthFill,
  IoIosSchool,
  IoPlanet,
  MdEventAvailable,
  FaSchoolFlag,
};

const Test = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div>
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-8 mb-16">
        Experience and Education
      </div>

      <VerticalTimeline>
        {expData.map((item, i) => {
          const IconComponent = iconMap[item.icon];
          const isHovered = hoveredIndex === i;

          return (
            <VerticalTimelineElement
              key={i}
              className="vertical-timeline-element--work transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
              date={item.time}
              iconStyle={{ background: item["icon-color"], color: "#fff" }}
              icon={IconComponent ? <IconComponent /> : null}
            >
              <div
                className=""
                ref={i === 0 ? containerRef : null}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={`w-16 h-16 absolute ${
                    i % 2 === 0 ? "-left-5" : "-right-5"
                  } -top-5 rounded-full transition-all duration-300 ${
                    isHovered ? "scale-[15.5] opacity-70" : "scale-100"
                  }`}
                  style={{ backgroundColor: item["icon-color"] }}
                ></div>

                <div
                  className={`rounded-2xl border border-transparent animate-border relative ${
                    isHovered ? "text-white" : ""
                  }`}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    className={`absolute ${
                      i === 0 || i === 1 ? "w-24" : "w-16"
                    } right-5`}
                  />
                  <h3 className="vertical-timeline-element-title  font-semibold">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle text-gray-500">
                    {item.role}
                  </h4>
                  <p>{item.descrip}</p>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Test;
