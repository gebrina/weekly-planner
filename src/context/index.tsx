import { addWeeks, format, getWeekOfMonth, subWeeks } from "date-fns";
import { FC, createContext, useContext, useState } from "react";
import { DateType, Week } from "@/types";
import { getCurrentWeekDates, getDate } from "@/utils";
import { getAllPlans } from "@/api";

type TWeeklyPlanContext = {
  currentWeek?: Week;
  getNextWeek?: () => void;
  getPrevWeek?: () => void;
  resetCurrentWeek?: () => void;
  currentWeekDates?: DateType[];
  plans?: any[];
  setPlans?: Function;
};

const WeeklyPlanContext = createContext<TWeeklyPlanContext>({});

const WeeklyPlanContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const currentWeekData = {
    id: getWeekOfMonth(getDate()),
    date: getDate(),
    monthName: format(getDate(), "MMMM"),
    datesPlan: [],
  };
  const [currentWeek, setCurrentWeek] = useState<Week>(currentWeekData);
  const [plans, setPlans] = useState(getAllPlans());

  const [currentWeekDates, setCurrentWeekDates] = useState<DateType[]>(
    getCurrentWeekDates(currentWeek.date)
  );

  const resetCurrentWeek = () => {
    setCurrentWeek(currentWeekData);
    setCurrentWeekDates(getCurrentWeekDates(currentWeekData.date));
  };
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
      value={{
        currentWeek,
        getNextWeek,
        getPrevWeek,
        resetCurrentWeek,
        currentWeekDates,
        plans,
        setPlans,
      }}
    >
      {children}
    </WeeklyPlanContext.Provider>
  );
};

export const usePlanContext = () => useContext(WeeklyPlanContext);
export default WeeklyPlanContextProvider;
