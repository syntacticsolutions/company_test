import { ajax } from "rxjs/ajax"
import { ofType } from "redux-observable"
import { EpisodeAction, Episode, EpisodeActionTypes, fetchFulfilled } from "./actions"
import { catchError, distinct, map, mergeMap, Observable, of } from "rxjs"

export const EpisodesEpic = (action$: Observable<EpisodeAction>) =>
  action$.pipe(
    ofType(EpisodeActionTypes.FETCH),
    mergeMap(({ payload }) => of(payload)),
    distinct(),
    mergeMap((page) =>
      ajax
        .getJSON<Episode[]>("https://rickandmortyapi.com/api/episode?page=" + page)
        .pipe(
          catchError(() => of({})),
          map(fetchFulfilled)
        )
    )
  )
