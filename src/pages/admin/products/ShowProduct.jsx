import React, { useContext, useMemo, useState } from 'react';
import SlidesProduct from '../swipers/SlidesProduct';
import { ContextProducts } from '../../../contexts/ProductsProvider';
import PaginationTablePage from "../../../components/admin/PaginationTablePage";
function ShowProduct({ search = "" }) {
    const products = useContext(ContextProducts);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(6);

    const dataSearch = useMemo(() => {
        return products.filter((e) =>
            e.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [search, products]);

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
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-3'>
                {
                    dataPagination.map((item) => (
                        < SlidesProduct item={item} />
                    ))
                }
            </div>
            <PaginationTablePage
                data={products}
                page={page}
                handleChangePage={handleChangePage}
                rowsPerPage={rowsPerPage}
                handleChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </>

    );
}

export default ShowProduct;