"use client"
import React, { useRef, useState } from "react";

// Timeline component library
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// Icons used for timeline nodes
// import { BiHeart } from "react-icons/bi";
import { GiCircuitry } from "react-icons/gi";
import { RiMentalHealthFill } from "react-icons/ri";
import { IoIosSchool } from "react-icons/io";
import { IoPlanet } from "react-icons/io5";
import { MdEventAvailable } from "react-icons/md";
import { FaSchoolFlag } from "react-icons/fa6";

// Timeline data (experience + education)
import expData from "../../Data/expAndEdu.json";
import Image from "next/image";

// Map of string keys to React icon components used in timeline
const iconMap: Record<string, React.ComponentType> = {
  GiCircuitry,
  RiMentalHealthFill,
  IoIosSchool,
  IoPlanet,
  MdEventAvailable,
  FaSchoolFlag,
};

const Comp = () => {
  const containerRef = useRef<HTMLDivElement | null>(null); // Optional ref for the first element
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null); // Index of the currently hovered card

  return (
    <div className="min-h-screen md:p-6">
      {/* Title */}
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-8 mb-16 uppercase text-center text-heading-tiny sm:text-lg md:text-4xl lg:text-5xl">
        Experience and Education
      </div>

      {/* Timeline starts */}
      <VerticalTimeline lineColor="transparent">
        {expData.map((item, i) => {
          const IconComponent = iconMap[item.icon]; // Get icon component from iconMap
          const isHovered = hoveredIndex === i;      // Track if the current element is being hovered

          return (
            <VerticalTimelineElement
              key={i}
              date={item.time}
              iconStyle={{ background: item["icon-color"], color: "#fff" }}
              icon={IconComponent ? <IconComponent /> : null}
              contentStyle={{
                border: `2px solid ${item["icon-color"]}`,
                borderRadius: "5px",
                padding: "0px",
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${item["icon-color"]}`,
              }}
              className="vertical-timeline-element--work transition-all duration-200 hover:-translate-y-1 relative overflow-hidden"
            >
              {/* Timeline card container */}
              <div
                className="relative overflow-hidden p-6"
                ref={i === 0 ? containerRef : null} // Assign ref only to the first card
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Circular expanding background when hovered */}
                <div
                  className={`w-14 h-14 absolute z-0 ${
                    i % 2 === 0 ? "-left-5" : "-right-5"
                  } -top-5 rounded-full transition-all duration-400 opacity-100 ${
                    isHovered ? "scale-[20]" : "scale-100"
                  }`}
                  style={{ backgroundColor: item["icon-color"] }}
                ></div>

                {/* Actual content of the card */}
                <div className={`relative text-tiny  z-10 ${isHovered ? "text-white" : ""}`}>
                  {/* Optional logo (black or white depending on hover state) */}
                  {item.logo?.trim() ? (
                    <Image
                      src={isHovered ? item["logo-white"] : item.logo}
                      alt={item.title}
                      className={`absolute z-20 transition-all duration-400 ${
                        i === 0 || i === 1 ? "w-24" : "w-16"
                      } right-5`}
                      width={100}
                      height={50}
                    />
                  ) : null}

                  {/* Main title */}
                  <h3 className="vertical-timeline-element-title font-semibold w-[50%] sm:w-[100%]">
                    {item.title}
                  </h3>

                  {/* Subtitle or role */}
                  <h4
                    className={`vertical-timeline-element-subtitle ${
                      isHovered ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {item.role}
                  </h4>

                  {/* Description */}
                  <div className="w-[80%] mt-4">{item.descrip}</div>
                </div>
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default Comp;
