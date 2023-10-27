import { createReducer } from '@reduxjs/toolkit';
import { fetchFulfilled, Character, FetchResponse } from './actions';

export const initialState = {
    data: [] as Character[],
    pages: 0,
    count: 0
}

export const characterReducer = createReducer(initialState, (builder) => {
    builder.addCase(fetchFulfilled, (state, action: any) => {
        if (action.payload.info) {
        state.data = action.payload?.results || [];
        state.pages = action.payload?.info.pages || 0;
        state.count = action.payload?.info.count || 0;
        } else {
            state.data = action.payload
        }
    })
})