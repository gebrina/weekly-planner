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
import { removePlan } from "@/api";

type PlanCardProps = {
  plan: Plan;
  planDate?: DatesPlan;
};

const PlanCard: FC<PlanCardProps> = ({ plan, planDate }) => {
  const handleDeletePlan = () => {
    removePlan(planDate);
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
