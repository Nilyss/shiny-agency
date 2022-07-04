import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Loader } from '../../utils/style/Atoms'

export default function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const prevQuestionNumber = questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1
  const [surveyData, setSurveyData] = useState({})
  const [isDataLoading, setDataLoading] = useState(false)
  const [error, setError] = useState(false)

  const SurveyContainer = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;    
  `
  const QuestionTitle = styled.h1`
    font-size: 2rem;
    width: 80%;
  `
  const QuestionContent = styled.h2`
    font-size: 1.5rem;
    width: 80%;
  `
  const LinkWrapper = styled.nav`
    display: flex;
    width: 100%;
    justify-content: space-around;
    text-decoration: none;
  `
  const LinkStyled = styled(Link)`
    margin-top: 4rem;
    text-decoration: none;
    color: black;
  `


  useEffect(() => {
    async function fetchSurvey() {
      setDataLoading(true)
      try {
        const response = await fetch(`http://localhost:8000/survey`)
        const { surveyData } = await response.json()
        setSurveyData(surveyData)
      } catch (error) {
        console.log(error)
        setError(true)
      } finally {
        setDataLoading(false)
      }
    }
    fetchSurvey()
  }, [])

  if (error) {
    return <span>Oups, il y as eu un problème !</span>
  }

  return (
    <SurveyContainer>
      <QuestionTitle>Question {questionNumber}</QuestionTitle>
      {isDataLoading ? (
        <Loader />
      ) : (
        <QuestionContent>{surveyData[questionNumber]} </QuestionContent>
      )}
      <LinkWrapper>
        <LinkStyled to={`/survey/${prevQuestionNumber}`}>Question Précédente</LinkStyled>
        {surveyData[questionNumberInt + 1] ? (
          <LinkStyled to={`/survey/${nextQuestionNumber}`}>Question suivante</LinkStyled>
        ) : (
          <LinkStyled to={`/results`}>Résultats</LinkStyled>
        )}
      </LinkWrapper>
    </SurveyContainer>
  )
}
