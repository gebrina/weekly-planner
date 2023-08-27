import {
  format,
  getDate as getDateOfTheMonth,
  getDay,
  getMonth,
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
    const dateforId = startDateofWeek;
    dateforId.setHours(0);
    dateforId.setMinutes(0);
    dateforId.setSeconds(0);
    dateforId.setMilliseconds(0);
    dates.push({
      id: dateforId.getTime(),
      date: startDateofWeek.getDate(),
      name: format(startDateofWeek, "EEEE"),
    });
    startDateofWeek.setDate(startDateofWeek.getDate() + 1);
  }
  return dates;
};

export const getRandomNumbers = () => {
  const unitArray = new Uint32Array(1);
  const randomNumber = crypto.getRandomValues(unitArray);
  return randomNumber;
};
