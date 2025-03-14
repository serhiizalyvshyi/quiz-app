const QuizProgress = ({ current, total }) => (
	// Displays the current progress of the quiz
	<div className='progress'>
		Question {current} of {total}
	</div>
)

export default QuizProgress
