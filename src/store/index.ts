import { combineEpics, createEpicMiddleware } from "redux-observable"
import { CharactersEpic } from "./characters/epic"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { characterReducer } from "./characters/reducer"
import { EpisodesEpic } from "./episodes/epic"
import { episodeReducer } from "./episodes/reducer"

const rootEpic = combineEpics<any>(CharactersEpic, EpisodesEpic)

const reducers = Object.assign(
  {},
  {
    characterReducer,
    episodeReducer
  }
)

const rootReducer = combineReducers(reducers)

const epicMiddleware = createEpicMiddleware()

export const store = createStore(rootReducer, applyMiddleware(epicMiddleware as any))

epicMiddleware.run(rootEpic as any)
