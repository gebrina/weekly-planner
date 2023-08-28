import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { DatesPlan, Plan } from "@/types";
import { FC } from "react";
import { BiTrash } from "react-icons/bi";
import { getAllPlans, removePlan } from "@/api";
import { usePlanContext } from "@/context";

type PlanCardProps = {
  plan: Plan;
  planDate: DatesPlan;
};

const PlanCard: FC<PlanCardProps> = ({ plan, planDate }) => {
  const { setPlans } = usePlanContext();
  const handleDeletePlan = () => {
    removePlan({ planId: plan.id ?? 0, dateId: planDate?.date });
    setPlans && setPlans(getAllPlans());
  };

  return (
    <Card draggable className="my-2">
      <CardHeader>
        <CardTitle className="capitalize text-center">{plan.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{plan.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <BiTrash
          className="text-red-600 cursor-pointer hover:text-red-700"
          onClick={() => handleDeletePlan()}
        />
      </CardFooter>
    </Card>
  );
};

export default PlanCard;
