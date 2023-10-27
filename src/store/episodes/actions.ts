import { createAction } from "@reduxjs/toolkit"

export type Episode = {
  id: number
  name: string
  air_date: string
  episode: string
  characters: string[] // urls
  url: string
  created: string
}

export type EpisodeAction = {
  type: string
  payload: number
}

export enum EpisodeActionTypes {
  FETCH = "episodes/fetch",
  FETCH_FULFILLED = "episodes/fetchFulfilled"
}

export type FetchResponse =
  | {
      results: Episode[]
      info: {
        count: number
        pages: number
        next?: string
        prev?: string
      }
    }
  | {}

export const fetch = createAction<FetchResponse>(EpisodeActionTypes.FETCH)

export const fetchFulfilled = createAction<FetchResponse>(
  EpisodeActionTypes.FETCH_FULFILLED
)
