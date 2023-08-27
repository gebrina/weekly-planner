import { FC } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

type AddPlanProps = {
  date: number;
};

const AddPlan: FC<AddPlanProps> = ({ date }) => {
  return (
    <section>
      <form>
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input id="title" />
        </div>
        <div className="space-y-2 mt-4">
          <Label htmlFor="description">Description</Label>
          <Textarea id="description" />
        </div>
        <Button className="bg-green-600 mt-4 w-full hover:bg-green-500">
          Add
        </Button>
      </form>
    </section>
  );
};

export default AddPlan;
