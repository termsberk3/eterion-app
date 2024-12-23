import { setSortBy } from '../../redux/reducers/sorting-slice';
import { useAppDispatch, useAppSelector } from '../../redux/store';


const SortBy: React.FC = () => {
    const dispatch = useAppDispatch();

    const handleSortByChange = (sortBy: 'oldest' | 'newest' | 'cheapest' | 'mostExpensive') => {
        dispatch(setSortBy(sortBy));
    };

    return (
        <div className="w-full h-220px border border-gray-200 rounded-lg shadow-md p-4">
            <h3 className="text-lg font-semibold mb-4">Sort By:</h3>
            <div className="space-y-2">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="oldest"
                        name="sort"
                        value="oldest"
                        className="mr-2"
                        onChange={() => handleSortByChange('oldest')}
                    />
                    <label htmlFor="oldest">Oldest</label>
                </div>

                <div className="flex items-center">
                    <input
                        type="radio"
                        id="newest"
                        name="sort"
                        value="newest"
                        className="mr-2"
                        onChange={() => handleSortByChange('newest')}
                    />
                    <label htmlFor="newest">Newest</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="cheapest"
                        name="sort"
                        value="cheapest"
                        className="mr-2"
                        onChange={() => handleSortByChange('cheapest')}
                    />
                    <label htmlFor="cheapest">Cheapest</label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="mostExpensive"
                        name="sort"
                        value="mostExpensive"
                        className="mr-2"
                        onChange={() => handleSortByChange('mostExpensive')}
                    />
                    <label htmlFor="most_expensive">Most Expensive</label>
                </div>
            </div>
        </div>
    );
};
export default SortBy