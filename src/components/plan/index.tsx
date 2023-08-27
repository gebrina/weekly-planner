import React from "react";
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
import { getAllPlans } from "@/api";
import { DatesPlan } from "@/types";
import PlanCard from "./card";

const Plan = () => {
  const { currentWeekDates, currentWeek } = usePlanContext();
  const today = getTodayDate(getDate());
  const plans = getAllPlans();

  return (
    <section>
      <section className="flex justify-between gap-3 p-4">
        {currentWeekDates?.map((date) => (
          <div key={date.id} className="w-full group">
            <div className="flex items-center gap-2">
              <span>{date.date}</span>
              <span> {date.name}</span>
              {date.date === today && (
                <span className="text-green-600 px-2 bg-green-100">Today</span>
              )}
            </div>
            {plans?.map((plan: DatesPlan) => (
              <div className="flex flex-col" key={plan.date.toString()}>
                {plan.date == date.id &&
                  plan.plans.map((plan) => (
                    <PlanCard key={plan.id} plan={plan} />
                  ))}
              </div>
            ))}
            <Dialog>
              <DialogTrigger className="w-full mt-2 flex items-center scale-0 text-sm justify-center gap-2 p-2 hover:bg-blue-50 bg-transparent  group-hover:scale-100 text-blue-400">
                <BiPlus />
                Add something
              </DialogTrigger>
              <DialogContent>
                <DialogHeader className="text-xl">
                  <div className="flex items-center">
                    <h1>Add Plan</h1>
                    <h1 className="mx-2 bg-green-100 py-1/2 px-2 text-green-500 text-sm ">
                      {format(currentWeek?.date.getTime() ?? 1, "MMMM")}{" "}
                      {date.date}
                    </h1>
                  </div>
                </DialogHeader>
                <AddPlan date={date.id} />
              </DialogContent>
            </Dialog>
          </div>
        ))}
      </section>
    </section>
  );
};

export default Plan;
