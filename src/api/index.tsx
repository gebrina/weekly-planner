import { DatesPlan, Plan } from "@/types";

export const addPlan = (plan: DatesPlan) => {
  const savedPlans = JSON.parse(localStorage.getItem("plans") ?? "[]");
  const planIndex = savedPlans?.findIndex(
    (plans: DatesPlan) => plans.date === plan.date
  );
  let updatedPlans = [];
  if (planIndex != -1) {
    const currentPlan = savedPlans[planIndex];
    const currentPlanLength = currentPlan.plans.length;
    currentPlan.plans[currentPlanLength] = plan.plans[0];
    updatedPlans = savedPlans;
  } else {
    updatedPlans = [...savedPlans, plan];
  }
  const allPlans = JSON.stringify(updatedPlans);
  localStorage.setItem("plans", allPlans ?? "[]");
};

export const getAllPlans = () => {
  const plans = JSON.parse(localStorage.getItem("plans") ?? "[]");
  return plans;
};

export const removePlan = (plan: Plan) => {
  const savedPlans = JSON.parse(localStorage.getItem("plans") ?? "");
};
