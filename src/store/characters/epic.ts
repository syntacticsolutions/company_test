import { ajax } from "rxjs/ajax"
import { ofType } from "redux-observable"
import {
  CharacterAction,
  Character,
  CharacterActionTypes,
  fetchFulfilled
} from "./actions"
import { catchError, map, mergeMap, Observable, of, tap } from "rxjs"

export const CharactersEpic = (action$: Observable<CharacterAction>) =>
  action$.pipe(
    ofType(CharacterActionTypes.FETCH),
    mergeMap(({ payload }: CharacterAction) =>
      ajax
        .getJSON<Character[]>(
          `https://rickandmortyapi.com/api/character${
            payload.length ? `/${payload.join(",")}` : ""
          }`
        )
        .pipe(
          catchError(() => of({})),
          map(fetchFulfilled)
        )
    )
  )
