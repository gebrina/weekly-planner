export type DateType = {
  id: number;
  date: number;
  name: string;
};

export type DatesPlan = {
  date: number;
  plans: Plan[];
};

export type Plan = {
  id?: number;
  title: string;
  description?: string;
};

export type Week = {
  id?: number;
  monthName: string;
  date: Date;
  datesPlan?: DateType[];
};
