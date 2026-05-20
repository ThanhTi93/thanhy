import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";
function TopProperties(props) {
    return (
        <div className='w-4/5 mx-auto'>
            <div className="flex justify-between">
                <h1>Dự án bất động sản nổi bật</h1>
                <p className='flex items-center'>Xem thêm <IoIosArrowRoundForward /></p>
            </div>
        </div>
    );
}

export default TopProperties;