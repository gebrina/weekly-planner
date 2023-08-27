import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { Button } from "../ui/button";
import { usePlanContext } from "@/context";

const Header = () => {
  const { currentWeek, getNextWeek, getPrevWeek } = usePlanContext();

  return (
    <header className="bg-white shadow">
      <section className="flex justify-between px-3 items-center">
        <section className="flex items-center text-md font-semibold gap-4">
          <BiSkipPrevious onClick={getPrevWeek} className="nav-button" />
          <p>
            {currentWeek?.monthName}
            <span className="text-md bg-green-100 py-1 px-2 text-green-600 ml-2">
              Week {currentWeek?.id}
            </span>
          </p>
          <BiSkipNext onClick={getNextWeek} className="nav-button" />
        </section>
        <section className="flex items-center justify-around gap-4 py-3">
          <Button variant={"outline"}>All items</Button>
          <Button variant={"outline"}>Today</Button>
        </section>
      </section>
    </header>
  );
};

export default Header;
