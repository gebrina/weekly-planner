import { FC } from "react";
import { format, getDate } from "date-fns";
import {
  Card,
  CardHeader,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import { DatesPlan, Plan } from "@/types";
import { BiCalendar } from "react-icons/bi";

type PlanCardProps = {
  datePlans: DatesPlan;
};
const PlansCard: FC<PlanCardProps> = ({ datePlans }) => {
  return (
    <section className="text-center border-2 border-t-green-200 py-3 flex flex-col gap-4 mt-5">
      <h1
        className="text-2xl flex items-center px-2 py-1 rounded-sm shadow space-x-3
       bg-green-200
       text-green-600
       w-max 
       mx-auto
      "
      >
        <span>
          <BiCalendar />
        </span>
        <span>{getDate(datePlans.date)}</span>
        <span>{format(datePlans.date, "EEEE")}</span>
        <span> {format(datePlans.date, "MMMM")}</span>
      </h1>
      <section className="flex flex-wrap justify-evenly">
        {datePlans.plans.map((plan: Plan) => (
          <Card>
            <CardHeader className="">
              <CardTitle>{plan.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{plan.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </section>
    </section>
  );
};

export default PlansCard;
