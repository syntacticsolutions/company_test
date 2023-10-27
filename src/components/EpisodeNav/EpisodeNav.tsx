import _ from "lodash"
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from "react"
import { Loader } from "@components/Loader"
import { Episode } from "@store/episodes/actions"
import { useEpisodes } from "@store/episodes/hooks"
import { Container } from "./styled"

interface EpisodeNavProps {
  onSelected: Dispatch<SetStateAction<Episode>>
  selected: Episode
}

export const EpisodeNav = ({ onSelected, selected }: EpisodeNavProps) => {
  const [page, setPage] = useState(1)

  const { episodes, loading } = useEpisodes(page)

  const _onSelected = useCallback(
    (e: Episode) => () => {
      onSelected((selected?.id === e.id ? null : e) as Episode)
    },
    [selected]
  )
  const selectedIndex = useMemo(() => {
    return episodes.findIndex(({ id }: Episode) => id === selected?.id)
  }, [selected])

  const ulRef = useRef<HTMLUListElement>(null)

  useLayoutEffect(() => {
    ulRef.current?.addEventListener(
      "scroll",
      _.debounce((ev) => {
        const { scrollHeight, scrollTop, clientHeight } = ev.target
        if (Math.abs(scrollHeight - scrollTop - clientHeight) < 20) {
          setPage((current) => ++current)
        }
      }, 300)
    )
    const { scrollHeight, scrollTop, clientHeight } = ulRef.current as HTMLUListElement
    if (Math.abs(scrollHeight - scrollTop - clientHeight) < 20) {
      setPage((current) => ++current)
    }
  }, [])

  return (
    <Container selectedIndex={selectedIndex}>
      <p>Episodes</p>
      <hr />
      <ul ref={ulRef}>
        {episodes.map((ep: Episode) => (
          <li key={ep.id} onClick={_onSelected(ep)}>
            {ep.name}
          </li>
        ))}
      </ul>
      <Loader loading={loading} />
    </Container>
  )
}
