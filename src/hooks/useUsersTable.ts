import { useState } from "react";

export const useUsersTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [showForm, setShowForm] = useState(false);
  const [id, setId] = useState(0);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropId, setDropId] = useState(0);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleShowForm = (index: number) => {
    setShowForm(!showForm);
    setId(index);
  };

  const handleShowDropdown = (index: number) => {
    setShowDropdown(!showDropdown);
    setDropId(index);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return {
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    showForm,
    handleShowForm,
    id,
    dropId,
    showDropdown,
    handleShowDropdown,
  };
};
