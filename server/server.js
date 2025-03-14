const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express() // Initialize Express application
const port = 3000 // Set the server port

app.use(cors())
app.use(bodyParser.json())

let quizData = null

// POST request to receive quiz data and store it
app.post('/api/submit-quiz', (req, res) => {
	quizData = req.body
	console.log('Received data:', quizData)
	res.status(200).json({ message: 'Data received successfully!' }) // Send success response
})

// GET request to retrieve stored quiz data
app.get('/api/quiz-data', (req, res) => {
	if (quizData) {
		res.status(200).json(quizData)
	} else {
		res.status(404).json({ message: 'No data available' }) // Return error if no data is stored
	}
})

// Start the server
app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`) // Log server start
})
