import axios from 'axios';
import { BeError, BEResponse } from "../types/types";

export const useSearchService = () => {
    const searchService = async (apiUrl: string,  setError: (error: BeError|null) => void,setResponse:(response:BEResponse|null)=>void): Promise<void> => {
        const params = new URLSearchParams(window.location.search);
        const searchValue = params.get('q');

        if (!searchValue) {
            console.log({ message: 'Không tìm thấy giá trị tìm kiếm trong URL', type: 'search' });
            return
        }
        console.log(window.location.search as string)
        setError(null),
        setResponse(null);
        try {
            const response = await axios.get(`${apiUrl}/${searchValue}`, {
                
            });
            setResponse (response.data as BEResponse);
            console.log("Kết quả tìm kiếm:", response.data);  
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                console.error("Có lỗi xảy ra khi tìm kiếm:", error.response?.data);
                const beError = error.response?.data;
                beError.type = 'search';
                setError(beError);
            } else {
                console.error("Có lỗi không xác định xảy ra khi tìm kiếm:", error);
            }
        }
    };

    return { searchService };
};
