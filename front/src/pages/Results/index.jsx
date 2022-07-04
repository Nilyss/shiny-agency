import styled from 'styled-components'

export default function Results() {

    const ResultWrapper = styled.div `
    display: flex;
    justify-content: center;
    `

    const Title = styled.h1 `
    display: flex;
    `

  return (
    <ResultWrapper>
      <Title>Résultat des questionaires :</Title>
    </ResultWrapper>
  )
}
