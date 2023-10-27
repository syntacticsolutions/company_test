import { Character } from "@store/characters/actions"
import React from "react"
import styled from "styled-components"

export type CharacterGridProps = {
  characters: Character[]
}

export const Characters = ({ characters }: CharacterGridProps) => {
  return (
    <Container>
      {characters.map(({ image, id, name }) => (
        <div>
          <figure key={id}>
            <img src={image} width="200px" />
          </figure>
          <p>{name}</p>
        </div>
      ))}
    </Container>
  )
}

const Container = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  overflow-y: scroll;

  p {
    text-align: center;
  }
`
