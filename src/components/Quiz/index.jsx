import { useState } from 'react'
import QuizQuestion from './QuizQuestion'
import QuizProgress from './QuizProgress'
import QuizForm from './QuizForm'
import quizImage from '../../assets/quiz.png'

const Quiz = ({ questions, onFormSubmit }) => {
	const [currentQuestion, setCurrentQuestion] = useState(0)
	// State to store answers and their correctness
	const [answers, setAnswers] = useState([])
	// State to toggle between showing quiz questions or form for submission
	const [showForm, setShowForm] = useState(false)

	// Handle answer selection and move to the next question or show form
	const handleAnswer = answer => {
		const isCorrect = questions[currentQuestion].correctAnswer === answer
		setAnswers([
			...answers,
			{
				question: questions[currentQuestion].question,
				options: questions[currentQuestion].options,
				answer,
				isCorrect,
			},
		])

		// Move to the next question or show form if it's the last question
		if (currentQuestion < questions.length - 1) {
			setCurrentQuestion(currentQuestion + 1)
		} else {
			setShowForm(true)
		}
	}

	// Handle form submission and pass answers to the parent component
	const handleSubmit = formData => {
		const payload = {
			...formData,
			answers,
		}
		onFormSubmit(payload)
	}

	return (
		<div className='quiz-container'>
			<div className='quiz-content'>
				{/* Show question and progress if form is not shown yet */}
				{!showForm ? (
					<>
						<QuizQuestion
							question={questions[currentQuestion].question}
							options={questions[currentQuestion].options}
							onAnswer={handleAnswer}
							correctAnswer={questions[currentQuestion].correctAnswer}
						/>
						<QuizProgress
							current={currentQuestion + 1}
							total={questions.length}
						/>
					</>
				) : (
					// Show form to submit answers once quiz is completed
					<QuizForm
						onSubmit={handleSubmit}
						answers={answers}
						onFormSubmit={onFormSubmit}
					/>
				)}
			</div>
			<div className='quiz-image'>
				<img src={quizImage} alt='Quiz' />
			</div>
		</div>
	)
}

export default Quiz
