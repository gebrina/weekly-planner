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

export const removePlan = ({
  planId,
  dateId,
}: {
  planId: number;
  dateId: number;
}) => {
  const savedPlans = JSON.parse(localStorage.getItem("plans") ?? "[]");
  const currentPlanIndex = savedPlans.findIndex(
    (planDate: DatesPlan) => planDate.date == dateId
  );

  if (currentPlanIndex !== -1) {
    const planTobeDelete = savedPlans[currentPlanIndex];
    const filterdPlans = planTobeDelete.plans.filter(
      (plan: Plan) => plan.id !== planId
    );
    planTobeDelete.plans = filterdPlans;
    savedPlans[currentPlanIndex] = planTobeDelete;
    const strigifiedSavedPlans = JSON.stringify(savedPlans ?? []);
    localStorage.setItem("plans", strigifiedSavedPlans);
  }
};
