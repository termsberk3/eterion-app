import React, { FC } from 'react';
import SearchBar from "./SearchBar"
import { useAppDispatch } from '../redux/store';
import { setSearchTerm } from '../redux/reducers/search-slice';
import TotalPrice from './TotalCheckout';

interface HeaderProps {

}
const Header: React.FC<HeaderProps> = () => {
    const dispatch = useAppDispatch();
    const handleSearch = (searchTerm: string) => {
        dispatch(setSearchTerm(searchTerm));
    };
    return (
        <nav className="bg-header shadow-md">
            <div className="w-auto mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex items-center space-x-48 ml-4">
                        <h1 className="text-2xl font-bold text-white font-montserrat">Eteration</h1>
                        <div className="relative w-full max-w-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 absolute left-3 top-3 text-gray-400">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <SearchBar onSearch={handleSearch} />
                        </div>
                    </div>
                    <div className="flex items-center space-x-4 px-12">
                        <p className="text-lg text-white font-montserrat"><TotalPrice/>₺</p>
                        <p className="text-lg text-white font-montserrat">Berk</p>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Header