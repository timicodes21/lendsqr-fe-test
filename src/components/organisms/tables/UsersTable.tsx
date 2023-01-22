import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { columns } from "../../../data/table";
import {
  Box,
  CircularProgress,
  Grid,
  LinearProgress,
  Typography,
} from "@mui/material";
import { RiArrowUpSFill, RiArrowDownSFill } from "react-icons/ri";
import { MdKeyboardArrowRight } from "react-icons/md";
import {
  firstLetter,
  formatToCurrency,
  sliceText,
} from "../../../utils/formatter";
import { renderBadgeColor } from "../../../utils/renderBadge";
import { User } from "../../../types/response";
import Moment from "react-moment";
import { useUsersTable } from "../../../hooks/useUsersTable";
import FilterForm from "../form/FilterForm";
import TableDropdown from "../../molecules/wrappers/TableDropdown";

interface IProps {
  users: User[];
  loading?: boolean;
}

const UsersTable: React.FC<IProps> = ({ users, loading }) => {
  const {
    rowsPerPage,
    page,
    handleChangePage,
    handleChangeRowsPerPage,
    showForm,
    id,
    handleShowForm,
    dropId,
    handleShowDropdown,
    showDropdown,
  } = useUsersTable();

  return (
    <Paper
      sx={{
        maxWidth: "100%",
        overflow: "hidden",
        boxShadow: "3px 5px 20px rgba(0, 0, 0, 0.04)",
        background: "#FFF",
        borderRadius: 4,
      }}
    >
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  sx={{
                    background: "#FFFFFF",
                    py: 2,
                  }}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  <Box className="flex items-center relative">
                    <div className="">
                      <Typography
                        className="font-12 font-600 text-secondary"
                        sx={{ mr: 1 }}
                      >
                        {column.label}
                      </Typography>
                    </div>
                    <div
                      className="pointer "
                      onClick={() => handleShowForm(index)}
                    >
                      <img src="/assets/icons/sort.svg" />
                    </div>

                    <FilterForm show={showForm && !loading && id === index} />
                  </Box>
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {!loading &&
              users
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                      <TableCell align="left">
                        <Typography className="font-14 font-400 text-secondary">
                          {firstLetter(item?.orgName)}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography className="font-14 font-400 text-secondary">
                          {item?.userName}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography className="font-14 font-400 text-secondary">
                          {item?.email}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography className="font-14 font-400 text-secondary">
                          {item?.phoneNumber}
                        </Typography>
                      </TableCell>
                      <TableCell align="left">
                        <Typography className="font-14 font-400 text-secondary">
                          <Moment format="MMM DD, YYYY HH:MM A">
                            {item?.lastActiveDate}
                          </Moment>
                        </Typography>
                      </TableCell>
                      <TableCell
                        align="left"
                        className="font-14 font-400 text-secondary flex justify-between items-center relative"
                      >
                        <Typography
                          component="span"
                          sx={{ borderRadius: "100px", py: 1, px: 2 }}
                          className={renderBadgeColor("Inactive")}
                        >
                          Inactive
                        </Typography>
                        <div onClick={() => handleShowDropdown(index)}>
                          <img
                            className="pointer"
                            alt="icon"
                            src="/assets/icons/more_icon.svg"
                          />
                        </div>
                        <TableDropdown
                          show={showDropdown && !loading && dropId === index}
                        />
                      </TableCell>
                    </TableRow>
                  );
                })}
          </TableBody>
        </Table>
        {loading && (
          <Box sx={{ width: "100%" }}>
            <LinearProgress sx={{ color: "#213F7D" }} />
          </Box>
        )}
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={users.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default UsersTable;
