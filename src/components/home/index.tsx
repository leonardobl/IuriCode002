import React from 'react'
import * as S from "./styles"
import Card from '../card'


const urls = Array(8).fill(0)

const Home = () => {
  return (
    <>
      <S.Main>

        <S.TextTop1>Ganhe R$ 10,00 de desconto no frete</S.TextTop1>
        <S.TextTop2>JordanShoes</S.TextTop2>

        <S.ContainerImg>
          <S.WrapperContainerImgContent>
            <h1>A melhor loja de Jordan</h1>
            <p>O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</p>
          </S.WrapperContainerImgContent>
        </S.ContainerImg>

        <S.WrapperDestaque>
          <p>Destaques</p>
          <span>Frete grátis e chinelo de brinde é aqui, aproveite por tempo limitado. </span>
        </S.WrapperDestaque>

        <S.WrapperTenis>
          { urls.map( (url, idx) => <Card url={`${(idx + 1)}`}  key={`${Math.random()}`}   /> ) }
        </S.WrapperTenis>

      </S.Main>
      
      <S.Footer>
        <p>Todos os direitos reservados.</p>
      </S.Footer>
    </>
   
  )
}

export default Home