export type DateType = {
  id: number;
  date: number;
  name: string;
};

export type Task = {
  id?: number;
  task: string;
  description?: string;
};

export type DatePlan = {
  id?: number;
  date: number;
  name: string;
  tasks?: Task[];
};

export type Week = {
  id?: number;
  monthName: string;
  date: Date;
  datesPlan?: DatePlan[];
};
