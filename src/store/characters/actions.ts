import { createAction } from "@reduxjs/toolkit"

export type Character = {
  id: number
  name: string
  status: string
  species: string
  type: string
  gender: string
  origin: {
    name: string
    url: string
  }
  location: {
    name: string
    url: string
  }
  image: string
  episode: string[]
  url: string
  created: string
}

export type CharacterAction = {
  type: string
  payload: string[]
}

export enum CharacterActionTypes {
  FETCH = "characters/fetch",
  FETCH_FULFILLED = "characters/fetchFulfilled"
}

export type FetchResponse =
  | {
      results: Character[]
      info: {
        count: number
        pages: number
        next?: string
        prev?: string
      }
    }
  | {}

export const fetch = createAction<FetchResponse>(CharacterActionTypes.FETCH)

export const fetchFulfilled = createAction<FetchResponse>(
  CharacterActionTypes.FETCH_FULFILLED
)
