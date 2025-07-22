import React from "react";
import CompetitionCard from "./CompetitionCard/comp";
import CompetitonData from "../../Data/competitions.json";

const allowedColors = [
  "default",
  "orange",
  "green",
  "blue",
  "purple",
  "pink",
  "yellow",
] as const;

type AllowedColor = (typeof allowedColors)[number];

function isAllowedColor(color: string): color is AllowedColor {
  return allowedColors.includes(color as AllowedColor);
}

const comp = () => {
  return (
    <div className="min-h-screen">
      <div className="flex items-center justify-center text-5xl font-rob p-8 mt-24 mb-16 text-white uppercase">
        Competitions{" "}
      </div>
      <div className="flex space-x-6 justify-center items-center">
        {CompetitonData.map((item, index) => {
          const safeColor = isAllowedColor(item.card_color)
            ? item.card_color
            : "default";
          return (
            <CompetitionCard
              key={index}
              data={{ ...item, card_color: safeColor }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default comp;
