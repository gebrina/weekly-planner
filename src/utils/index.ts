import {
  format,
  getDate as getDateOfTheMonth,
  getDay,
  getYear,
  getMonth,
  getDaysInMonth,
} from "date-fns";
import { DateType } from "@/types";

export const getDate = (date?: Date) => {
  if (typeof date === "undefined") return new Date();

  return date;
};

export const getCurrentWeekDates = (currentWeekDate: Date): DateType[] => {
  let startDateofWeek = new Date(
    currentWeekDate.setDate(
      getDateOfTheMonth(currentWeekDate) - getDay(currentWeekDate) + 1
    )
  );
  const endDateofWeek = new Date(
    currentWeekDate.setDate(
      getDateOfTheMonth(currentWeekDate) - getDay(currentWeekDate) + 5
    )
  );
  const dates: DateType[] = [];
  while (startDateofWeek <= endDateofWeek) {
    dates.push({
      id: startDateofWeek.getTime(),
      date: startDateofWeek.getDate(),
      name: format(startDateofWeek, "EEEE"),
    });
    startDateofWeek.setDate(startDateofWeek.getDate() + 1);
  }
  return dates;
};
