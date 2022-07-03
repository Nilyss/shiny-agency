import DefaultPicture from '../../assets/image.jpeg'
import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'

const freelanceProfile = [
  {
    name: 'Jane Doe',
    jobTitle: 'Devops',
    picture: DefaultPicture,
  },
  {
    name: 'John Doe',
    jobTitle: 'Développeur frontend',
    picture: DefaultPicture,
  },
  {
    name: 'Jeanne Biche',
    jobTitle: 'Développeur fullstack',
    picture: DefaultPicture,
  },
]

const FreelancesContainer = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`

const Subtitle = styled.h2`
  font-style: regular;
  font-size: 1rem;
  color: ${colors.secondary};
  margin-bottom: 4rem;
`

const CardsContainer = styled.div`
display: grid;
gap: 2rem;
grid-template-rows; 350px 350px;
grid-template-columns: repeat(2, 1fr);
`

export default function Freelances() {
  return (
    <FreelancesContainer>
      <h1>Trouvez votre prestataire</h1>
      <Subtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Subtitle>
      <CardsContainer>
        {freelanceProfile.map((profile, index) => (
          <Card
            key={`${profile.name}-${index}`}
            label={`${profile.jobTitle}`}
            picture={`${profile.picture}`}
            title={`${profile.name}`}
          />
        ))}
      </CardsContainer>
    </FreelancesContainer>
  )
}
