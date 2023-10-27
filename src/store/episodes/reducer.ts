import { createReducer } from "@reduxjs/toolkit"
import { fetchFulfilled, Episode } from "./actions"

export const initialState = {
  data: [] as Episode[],
  pages: 0,
  count: 0
}

export const episodeReducer = createReducer(initialState, (builder) => {
  builder.addCase(fetchFulfilled, (state, action: any) => {
    if (action.payload?.info?.pages) {
      state.data.push(...(action.payload?.results || []))
      state.pages = action.payload?.info.pages || 0
      state.count = action.payload?.info.count || 0
    }
  })
})
