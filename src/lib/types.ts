export interface NavItems {
  path: string;
  name: string;
  id: number;
}

export interface DropdownContent {
  subject: string;
  badge: string;
  id: string;
}

export interface CtaItems {
  icon: string;
  id: string;
}

export interface AccItems {
  title: string;
  id: string;
}

type Emp_Data = {
  exp: string;
  city: string;
  location: string;
}
export interface CardData {
  name: string;
  country: string;
  edu: string;
  tag: string;
  emp_data: Emp_Data;
  initial: string;
  id: string;
}