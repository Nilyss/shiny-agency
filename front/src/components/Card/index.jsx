import PropTypes from 'prop-types'
import styled from 'styled-components'
import DefaultPicture from '../../assets/profile.png'
import colors from '../../utils/style/color'

const CardLabel = styled.span`
  color: #5843e4;
  font-size: 22px;
  font-weight: bold;
  padding: 1rem;
`
const CardImage = styled.img`
  height: 80px;
  width: 80px;
  border-radius: 50%;
  align-self: center;
`

const CardTitle = styled.span`
  color: black;
  font-size: 22px;
  font-weight: normal;
  align-self: center;
  padding: 2rem;
`

const CardWrapper = styled.div`
  display: flex;
  flex-flow: column;
  padding: 15px;
  background: ${colors.backgroundLight};
  border-radius: 30px;
  transition: 200ms;
  &:hover {
    cursor: pointer;
    box-shadow: 2px 2px 10px #e2e3e9;
  }
`

export default function Card({ label, title, picture }) {
  return (
    <CardWrapper>
      <CardLabel>{label}</CardLabel>
      <CardImage src={picture} alt="freelance" />
      <CardTitle>{title}</CardTitle>
    </CardWrapper>
  )
}

Card.propTypes = {
  label: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
}

Card.defaultProps = {
  label: '',
  title: '',
  picture: `${DefaultPicture}`,
}
