import React, { useState } from "react";
import TableCateType from "./TableCateType";
import {
  addDocument,
  deleteDocument,
  updateDocument,
} from "../../../services/firebaseService";
import SearchAdmin from "../../../components/admin/SearchAdmin";
import ModalCategoryType from "./ModalCategoryType";
import ModalDeleted from "../../../components/admin/ModalDeleted";
const inner = { name: "", category: "" };

function CategoryType() {
  const [open, setOpen] = useState(false);
  const [cateType, setCateType] = useState(inner);
  const [error, setError] = useState(inner);
  const [openDelete, setOpenDelete] = useState(false);
  const [search, setSearch] = useState("");

  const handleClickDeleteOpen = (row) => {
    setOpenDelete(true);
    setCateType(row);
  };

  const handleCloseDelete = () => {
    setOpenDelete(false);
  };

  const handleClickOpen = () => {
    setOpen(true);
    setError(inner);
    setCateType(inner);
  };

  const handleClose = () => setOpen(false);

  const onchangeInput = (e) => {
    setCateType({ ...cateType, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const newErrors = {};
    newErrors.name = cateType.name ? "" : "Please enter name!";
    newErrors.category = cateType.category ? "" : "Please enter category!";
    setError(newErrors);
    return Object.values(newErrors).some((e) => e !== "");
  };

  const saveCateType = async () => {
    if (validation()) return;

    if (cateType.id) {
      await updateDocument("cate_types", cateType);
    } else {
      await addDocument("cate_types", cateType);
    }

    handleClose();
  };

  const handleEdit = (row) => {
    handleClickOpen();
    setCateType(row);
  };

  const handleSearch = (e) => setSearch(e.target.value);

  const handleDeleted = async () => {
    await deleteDocument("cate_types", cateType);
    handleCloseDelete();
  };

  return (
    <div>
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title={"List Cate Types"}
        handleSearch={handleSearch}
      />

      <TableCateType
        handleEdit={handleEdit}
        handleClickDeleteOpen={handleClickDeleteOpen}
        search={search}
      />

      <ModalCategoryType
        handleClose={handleClose}
        open={open}
        onchangeInput={onchangeInput}
        saveCateType={saveCateType}
        cateType={cateType}
        error={error}
      />

      <ModalDeleted
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        handleDeleted={handleDeleted}
      />
    </div>
  );
}

export default CategoryType;