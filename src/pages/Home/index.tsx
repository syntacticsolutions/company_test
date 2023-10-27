import React, { Dispatch, SetStateAction, Suspense, useMemo, useState } from "react"
import { useCharacters } from "@store/characters/hooks"
import { useEpisodes } from "@store/episodes/hooks"
import { Episode } from "@store/episodes/actions"
import styled from "styled-components"
import { EpisodeNav } from "@components/EpisodeNav/EpisodeNav"
import { Characters } from "@components/Characters/Characters"

export const Home = () => {
  const [selectedEpisode, _onSelected] = useState<Episode>(null as any)

  const { characters } = useCharacters(selectedEpisode?.characters)

  return (
    <Page>
      <h1>Rick and Morty Characters</h1>
      <Container>
        <EpisodeNav onSelected={_onSelected} selected={selectedEpisode} />
        <Suspense fallback={"Loading..."}>
          <Characters characters={characters} />
        </Suspense>
      </Container>
    </Page>
  )
}

const Container = styled.section`
  display: flex;
  max-height: 90vh;
  padding: 30px;
`

const Page = styled.main`
  display: flex;
  flex-direction: column;
  font-family: Helvetica;

  h1 {
    text-align: center;
    font-weight: 500;
    color: #333;
  }
`
