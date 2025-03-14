import { AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai'

// Component to display an answer card with the question, selected answer, and correctness
const AnswerCard = ({ answer }) => {
	return (
		<div className='answer-card'>
			<h4>{answer.question}</h4>
			<ul>
				{answer.options.map((option, i) => (
					<li
						key={i}
						className={
							option === answer.answer
								? answer.isCorrect
									? 'correct'
									: 'incorrect'
								: ''
						}
						style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
					>
						<span>{option}</span>
						{/* Show check or cross icon for selected answer */}
						{option === answer.answer &&
							(answer.isCorrect ? (
								<AiOutlineCheckCircle color='green' size={24} />
							) : (
								<AiOutlineCloseCircle color='red' size={24} />
							))}
					</li>
				))}
			</ul>
		</div>
	)
}

export default AnswerCard
