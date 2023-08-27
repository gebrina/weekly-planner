import { format, getDate as getTodayDate } from "date-fns";
import { usePlanContext } from "@/context";
import { getDate } from "@/utils";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { BiPlus } from "react-icons/bi";
import AddPlan from "../add-plan";

const Plan = () => {
  const { currentWeekDates } = usePlanContext();
  const today = getTodayDate(getDate());
  return (
    <section>
      <section className="flex justify-between gap-3 p-4">
        {currentWeekDates?.map((date) => (
          <div key={date.id} className="w-full group">
            <p className="flex items-center gap-2">
              <span>{date.date}</span>
              <span> {date.name}</span>
              {date.date === today && (
                <span className="text-green-600 px-2 bg-green-100">Today</span>
              )}
            </p>
            <Dialog>
              <DialogTrigger className="w-full">
                <button className="w-full mt-2 flex items-center scale-0 text-sm justify-center gap-2 p-2 hover:bg-blue-50 bg-transparent  group-hover:scale-100 text-blue-400">
                  <BiPlus />
                  Add something
                </button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="text-xl">
                  <div className="flex items-center">
                    <h1>Add Plan</h1>
                    <h1 className="mx-2 bg-green-100 py-1/2 px-2 text-green-500 text-sm ">
                      {format(date.id, "MMMM")} {date.date}
                    </h1>
                  </div>
                </DialogHeader>
                <DialogDescription>
                  <AddPlan date={date.id} />
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Plan;
