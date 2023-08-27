import { Plan } from "@/types";
import { FC } from "react";

type PlanCardProps = {
  plan: Plan;
};
const PlanCard: FC<PlanCardProps> = ({ plan }) => {
  return <div>PlanCard</div>;
};

export default PlanCard;
