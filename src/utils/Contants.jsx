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