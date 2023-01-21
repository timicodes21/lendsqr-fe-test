export const renderBadgeColor = (name: string) => {
  switch (name) {
    case "Inactive":
      return "text-secondary bg-secondary  font-12";
      break;
    case "Pending":
      return "text-warning bg-warning font-12";
      break;
    case "Blacklisted":
      return "text-error bg-error font-12";
      break;
    case "Blacklisted":
      return "text-success bg-success font-12";
      break;
  }
};
