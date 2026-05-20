import React, { useState } from "react";
import TableFeatures from "./TableFeatures";
import {
    addDocument,
    deleteDocument,
    updateDocument,
} from "../../../services/firebaseService";
import SearchAdmin from "../../../components/admin/SearchAdmin";
import ModalFeature from "./ModalFeature";
import ModalDeleted from "../../../components/admin/ModalDeleted";
import logo from "../../../assets/logo.png";
const inner = { name: "", imgUrl: logo };

function Features() {
    const [open, setOpen] = useState(false);
    const [feature, setFeature] = useState(inner);
    const [error, setError] = useState(inner);
    const [openDelete, setOpenDelete] = useState(false);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(false);

    const handleClickDeleteOpen = (row) => {
        setOpenDelete(true);
        setFeature(row);
    };

    const handleCloseDelete = () => setOpenDelete(false);

    const handleClickOpen = () => {
        setOpen(true);
        setError(inner);
        setFeature(inner);
    };

    const handleClose = () => setOpen(false);

    const onchangeInput = (e) => {
        setFeature({ ...feature, [e.target.name]: e.target.value });
    };

    const validation = () => {
        const newErrors = {};
        newErrors.name = feature.name ? "" : "Please enter name!";
        setError(newErrors);
        return Object.values(newErrors).some((e) => e !== "");
    };

    const saveFeature = async () => {
        if (validation()) return;
        setLoading(true);
        if (feature.id) {
            await updateDocument("features", feature);
        } else {
            await addDocument("features", feature);
        }
        setLoading(false);
        handleClose();
    };

    const handleEdit = (row) => {
        handleClickOpen();
        setFeature(row);
    };

    const handleSearch = (e) => setSearch(e.target.value);

    const handleDeleted = async () => {
        await deleteDocument("features", feature);
        handleCloseDelete();
    };
    const onChangeImg = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setFeature({ ...feature, imgUrl: reader.result });
            };
            reader.readAsDataURL(file);
        }
    }
    return (
        <div>
            <SearchAdmin
                handleClickOpen={handleClickOpen}
                title={"List Features"}
                handleSearch={handleSearch}
            />

            <TableFeatures
                handleEdit={handleEdit}
                handleClickDeleteOpen={handleClickDeleteOpen}
                search={search}
            />

            <ModalFeature
                handleClose={handleClose}
                open={open}
                onchangeInput={onchangeInput}
                saveFeature={saveFeature}
                onChangeImg={onChangeImg}
                feature={feature}
                error={error}
                loading={loading}
            />

            <ModalDeleted
                openDelete={openDelete}
                handleCloseDelete={handleCloseDelete}
                handleDeleted={handleDeleted}
            />
        </div>
    );
}

export default Features;