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
  const firstDateOftheWeek = getDateOfTheMonth(
    getDate().setDate(
      getDateOfTheMonth(currentWeekDate) - getDay(currentWeekDate)
    )
  );
  const lastDateOftheWeek = getDateOfTheMonth(
    getDate().setDate(
      getDateOfTheMonth(currentWeekDate) - getDay(currentWeekDate) + 6
    )
  );

  const currentWeekDates: DateType[] = [];
  const array = new Uint32Array(1);

  if (firstDateOftheWeek > lastDateOftheWeek) {
    const daysInMonth = new Date(
      getYear(currentWeekDate),
      getMonth(currentWeekDate),
      0
    ).getDate();
    for (let i = firstDateOftheWeek; i <= daysInMonth; i++) {
      const currentWeekDate = new Date(
        getYear(getDate()),
        getMonth(getDate()),
        i
      );
      currentWeekDates.push({
        id: crypto.getRandomValues(array)[0],
        date: i,
        name: format(currentWeekDate, "EEEE"),
      });
    }
    for (let i = 1; i <= lastDateOftheWeek; i++) {
      currentWeekDates.push({
        id: crypto.getRandomValues(array)[0],
        date: i,
        name: format(
          new Date(getYear(currentWeekDate), getMonth(currentWeekDate), i),
          "EEEE"
        ),
      });
    }
  } else {
    for (let i = firstDateOftheWeek; i <= lastDateOftheWeek; i++) {
      const currentWeekDate = new Date(
        getYear(getDate()),
        getMonth(getDate()),
        i
      );
      currentWeekDates.push({
        id: crypto.getRandomValues(array)[0],
        date: i,
        name: format(currentWeekDate, "EEEE"),
      });
    }
  }
  return currentWeekDates;
};
