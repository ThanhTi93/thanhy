import { useContext, useMemo, useState } from "react";
import { ContextCateTypes } from "../../../contexts/CateTypesProvider";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Categories } from "../../../utils/Contants";
import PaginationTablePage from "../../../components/admin/PaginationTablePage";

export default function TableCateType({
  handleEdit,
  handleClickDeleteOpen,
  search,
}) {
  const cateTypes = useContext(ContextCateTypes);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const dataSearch = useMemo(() => {
    return cateTypes.filter((e) =>
      e.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, cateTypes]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const dataPagination = useMemo(() => {
    return dataSearch.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
  }, [page, rowsPerPage, dataSearch]);

  return (
    <div className="mt-5">
      <TableContainer component={Paper} sx={{ mt: 1 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>#</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Category</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {dataPagination.map((row, index) => (
              <TableRow key={index}>
                <TableCell>
                  {page * rowsPerPage + index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{Categories[row.category]}</TableCell>
                <TableCell>
                  <div className="flex gap-2">
                    <FaEdit className="text-blue-600" onClick={() => handleEdit(row)} />
                    <MdDelete className="text-red-600" onClick={() => handleClickDeleteOpen(row)} />
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <PaginationTablePage data={cateTypes} page={page} handleChangePage={handleChangePage} rowsPerPage={rowsPerPage} handleChangeRowsPerPage={handleChangeRowsPerPage} />
    </div>
  );
}