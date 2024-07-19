
import { RootState } from './store';
// src/searchSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { BeError, BEResponse, SearchResponse } from '../types/types';

export interface SearchState {
    data: SearchResponse;
    error: BeError | null;
    beResponse : BEResponse|null ;

}

const initialState: SearchState = {
    data: null,
    error: null,
    beResponse : null, 
};

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        setSearchData(state, action: PayloadAction<SearchResponse>) {
            state.data = action.payload;
        },
        setSearchResponse(state, action: PayloadAction<BEResponse|null>) {
            state.beResponse = action.payload;
        },
        setSearchError(state, action: PayloadAction<BeError|null>) {
            state.error = action.payload;
        },

    },
});

export const { setSearchData,setSearchResponse,setSearchError } = searchSlice.actions;
export const searchSelector = (state: RootState) => state.searchReducer;
export default searchSlice.reducer;
