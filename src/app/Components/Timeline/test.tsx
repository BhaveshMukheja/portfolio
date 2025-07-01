import React from "react";
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

const test = () => {
  return (
    <div>
      <VerticalTimeline>
        {expData.map((item, i) => {
          const IconComponent = iconMap[item.icon];

          return (
            <>
              <VerticalTimelineElement
                className="vertical-timeline-element--work transition-all duration-200 hover:-translate-y-1"
                date={item.time}
                iconStyle={{ background: item["icon-color"], color: "#fff" }}
                icon={IconComponent ? <IconComponent /> : null}
              >
                <div
                  className={`
      [background:linear-gradient(45deg,#172033,theme(colors.slate.800)_50%,#172033)_padding-box,
      conic-gradient(from_var(--border-angle),theme(colors.slate.600/.48)_80%,theme(colors.indigo.500)_86%,
      theme(colors.indigo.300)_90%,theme(colors.indigo.500)_94%,theme(colors.slate.600/.48))_border-box]
      rounded-2xl border border-transparent animate-border`}
                >
                  <img
                    src={item.logo}
                    alt={item.title}
                    className={` absolute ${
                      i === 0 || i === 1 ? "w-24" : "w-16"
                    } right-5`}
                  />

                  <h3 className="vertical-timeline-element-title">
                    {item.title}
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    {item.role}
                  </h4>
                  <p>{item.descrip}</p>
                </div>
              </VerticalTimelineElement>
            </>
          );
        })}
      </VerticalTimeline>
    </div>
  );
};

export default test;
