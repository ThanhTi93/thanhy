import React, { useState } from "react";
import SearchAdmin from "../../../components/admin/SearchAdmin";
import ModalProduct from "./ModalProduct";
import {
  addDocument,
  deleteDocument,
  updateDocument,
} from "../../../services/firebaseService";
import ModalDeleted from "../../../components/admin/ModalDeleted";
import ShowProduct from "./ShowProduct";

const inner = {
  name: "",
  categoryType :"",
  description: "",
  provinceId : "",
  ward_id: "",
  address: "",
  price: "",
  listImg: [],
  unit: "",
  list_feature: [],
  priceTotal: "",
};

function Products() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState(inner);
  const [error, setError] = useState({});
  const [openDelete, setOpenDelete] = useState(false);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    setProduct(inner);
    setError({});
  };
  const handleClose = () => setOpen(false);

  const handleEdit = (row) => {
    setOpen(true);
    setProduct(row);
  };

  const handleClickDeleteOpen = (row) => {
    setOpenDelete(true);
    setProduct(row);
  };

  const handleCloseDelete = () => setOpenDelete(false);

  const onchangeInput = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const validation = () => {
    const newErrors = {};
    if (!product.name) newErrors.name = "Enter name";
    if (!product.price) newErrors.price = "Enter price";
    setError(newErrors);
    return Object.keys(newErrors).length > 0;
  };

  const saveProduct = async () => {
    if (validation()) return;
      setLoading(true);
    if (product.id) {
      await updateDocument("products", product);
    } else {
      await addDocument("products", product);
    }
    setLoading(false);
    handleClose();
  };

  const handleDeleted = async () => {
    await deleteDocument("products", product);
    handleCloseDelete();
  };

  const onChangeImg = (event) => {
    const files = Array.from(event.target.files);

    const promises = files.map((file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            reader.readAsDataURL(file);
        });
    });

    Promise.all(promises).then((images) => {
        setProduct({
            ...product,
            listImg : images // array ảnh base64
        });
    });
};
  return (
    <div>
      <SearchAdmin
        handleClickOpen={handleClickOpen}
        title="List Products"
        add="Add Product"
        handleSearch={(e) => setSearch(e.target.value)}
      />
      <ModalProduct
        open={open}
        handleClose={handleClose}
        onchangeInput={onchangeInput}
        saveProduct={saveProduct}
        product={product}
        error={error}
        onChangeImg={onChangeImg}
        setProduct={setProduct}
        loading={loading}
      />

      <ModalDeleted
        openDelete={openDelete}
        handleCloseDelete={handleCloseDelete}
        handleDeleted={handleDeleted}
      />
      <ShowProduct />
    </div>
  );
}

export default Products;