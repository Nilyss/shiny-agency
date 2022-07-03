import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Survey() {
  const { questionNumber } = useParams()
  const questionNumberInt = parseInt(questionNumber)
  const previousQuestionNumber =
    questionNumberInt === 1 ? 1 : questionNumberInt - 1
  const nextQuestionNumber = questionNumberInt + 1

  return (
    <div>
      <h1>Questionnaire 🧮</h1>
      <h2>Question {questionNumber}</h2>
      <Link to={`/survey/${previousQuestionNumber}`}>Question précédente</Link>
      {questionNumberInt === 10 ? (
        <Link to="/results">Voir les résultats</Link>
      ) : (
        <Link to={`/survey/${nextQuestionNumber}`}>Question suivante</Link>
      )}
    </div>
  )
}
