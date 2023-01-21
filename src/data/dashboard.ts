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
