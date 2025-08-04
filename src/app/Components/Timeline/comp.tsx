"use client"
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
    <div className="min-h-screen ">
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-8 mb-16 uppercase">
        Experience and Education
      </div>

      <VerticalTimeline lineColor="transparent">
        {expData.map((item, i) => {
          const IconComponent = iconMap[item.icon];
          const isHovered = hoveredIndex === i;

          return (
            <VerticalTimelineElement
              contentStyle={{
                border: `2px solid ${item["icon-color"]}`,
                borderRadius: "5px",
                padding: "0px",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${item["icon-color"]}`,
              }}
              key={i}
              className="vertical-timeline-element--work transition-all duration-200 hover:-translate-y-1 relative overflow-hidden "
              date={item.time}
              iconStyle={{ background: item["icon-color"], color: "#fff" }}
              icon={IconComponent ? <IconComponent /> : null}
            >
              <div
                className="relative overflow-hidden p-6"
                ref={i === 0 ? containerRef : null}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                      <div
                    className={`w-14 h-14 absolute z-0 ${
                      i % 2 === 0 ? "-left-5" : "-right-5"
                    } -top-5 rounded-full transition-all duration-400 opacity-100 ${
                      isHovered ? "scale-[20]" : "scale-100"
                    }`}
                    style={{ backgroundColor: item["icon-color"] }}
                  ></div>

                <div
                  className={`relative z-10  ${
                    isHovered ? "text-white" : ""
                  }`}
                >
            

                  {item.logo?.trim() ? (
                    <img

                      src= {isHovered?item["logo-white"]:item.logo}
                      alt={item.title}
                      className={`absolute z-20 transition-all duration-400 ${
                        i === 0 || i === 1 ? "w-24" : "w-16"
                      } right-5`}
                    />
                  ) : null}
                  <h3 className="vertical-timeline-element-title  font-semibold">
                    {item.title}
                  </h3>
                  <h4
                    className={`vertical-timeline-element-subtitle  ${
                      isHovered ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </h4>
                  <p className="w-[80%]">{item.descrip}</p>
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
