import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import ProductItems from './ProductItems';
import { usePagination } from '../utils/pagination.util';
import PaginationControl from './Pagination';
import { useAppSelector } from '../redux/store';
import { sortProducts } from '../utils/sorting.util';
import { searchProducts } from '../utils/search.util';
import { useMemo } from 'react';


interface ProductItemProps {
    image: string;
    price: number;
    name: string;
    id: number;
  }
  
const Products: FC = () => {

    const [data, setData] = useState<ProductItemProps[]>([]);
    const itemsPerPage = 12


    useEffect(() => {
        const fetchData = async (): Promise<void> => {
            try {
                const response = await axios.get<ProductItemProps[]>('https://5fc9346b2af77700165ae514.mockapi.io/products');
                setData(response.data);
                console.log('Product IDs:', data.map((item) => item.name));
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const { sortBy } = useAppSelector((state) => state.sorting);
    const { searchTerm } = useAppSelector((state) => state.search);
    const filteredData = useMemo(() => {
        return searchProducts(data, searchTerm);
    }, [data, searchTerm]);

    const sortedData = useMemo(() => {
        return sortProducts(filteredData, sortBy);
    }, [filteredData, sortBy]);

    const { currentPage, setCurrentPage, totalPages, paginatedData } = usePagination(
        sortedData,
        itemsPerPage
    );
    return (
        <>
            <div>
                <div className="mb-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {paginatedData.map((item) => (
                        <ProductItems key={item.id} id={item.id} image={item.image} price={item.price} name={item.name} />
                    ))}
                </div>
                <PaginationControl
                    currentPage={currentPage}
                    totalPages={totalPages}
                    setCurrentPage={setCurrentPage}
                />
            </div>
        </>
    );
};

export default Products