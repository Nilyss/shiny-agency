import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import logo from '../../assets/dark-logo.png'

const HeaderStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 30px;
  padding-left: 33px;
  margin-bottom: 5rem;
`

const StyledLink = styled(Link)`
  margin-right: 33px;
  padding: 15px;
  color: #8186a0;
  text-decoration: none;
  font-weight: 700;
  font-size: 20px;
  line-height: 23px;
  ${(props) =>
    props.$isFullLink &&
    `
    color: white; 
    border-radius: 29px;
    padding: .5rem 3rem .5rem 3rem;
    background-color: ${colors.primary};
    `}
`

const ShinyLogo = styled.img`
  with: 187.63px;
  height: 70px;
`

export default function Header() {
  return (
    <HeaderStyle>
      <ShinyLogo src={logo} alt="Logo Shiny" />
      <nav className="headerNav">
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/freelance">Profils</StyledLink>
        <StyledLink to="/survey/1" $isFullLink>
          Faire le test
        </StyledLink>
      </nav>
    </HeaderStyle>
  )
}
