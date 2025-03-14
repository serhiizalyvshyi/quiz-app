import { useState } from 'react'
import Quiz from './components/Quiz'
import SubmittedData from './components/SubmittedData/SubmittedData'
import questions from './data/questions'
import submitQuiz from './api/submitQuiz'

function App() {
	const [submittedData, setSubmittedData] = useState(null)

	// Function to handle form submission
	const handleFormSubmit = async data => {
		try {
			const result = await submitQuiz(data)
			console.log('Server response:', result)
			setSubmittedData(data)
		} catch (error) {
			console.error('Error:', error)
			alert('An error occurred while submitting the form.')
		}
	}

	return (
		<div className='App'>
			<Quiz questions={questions} onFormSubmit={handleFormSubmit} />
			{submittedData && <SubmittedData submittedData={submittedData} />}
		</div>
	)
}

export default App
