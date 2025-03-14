import AnswerCard from './AnswerCard'

// Component to display the submitted user data along with quiz answers
const SubmittedData = ({ submittedData }) => {
	return (
		<div className='submitted-data'>
			<h2>Submitted Data</h2>
			<p>
				<strong>Name:</strong> {submittedData.name}
			</p>
			<p>
				<strong>Email:</strong> {submittedData.email}
			</p>
			<p>
				<strong>Phone:</strong> {submittedData.phone}
			</p>
			<h3>Quiz Answers:</h3>
			<div className='answers-container'>
				{submittedData.answers.map((answer, index) => (
					<AnswerCard key={index} answer={answer} />
				))}
			</div>
		</div>
	)
}

export default SubmittedData
