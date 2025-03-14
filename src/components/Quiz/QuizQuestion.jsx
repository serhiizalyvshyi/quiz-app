import { useState } from 'react'

const QuizQuestion = ({ question, options, onAnswer, correctAnswer }) => {
	// State to track the selected answer
	const [selectedAnswer, setSelectedAnswer] = useState(null)
	// State to prevent multiple selections
	const [isAnswered, setIsAnswered] = useState(false)

	// Handles answer selection and provides a brief delay before proceeding
	const handleAnswer = option => {
		if (isAnswered) return

		setSelectedAnswer(option)
		setIsAnswered(true)

		setTimeout(() => {
			onAnswer(option)
			setSelectedAnswer(null)
			setIsAnswered(false)
		}, 1000)
	}

	return (
		<div className='quiz-question'>
			<h3>{question}</h3>
			<div className='options'>
				{options.map((option, index) => {
					const isCorrect = option === correctAnswer
					const isSelected = option === selectedAnswer
					const buttonClass = isSelected
						? isCorrect
							? 'correct'
							: 'incorrect'
						: ''

					return (
						<button
							key={index}
							className={`answer-button ${buttonClass}`}
							onClick={() => handleAnswer(option)}
							disabled={isAnswered}
						>
							{option}
						</button>
					)
				})}
			</div>
		</div>
	)
}

export default QuizQuestion
