import React from 'react';
import { CiHeart } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
function DreamHome(props) {
    return (
        <div className='w-4/5 mx-auto pt-10'>
            <div className="flex justify-between">
                <h1>Bất động sản dành cho bạn</h1>
                <ul className='flex gap-3'>
                    <li >Tin nhà đất bán mới nhất</li>
                    <li className='border border-black h-1/2 self-center'></li>
                    <li >Tin nhà đất cho thuê mới nhất</li>
                </ul>
            </div>
            <div className="grid grid-cols-4 grid-cols-span-md-2 grid-cols-span-1 gap-10 mt-5">
                {
                    Array.from({ length: 8 }).map((_, index) => (
                        <div key={index} className="col-span-1 shadow-2xl bg-white rounded-xl overflow-hidden">
                            <img
                                className="w-full h-50 object-cover"
                                src="https://file4.batdongsan.com.vn/crop/393x222/2026/05/20/20260520092650-ab77_wm.jpg"
                                alt=""
                            />
                            <div className="p-4">
                                <p className="font-semibold text-gray-800 text-sm md:text-base">
                                    4,98 Tỷ Nhà 3 lầu đúc 3pn Sổ hồng khu hiện hữu P5Q8
                                </p>
                                <div className="flex gap-3 mt-2 text-red-500 font-bold text-sm md:text-base">
                                    <span>4,98 tỷ</span>
                                    <span>30 m²</span>
                                </div>
                                <p className="mt-2 flex items-center gap-1 text-gray-500">
                                    <FaLocationDot /> Quận 8, Hồ Chí Minh
                                </p>
                                <div className="flex justify-between items-center mt-2 text-gray-500">
                                    <span>Đăng hôm nay</span>
                                    <CiHeart className="cursor-pointer text-gray-700 hover:text-red-500" />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='flex justify-center mt-5'>
                 <div className='flex rounded-md gap-3 items-center px-8 py-3 bg-white'>Mở rộng <IoIosArrowDown /></div>
            </div>
        </div>
    );
}

export default DreamHome;