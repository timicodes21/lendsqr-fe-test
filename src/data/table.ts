interface Column {
  id: string;
  label: string;
  minWidth?: number;
  align?: "right" | "center";
}

export const columns: readonly Column[] = [
  { id: "org", label: "ORGANIZATION", minWidth: 180, align: "right" },
  { id: "userName", label: "USERNAME", minWidth: 70, align: "right" },
  { id: "email", label: "EMAIL", minWidth: 70, align: "right" },
  { id: "phone", label: "PHONE NUMBER", minWidth: 280, align: "right" },
  { id: "date", label: "DATE JOINED", minWidth: 180, align: "right" },
  { id: "status", label: "STATUS", minWidth: 150, align: "right" },
];
