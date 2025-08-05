'use client'; // This ensures the component runs on the client side in a Next.js app

import React from 'react';

// Functional React component to display today's date
const TodayDate: React.FC = () => {
  // Create a new Date object representing the current date and time
  const today = new Date();

  // Define formatting options for the date
  const options: Intl.DateTimeFormatOptions = {
    month: 'long',   // Full month name (e.g., August)
    day: 'numeric',  // Day of the month (e.g., 6)
    year: 'numeric', // Full year (e.g., 2025)
  };

  // Format the date using U.S. English locale
  const formattedDate = today.toLocaleDateString('en-US', options);

  // Render the formatted date in a small, gray text span
  return <div className="text-xs text-gray-500">{formattedDate}</div>;
};

export default TodayDate;
