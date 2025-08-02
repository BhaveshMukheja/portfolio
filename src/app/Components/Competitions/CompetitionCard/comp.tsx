"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelCard from "../PixelCard/comp";

interface CompetitonsCardProps {
  key: number;
  data: {
    title: string;
    year: string;
    descrip: string;
    medal: string;
    card_color:  "default" | "orange" | "green" | "blue" | "purple" | "pink" | "yellow";
  };
}

const ProjectCard: React.FC<CompetitonsCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false);


  return (
    <div>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        <PixelCard variant={data.card_color}>
          <div className="w-full h-full flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {!isHovered ? (
                <motion.div
                  key="title"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={`absolute text-xl font-semibold text-white text-center p-2 font-rob`}
                >
                  {data.title}
                </motion.div>
              ) : (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute flex flex-col justify-center items-center text-center"
                >
                  <div className="text-lg my-1 text-white font-semibold" >{data.descrip}</div>
                  <div className="text-md my-1 text-white">
                    <span className="font-semibold ">Rank:</span> {data.medal}
                  </div>
                  <div className="text-md my-1 text-gray-300">{data.year}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </PixelCard>
      </div>
    </div>
  );
};

export default ProjectCard;
