export function formatLeetCodeCalendar(calendarString: string) {
  const parsed = JSON.parse(calendarString);

  return Object.entries(parsed).map(([timestamp, count]) => ({
    date: new Date(Number(timestamp) * 1000),
    count: Number(count),
  }));
}