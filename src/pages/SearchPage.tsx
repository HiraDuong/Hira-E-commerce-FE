import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store'; // Điều chỉnh đường dẫn nếu cần
import Content from '../components/Content';
import { Merchandise } from '../types/types';
import { useEffect } from 'react';
import { useSearchService } from '../services/SearchService';
import { setSearchError, setSearchResponse } from '../redux/searchSlice';
import { useLocation } from 'react-router-dom';
import MerchandiseItem from '../components/MerchandiseItem';
const SearchPage = () => {
    const BeResponse = useSelector((state: RootState) => state.searchReducer.beResponse);
    const error = useSelector((state: RootState) => state.searchReducer.error);
    const apiUrl = `${import.meta.env.VITE_BE_API_URL}/merchandises/name`
    const { searchService } = useSearchService()
    const dispatch = useDispatch()
    const location = useLocation()
    useEffect(() => {
        searchService(apiUrl, (error) => dispatch(setSearchError(error)), (response) => dispatch(setSearchResponse(response)));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [location.search]);
    console.log(error)
    return (
        <Content>
            <h1>Search Page</h1>
            {
                error && error.type == "search" && <p className='text-red-600 font-bold text-xl w-screen text-center mt-2'>{error.message}</p>
            }
            {
                !error && BeResponse && BeResponse.data_type == "merchandises" &&
                <div className='grid xl:grid-cols-4 gap-4 sm:grid-cols-3'>
                    {
                        BeResponse.data?.map((merchandise: Merchandise) => {
                            return <MerchandiseItem merchandise={merchandise} key={merchandise.merchandise_id} />
                        })
                    }
                </div>
            }
        </Content>
    )
}

export default SearchPage;