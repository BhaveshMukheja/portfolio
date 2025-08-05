"use client"; // Ensures this component is rendered only on the client side

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PixelCard from "../../Cards/PixelCard/comp"; // Reusable card component with pixel-style design

// Type definition for props expected by this component
interface CompetitonsCardProps {
  key: number; // Used when rendering multiple cards
  data: {
    title: string;                         // Title of the competition
    year: string;                          // Year of the competition
    descrip: string;                       // Description or details
    medal: string;                         // Rank or award won
    card_color:                            // Theme color for the card
      | "default"
      | "orange"
      | "green"
      | "blue"
      | "purple"
      | "pink"
      | "yellow";
  };
}

// Functional component definition
const CompetitionCard: React.FC<CompetitonsCardProps> = ({ data }) => {
  const [isHovered, setIsHovered] = useState(false); // Track hover state to toggle views

  return (
    <div>
      {/* Outer div handling hover interaction */}
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative"
      >
        {/* PixelCard provides stylized border/background depending on variant */}
        <PixelCard variant={data.card_color}>
          <div className="w-full h-full flex items-center justify-center relative">
            {/* AnimatePresence allows animating components when they enter/exit */}
            <AnimatePresence mode="wait">
              {/* If not hovered, show title */}
              {!isHovered ? (
                <motion.div
                  key="title" // unique key for animation switching
                  initial={{ opacity: 0, y: 10 }}   // start hidden and slightly below
                  animate={{ opacity: 1, y: 0 }}    // animate in
                  exit={{ opacity: 0, y: -10 }}     // animate out on hover
                  transition={{ duration: 0.2 }}    // animation speed
                  className="absolute text-xl font-semibold text-white text-center p-2"
                >
                  {data.title}
                </motion.div>
              ) : (
                // If hovered, show full details (description, rank, year)
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.4 }}
                  className="absolute flex flex-col justify-center items-center text-center"
                >
                  <div className="text-lg my-1 text-white font-semibold">
                    {data.descrip}
                  </div>
                  <div className="text-md my-1 text-white">
                    <span className="font-semibold">Rank:</span> {data.medal}
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

export default CompetitionCard;
