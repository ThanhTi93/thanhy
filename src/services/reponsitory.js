export const formatVND = (value) => {
  if (!value) return "";
  return new Intl.NumberFormat("vi-VN").format(value);
};

export const getOjectById = (data, id) => {
    return data?.find(e => e.id == id) ? data?.find(e => e.id == id) : "unknown";
}