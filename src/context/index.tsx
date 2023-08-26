import { addWeeks, format, getWeekOfMonth, subWeeks } from "date-fns";
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
    const tempWeek = addWeeks(currentWeek.date, 1);
    setCurrentWeek((prevState) => ({
      ...prevState,
      monthName: format(tempWeek, "MMMM"),
      date: tempWeek,
      id: getWeekOfMonth(tempWeek),
    }));
    const weekDates = getCurrentWeekDates(tempWeek);
    setCurrentWeekDates(weekDates);
  };

  const getPrevWeek = () => {
    const tempWeek = subWeeks(currentWeek.date, 1);
    setCurrentWeek((prevState) => ({
      ...prevState,
      monthName: format(tempWeek, "MMMM"),
      date: tempWeek,
      id: getWeekOfMonth(tempWeek),
    }));
    const weekDates = getCurrentWeekDates(tempWeek);
    setCurrentWeekDates(weekDates);
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
