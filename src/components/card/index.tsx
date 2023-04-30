import React from 'react'
import * as S from "./styles"



const Card = ({url} : {url: string}) => {
  return (
    <S.Container>
      <img src={`/assets/images/${url}.png`} alt={`Tenis ${url}`} />
    </S.Container>
  )
}

export default Card