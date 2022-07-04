import styled from 'styled-components'
import colors from '../../utils/style/color'
import homeIllustration from '../../assets/home-illustration.svg'
import { StyledLink } from '../../utils/style/Atoms'

const HomeContainer = styled.div`
  margin: 6rem 3rem 3rem 3rem;
  padding: 5rem;
  display: flex;
  flex-flow: row wrap;
  background: ${colors.backgroundLight};
`

const HomeTitle = styled.div`
  width: 40%;
  font-size: 4rem;
  margin-top: 8rem;
  margin-right: 10%;
`

const HomeIllustration = styled.img`
  width: 50%;
  margin-top: 3rem;
`

export default function Home() {
  return (
    <HomeContainer>
      <HomeTitle>
        Repérez vos besoins, on s'occupe du reste, avec les meilleurs talents
      </HomeTitle>
      <HomeIllustration
        src={homeIllustration}
        alt="illustration page d'accueil"
      />

      <StyledLink to="/survey/1" $isFullLink>
        Faire le test
      </StyledLink>
    </HomeContainer>
  )
}
