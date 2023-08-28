import { useNavigate } from "react-router-dom";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { BiPlus, BiSkipPrevious } from "react-icons/bi";
import { getAllPlans } from "@/api";
import { DatesPlan } from "@/types";
import PlansCard from "@/components/plans/card";

const Plans: FC = () => {
  const navigate = useNavigate();
  const plans = getAllPlans();
  const navigateToHome = () => navigate("/");

  return (
    <section>
      <header className="shadow flex justify-between items-center bg-white py-3 px-3">
        <Button onClick={navigateToHome} className="" variant={"outline"}>
          <BiSkipPrevious /> Back
        </Button>
        <h1 className="text-3xl font-semibold animate-pulse">All your plans</h1>
        <Button onClick={navigateToHome} variant={"outline"}>
          <BiPlus /> More
        </Button>
      </header>
      <main>
        {plans?.map((plan: DatesPlan) => (
          <PlansCard datePlans={plan} />
        ))}
      </main>
    </section>
  );
};

export default Plans;
