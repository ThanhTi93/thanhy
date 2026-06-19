import { FaBed, FaProductHunt, FaUsers } from "react-icons/fa";
import { TbCategoryPlus } from "react-icons/tb";
import LOGO from "../assets/logo.png" ;
export const LISTMENU = [
    {
        title : "Category Type",
        path : "/category_type",
        icon : <TbCategoryPlus />
    },
    {
        title : "Features",
        path : "/features",
        icon : <FaBed />
    },
    {
        title : "Products",
        path : "/products",
        icon : <FaProductHunt />
    },
     {
        title : "Accounts",
        path : "/accounts",
        icon : <FaUsers />
    }
]

export const Categories = {
   DUAN : "Dự Án",
   NHADAT : "Nhà Đất",
   CHOTHUE : "Cho Thuê"
}

export const upload_preset  = "GalaxyMovie" ;
export const cloud_name = "dffgluvky" ;
export const logo = LOGO ;

export const properties = [
  {
    id: 1,
    tag: "Nổi bật",
    tagColor: "bg-amber-500",
    title: "Biệt thự ven sông cao cấp",
    location: "Ngũ Hành Sơn, Đà Nẵng",
    beds: "4 PN",
    baths: "5 WC",
    area: "320m²",
    price: "12.5 tỷ",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    tag: "Mới",
    tagColor: "bg-emerald-500",
    title: "Căn hộ view biển Mỹ Khê",
    location: "Sơn Trà, Đà Nẵng",
    beds: "2 PN",
    baths: "2 WC",
    area: "85m²",
    price: "3.2 tỷ",
    image:
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    tag: "Hot",
    tagColor: "bg-rose-500",
    title: "Nhà phố trung tâm",
    location: "Hải Châu, Đà Nẵng",
    beds: "3 PN",
    baths: "4 WC",
    area: "120m²",
    price: "6.8 tỷ",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    tag: "Giảm giá",
    tagColor: "bg-indigo-500",
    title: "Đất nền Hòa Xuân",
    location: "Cẩm Lệ, Đà Nẵng",
    beds: "-",
    baths: "-",
    area: "100m²",
    price: "2.1 tỷ",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  },
];

export const areas = [
  {
    id: 1,
    name: "Sơn Trà, Đà Nẵng",
    count: "320+ Bất động sản",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 2,
    name: "Hải Châu, Đà Nẵng",
    count: "450+ Bất động sản",
    image:
      "https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 3,
    name: "Ngũ Hành Sơn, Đà Nẵng",
    count: "280+ Bất động sản",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=900&q=80",
  },
  {
    id: 4,
    name: "Cẩm Lệ, Đà Nẵng",
    count: "150+ Bất động sản",
    image:
      "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=900&q=80",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Nguyễn Thị Hương",
    role: "Khách hàng mua căn hộ",
    content:
      "Real Estate đã giúp tôi tìm được căn hộ ưng ý với giá tốt nhất. Dịch vụ chuyên nghiệp và hỗ trợ rất nhiệt tình.",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 2,
    name: "Trần Văn Nam",
    role: "Nhà đầu tư",
    content:
      "Thông tin dự án minh bạch, pháp lý rõ ràng. Tôi hoàn toàn yên tâm khi giao dịch tại đây.",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    id: 3,
    name: "Lê Thị Mai",
    role: "Khách hàng mua nhà",
    content:
      "Đội ngũ tư vấn rất nhiệt tình, giúp tôi tìm được căn nhà phù hợp với nhu cầu.",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&q=80",
  },
];

export const ROLES = {
  ADMIN: 'admin',        // Quản trị viên cấp cao
  MODERATOR: 'moderator', // Quản trị viên cấp trung (người kiểm duyệt)
  USER: 'user',          // Người dùng thông thường
};