import { FC, createContext, useContext } from "react";

const WeeklyPlanContext = createContext<any>(null);

const WeeklyPlanContextProvider: FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return (
    <WeeklyPlanContext.Provider value={{}}>
      {children}
    </WeeklyPlanContext.Provider>
  );
};

export const usePlanContext = () => useContext(WeeklyPlanContext);
export default WeeklyPlanContextProvider;
