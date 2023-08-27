import { FC, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { DatesPlan, Plan } from "@/types";
import { addPlan, getAllPlans } from "@/api";
import { usePlanContext } from "@/context";

type AddPlanProps = {
  date: number;
};

const AddPlan: FC<AddPlanProps> = ({ date }) => {
  const { setPlans } = usePlanContext();
  const [plan, setPlan] = useState<Plan>({ id: 0, title: "", description: "" });

  const handleSubmit = (event: React.MouseEvent<HTMLFormElement>) => {
    event.preventDefault();
    const array = new Uint16Array(1);
    const randomId = crypto.getRandomValues(array);
    plan.id = Number(randomId);
    const datePlan: DatesPlan = { date, plans: [plan] };
    addPlan(datePlan);
    setPlans && setPlans(getAllPlans());

    setPlan({ title: "", description: "" });
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            required
            value={plan.title}
            onChange={(e) =>
              setPlan((prevPlan) => ({ ...prevPlan, title: e.target.value }))
            }
            id="title"
          />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="description">Description</Label>
          <Textarea
            value={plan.description}
            onChange={(e) =>
              setPlan((prevPlan) => ({
                ...prevPlan,
                description: e.target.value,
              }))
            }
            id="description"
          />
        </div>
        <Button className="bg-green-600 mt-4 w-full hover:bg-green-500">
          Add
        </Button>
      </form>
    </section>
  );
};

export default AddPlan;
