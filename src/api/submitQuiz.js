// Function to submit quiz data to the server
const submitQuiz = async data => {
	try {
		// Send POST request with quiz data
		const response = await fetch('http://localhost:3000/api/submit-quiz', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify(data),
		})

		// Check if the response is successful
		if (response.ok) {
			const result = await response.json()
			console.log('Server response:', result)
			return result
		} else {
			throw new Error('Failed to submit data')
		}
	} catch (error) {
		console.error('Error:', error)
		throw error
	}
}

export default submitQuiz
