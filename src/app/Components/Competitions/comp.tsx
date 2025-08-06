import React from "react";
import CompetitionCard from "./CompetitionCard/comp";
import CompetitonData from "../../Data/competitions.json";

// Define allowed color options for competition cards as a tuple of string literals
const allowedColors = [
  "default",
  "orange",
  "green",
  "blue",
  "purple",
  "pink",
  "yellow",
] as const;

// Create a type from the allowedColors array values
type AllowedColor = (typeof allowedColors)[number];

// Type guard function to check if a string is an allowed color
function isAllowedColor(color: string): color is AllowedColor {
  return allowedColors.includes(color as AllowedColor);
}

const comp = () => {
  return (
    // Main container with minimum height of viewport
    <div className="min-h-screen">
      {/* Competition section header */}
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 mb-16 text-white uppercase">
        Competitions
      </div>
      
      {/* Container for competition cards with horizontal spacing */}
      <div className="flex space-x-6 justify-center items-center">
        {/* Map through competition data to render cards */}
        {CompetitonData.map((item, index) => {
          // Validate and sanitize card color, fallback to "default" if invalid
          const safeColor = isAllowedColor(item.card_color)
            ? item.card_color
            : "default";
            
          return (
            <CompetitionCard
              key={index} // Unique key for React's reconciliation
              data={{ ...item, card_color: safeColor }} // Pass competition data with safe color
            />
          );
        })}
      </div>
    </div>
  );
};

export default comp;