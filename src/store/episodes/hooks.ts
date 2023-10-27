import _ from "lodash"
import { initialState } from "./reducer"
import { useDispatch, useSelector } from "react-redux"
import { useCallback, useEffect, useState } from "react"
import { fetch } from "./actions"

type State = {
  episodeReducer: typeof initialState
}

export const episodePaths = {
  data: "episodeReducer.data",
  pages: "episodeReducer.pages",
  count: "episodeReducer.count"
}

export const useEpisodes = (page: number) => {
  const [loading, setLoading] = useState(true)
  const { data, pages, count } = useSelector((state: State) => {
    return {
      data: _.get(state, episodePaths.data),
      pages: _.get(state, episodePaths.pages) || 1,
      count: _.get(state, episodePaths.count)
    }
  })

  useEffect(() => {
    setTimeout(() => setLoading(false), 500)
  }, [data])

  const dispatcher = useDispatch()

  const dispatch = useCallback((page: number) => {
    dispatcher(fetch(page))
  }, [])

  useEffect(() => {
    if (page <= pages) {
      setLoading(true)
      dispatch(page)
    }
  }, [page])

  return {
    episodes: data,
    pages,
    count,
    loading
  }
}
