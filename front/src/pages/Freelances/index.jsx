import Card from '../../components/Card'
import styled from 'styled-components'
import colors from '../../utils/style/color'
import { useState, useEffect } from 'react'
import { Loader } from '../../utils/style/Atoms'

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

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export default function Freelances() {
  const [isDataLoading, setDataLoading] = useState(false)
  const [freelancersList, setFreelanceList] = useState([])
  const [error, setError] = useState(false)

  useEffect(() => {
    async function fetchFreelance() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/freelances`)
        const { freelancersList } = await response.json()
        setFreelanceList(freelancersList)
      } catch (error) {
        console.log('Erreur ====>', error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchFreelance()
  }, [])

  if (error) {
    return <span>Oups, il y as eu un problème !</span>
  }

  return (
    <FreelancesContainer>
      <h1>Trouvez votre prestataire</h1>
      <Subtitle>
        Chez Shiny nous réunissons les meilleurs profils pour vous.
      </Subtitle>
      {isDataLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <CardsContainer>
          {freelancersList.map((profile, index) => (
            <Card
              key={`${profile.name}-${index}`}
              label={`${profile.job}`}
              picture={`${profile.picture}`}
              title={`${profile.name}`}
            />
          ))}
        </CardsContainer>
      )}
    </FreelancesContainer>
  )
}
