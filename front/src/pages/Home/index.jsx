import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import homeIllustration from '../../assets/home-illustration.svg'

const HomeContainer = styled.div`
  margin: 6rem 3rem 3rem 3rem;
  padding: 5rem;
  display: flex;
  flex-flow: row wrap;
  background: ${colors.backgroundLight};
`

const StyledLink = styled(Link)`
  width: 17%;
  text-align: center;
  text-decoration: none;
  color: white;
  font-weight: 700;
  border-radius: 29px;
  padding: 0.5rem 0.3rem 0.5rem 0.3rem;
  background-color: ${colors.primary};
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
