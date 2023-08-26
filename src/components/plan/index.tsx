import { usePlanContext } from "@/context";
import { getDate } from "@/utils";
import { getDate as getTodayDate } from "date-fns";

const Plan = () => {
  const { currentWeekDates } = usePlanContext();
  const today = getTodayDate(getDate());
  return (
    <section>
      <section className="flex justify-between p-4">
        {currentWeekDates?.map((date) => (
          <p className="flex items-center gap-2" key={date.id}>
            <span>{date.date}</span>
            <span> {date.name}</span>
            {date.date === today && (
              <span className="text-green-600 px-2 bg-green-100">Today</span>
            )}
          </p>
        ))}
      </section>
    </section>
  );
};

export default Plan;
