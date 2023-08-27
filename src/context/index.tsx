import { addWeeks, format, getMonth, getWeekOfMonth, subWeeks } from "date-fns";
import { FC, createContext, useContext, useState } from "react";
import { DateType, Week } from "@/types";
import { getCurrentWeekDates, getDate } from "@/utils";

type TWeeklyPlanContext = {
  currentWeek?: Week;
  getNextWeek?: () => void;
  getPrevWeek?: () => void;
  currentWeekDates?: DateType[];
};

const WeeklyPlanContext = createContext<TWeeklyPlanContext>({});

const WeeklyPlanContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [currentWeek, setCurrentWeek] = useState<Week>({
    id: getWeekOfMonth(getDate()),
    date: getDate(),
    monthName: format(getDate(), "MMMM"),
    datesPlan: [],
  });
  const [currentWeekDates, setCurrentWeekDates] = useState<DateType[]>(
    getCurrentWeekDates(currentWeek.date)
  );

  const getNextWeek = () => {
    const nextWeek = addWeeks(currentWeek.date, 1);
    const dates = getCurrentWeekDates(nextWeek);
    const week = getWeekOfMonth(nextWeek);
    const monthName = format(nextWeek, "MMMM");
    setCurrentWeekDates(dates);

    setCurrentWeek((prevState) => ({
      ...prevState,
      id: week,
      date: nextWeek,
      monthName: monthName,
    }));
  };

  const getPrevWeek = () => {
    const prevWeek = subWeeks(currentWeek.date, 1);
    const dates = getCurrentWeekDates(prevWeek);
    const week = getWeekOfMonth(prevWeek);
    const monthName = format(prevWeek, "MMMM");

    setCurrentWeekDates(dates);
    setCurrentWeek((prevState) => ({
      ...prevState,
      id: week,
      date: prevWeek,
      monthName: monthName,
    }));
  };
  return (
    <WeeklyPlanContext.Provider
      value={{ currentWeek, getNextWeek, getPrevWeek, currentWeekDates }}
    >
      {children}
    </WeeklyPlanContext.Provider>
  );
};

export const usePlanContext = () => useContext(WeeklyPlanContext);
export default WeeklyPlanContextProvider;
