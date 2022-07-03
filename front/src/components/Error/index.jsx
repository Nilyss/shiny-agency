import illustration from '../../assets/404.png'
import styled from 'styled-components'

export default function Error() {
  const Illustration = styled.img`
    width: 100%;
  `
  const ErrorContainer = styled.div`
    width: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
  `
  const ErrorTitle = styled.h1`
    margin-bottom: -10rem;
  `

  const ErrorSubtitle = styled.h2`
    margin-top: -15rem;
  `

  return (
    <ErrorContainer>
      <ErrorTitle>Oops...</ErrorTitle>
      <Illustration src={illustration} />
      <ErrorSubtitle>Il semblerait qu'il y as un problème !</ErrorSubtitle>
    </ErrorContainer>
  )
}
