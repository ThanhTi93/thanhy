import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  AvatarGroup,
  Avatar,
  Box,
  Autocomplete,
  Tooltip,
} from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { ContextProvinces } from "../../../contexts/ProvincesProvider";
import { ContextWards } from "../../../contexts/WardsProvider";
import { Categories } from "../../../utils/Contants";
import { formatVND, getOjectById } from "../../../services/reponsitory";
import { ContextCateTypes } from "../../../contexts/CateTypesProvider";
import { styled } from '@mui/material/styles';
import { FaFileImage, FaSpinner } from "react-icons/fa";
import ModalChoose from "./ModalChoose";
import { ContextFeatures } from "../../../contexts/FeaturesProvider";
import { RiDeleteBin5Fill } from "react-icons/ri";
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});
export default function ModalProduct({
  open,
  handleClose,
  onchangeInput,
  saveProduct,
  product,
  error,
  onChangeImg,
  setProduct,
  loading
}) {
  const provinces = useContext(ContextProvinces);
  const wards = useContext(ContextWards);
  const cateTypes = useContext(ContextCateTypes);
  const [wardShow, setWardShow] = useState([]);
  const [openChoose, setOpenChoose] = useState(false);
  const features = useContext(ContextFeatures);

  const handleOpenChoose = () => {
    setOpenChoose(true);
  }
  const handleCloseOpenChoose = () => {
    setOpenChoose(false);
  }
  useEffect(() => {
    const data = wards.filter((item) => item.province_code == product.provinceId);
    setWardShow(data);
  }, [product]);

  const handleChoose = (item) => {
    setProduct(pre => {
      return { ...pre, list_feature: toggleSelect(pre.list_feature, item) }
    })
  }

  const toggleSelect = (items, id) => {
    const exist = items.find(item => item.id === id);
    if (exist) {
      // đã có → tăng số lượng
      return items.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    } else {
      // chưa có → thêm mới
      return [...items, { id, quantity: 1 }];
    }
  };

  const handleDeleteFeature = (e, id) => {
    e.stopPropagation();
    setProduct(pre => {
      return { ...pre, list_feature: toggleFeature(pre.list_feature, id) }
    })
  }
  const toggleFeature = (list, id) => {
    return list.filter(e => e.id !== id);
  }
  return (
    <>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <DialogTitle>
          {product.id ? "Sửa sản phẩm" : "Thêm sản phẩm"}
        </DialogTitle>
        <DialogContent>
          <div className="grid lg:grid-cols-3 gap-3 mt-3">
            <div className="col-span-1">
              <TextField
                label="Tiêu đề"
                name="name"
                fullWidth
                value={product.name}
                onChange={onchangeInput}
                error={!!error.name}
                helperText={error.name}
              />
              <Autocomplete
                disablePortal
                fullWidth
                sx={{ mt: 2 }}
                options={Object.keys(Categories)}
                getOptionLabel={(option) => Categories[option]}
                renderInput={(params) => (
                  <TextField {...params} label="Category" />
                )}
                onChange={(event, value) => {
                  onchangeInput({
                    target: { name: "category", value: value || "" },
                  });
                }}
              />
              <Autocomplete
                className='mt-2'
                options={cateTypes.filter(e => e.category == product.category)}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chọn thể loại"
                  />
                )}
                onChange={(event, newValue) => {
                  // Cập nhật giá trị khi người dùng chọn
                  onchangeInput({
                    target: { name: "categoryType", value: newValue ? newValue.id : "" },
                  });
                }}
                isOptionEqualToValue={(option, value) => option.code === value.code} // So sánh giá trị
                noOptionsText="Không tìm thấy kết quả" // Thông báo khi không có kết quả
                fullWidth
              />
              <Autocomplete
                className='mt-2'
                options={provinces}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chọn một tỉnh"
                  />
                )}
                onChange={(event, newValue) => {
                  // Cập nhật giá trị khi người dùng chọn
                  onchangeInput({
                    target: { name: "provinceId", value: newValue ? newValue.code : "" },
                  });
                }}
                isOptionEqualToValue={(option, value) => option.code === value.code} // So sánh giá trị
                noOptionsText="Không tìm thấy kết quả" // Thông báo khi không có kết quả
                fullWidth
              />
              <Autocomplete
                className='mt-2'
                options={wardShow}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Chọn một phường"
                  />
                )}
                onChange={(event, newValue) => {
                  // Cập nhật giá trị khi người dùng chọn
                  onchangeInput({
                    target: { name: "ward_id", value: newValue ? newValue.code : "" },
                  });
                }}
                isOptionEqualToValue={(option, value) => option.code === value.code} // So sánh giá trị
                noOptionsText="Không tìm thấy kết quả" // Thông báo khi không có kết quả
                fullWidth
              />
              <TextField
                label="Địa chỉ chi tiết"
                name="address"
                fullWidth
                sx={{ mt: 2 }}
                value={product.address}
                onChange={onchangeInput}
              />
            </div>
            <div className="col-span-1">
              <TextField
                label="Tổng tiền"
                name="priceTotal"
                fullWidth
                value={formatVND(product.priceTotal)}
                onChange={(e) => {
                  const rawValue = e.target.value.replace(/\D/g, ""); // bỏ ký tự không phải số
                  onchangeInput({
                    target: {
                      name: "priceTotal",
                      value: rawValue,
                    },
                  });
                }}
              />
              <TextField
                label="Tiền theo đơn vị"
                name="price"
                fullWidth
                sx={{ mt: 2 }}
                value={product.price}
                onChange={onchangeInput}
                error={!!error.price}
                helperText={error.price}
              />
              <TextField
                label="Đơn vị"
                name="unit"
                fullWidth
                sx={{ mt: 2 }}
                value={product.unit}
                onChange={onchangeInput}
              />
              <TextField
                label="Mô tả"
                name="description"
                fullWidth
                multiline
                rows={2}
                sx={{ mt: 2 }}
                value={product.description}
                onChange={onchangeInput}
              />
              <Button
                component="label"
                variant="contained"
                tabIndex={-1}
                sx={{ mt: 2 }}
                onClick={handleOpenChoose}
              >
                Thêm tiện ích
              </Button>
              <div className="grid grid-cols-7 gap-3 mt-5">
                {product.list_feature.map((item, index) => (
                  <div key={index} className="col-span-1 relative">
                    <div onClick={(e) => handleDeleteFeature(e, item.id)} className="absolute top-0 right-0 translate-x-1 -translate-y-1 text-md hover:text-xl text-red-500 "><RiDeleteBin5Fill /></div>
                    <div className="w-4 top-0 text-sm -translate-1 left-0 flex justify-center text-white items-center rounded-full absolute h-4 bg-blue-500">
                      {item?.quantity}
                    </div>
                    <Tooltip title={item.name}>
                      <img className="w-full h-full" src={getOjectById(features, item.id)?.imgUrl} alt="" />
                    </Tooltip>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-span-1">
              <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<FaFileImage />}
              >
                Chọn ảnh
                <VisuallyHiddenInput
                  type="file"
                  onChange={onChangeImg}
                  multiple
                />
              </Button>
              {product.listImg.length > 0 && <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "2fr 1fr",
                  gap: 1,
                  borderRadius: 3,
                  overflow: "hidden",
                  height: 300,
                  mt: 1
                }}
              >
                {/* 🖼️ Ảnh lớn */}
                <Box
                  component="img"
                  src={product.listImg[0]}
                  sx={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />

                {/* 🧩 Ảnh nhỏ */}
                <Box
                  sx={{
                    display: "grid",
                    gridTemplateRows: "repeat(3, 1fr)",
                    gap: 1,
                  }}
                >
                  {product.listImg.slice(1, 4).map((img, index) => (
                    <Box
                      key={index}
                      sx={{
                        position: "relative",
                        width: "100%",
                        height: "100%",
                      }}
                    >
                      <Box
                        component="img"
                        src={img}
                        sx={{
                          width: "100%",
                          height: "100%",
                        }}
                      />

                      {/* 👉 nếu ảnh cuối + dư */}
                      {index === 2 && 6 > 0 && (
                        <Box
                          sx={{
                            position: "absolute",
                            inset: 0,
                            background: "rgba(0,0,0,0.6)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            color: "#fff",
                            fontSize: 24,
                            fontWeight: "bold",
                          }}
                        >
                          +{6}
                        </Box>
                      )}
                    </Box>
                  ))}
                </Box>
              </Box>}

            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={saveProduct}
            disabled={loading}
            className={`flex items-center gap-2 ${loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
          >
            {loading && (
              <FaSpinner className="animate-spin" />
            )}

            {loading
              ? "Processing..."
              : product.id
                ? "UPDATE"
                : "ADD"}
          </Button>
        </DialogActions>
      </Dialog>
      <ModalChoose handleDeleteFeature={handleDeleteFeature} product={product} handleChoose={handleChoose} openChoose={openChoose} handleCloseOpenChoose={handleCloseOpenChoose} />
    </>
  );
}