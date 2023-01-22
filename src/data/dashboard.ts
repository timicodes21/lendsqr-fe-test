import { UsersCardProps } from "../components/molecules/cards/UsersCard";

export const dashboardCards: UsersCardProps[] = [
  {
    className: "bg-purple",
    src: "/assets/icons/userss.svg",
    text: "USERS",
    total: 2453,
  },
  {
    className: "bg-blue",
    src: "/assets/icons/active_users.svg",
    text: "ACTIVE USERS",
    total: 12453,
  },
  {
    className: "bg-orange",
    src: "/assets/icons/loan_users.svg",
    text: "USERS WITH LOANS",
    total: 2453,
  },
  {
    className: "bg-error",
    src: "/assets/icons/savings_users.svg",
    text: "USERS WITH SAVINGS",
    total: 102453,
  },
];

export const organizations = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export interface DropdownOption {
  name: string;
  src: string;
}

export const dropdownOptions: DropdownOption[] = [
  {
    name: "View Details",
    src: "/assets/icons/eye.svg",
  },
  {
    name: "Blacklist User",
    src: "/assets/icons/blacklist.svg",
  },
  {
    name: "Activate User",
    src: "/assets/icons/activate.svg",
  },
];
