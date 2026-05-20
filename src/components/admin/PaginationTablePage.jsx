import * as React from "react";
import TablePagination from "@mui/material/TablePagination";
import { alpha } from "@mui/material/styles";

function PaginationTablePage({
  page,
  handleChangePage,
  rowsPerPage,
  handleChangeRowsPerPage,
  data,
}) {
  return (
    <TablePagination
      component="div"
      count={data.length}
      page={page}
      onPageChange={handleChangePage}
      rowsPerPage={rowsPerPage}
      onRowsPerPageChange={handleChangeRowsPerPage}
      rowsPerPageOptions={[5, 10, 15]}
    />
  );
}

export default PaginationTablePage;
