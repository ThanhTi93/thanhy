import { useContext, useMemo, useState } from "react";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import PaginationTablePage from "../../../components/admin/PaginationTablePage";
import { ContextFeatures } from "../../../contexts/FeaturesProvider";

// map icon string → component
import * as Icons from "react-icons/fa";

export default function TableFeatures({
    handleEdit,
    handleClickDeleteOpen,
    search,
}) {
    const features = useContext(ContextFeatures);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const dataSearch = useMemo(() => {
        return features.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, features]);

    const dataPagination = useMemo(() => {
        return dataSearch.slice(
            page * rowsPerPage,
            page * rowsPerPage + rowsPerPage
        );
    }, [page, rowsPerPage, dataSearch]);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <div className="mt-5">
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>#</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Icon</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {dataPagination.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    <TableCell>
                                        {page * rowsPerPage + index + 1}
                                    </TableCell>

                                    <TableCell>{row.name}</TableCell>

                                    <TableCell>
                                        <img className="w-10 h-10" src={row.imgUrl} alt="" />
                                    </TableCell>

                                    <TableCell>
                                        <div className="flex gap-2">
                                            <FaEdit
                                                className="text-blue-600 cursor-pointer"
                                                onClick={() => handleEdit(row)}
                                            />
                                            <MdDelete
                                                className="text-red-600 cursor-pointer"
                                                onClick={() =>
                                                    handleClickDeleteOpen(row)
                                                }
                                            />
                                        </div>
                                    </TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <PaginationTablePage
                data={features}
                page={page}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </div>
    );
}