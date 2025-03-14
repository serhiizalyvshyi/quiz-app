import { useState } from 'react'
import IntlTelInput from 'react-intl-tel-input'
import 'react-intl-tel-input/dist/main.css'

const QuizForm = ({ onSubmit, answers }) => {
	// State to manage form inputs
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
	})

	// State to manage validation errors
	const [errors, setErrors] = useState({})

	// State to manage the submission process
	const [isSubmitting, setIsSubmitting] = useState(false)

	// Function to validate form inputs
	const validateForm = () => {
		const newErrors = {}

		if (!formData.name.trim()) newErrors.name = 'Name is required'

		// Regular expression to validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		if (!formData.email.trim()) {
			newErrors.email = 'Email is required'
		} else if (!emailRegex.test(formData.email)) {
			newErrors.email = 'Invalid email format'
		}

		if (!formData.phone) newErrors.phone = 'Phone number is required'

		setErrors(newErrors)

		return Object.keys(newErrors).length === 0
	}

	// Handle form submission
	const handleSubmit = e => {
		e.preventDefault()

		if (!validateForm()) {
			return
		}

		setIsSubmitting(true)

		onSubmit(formData)

		setIsSubmitting(false)
	}

	return (
		<form onSubmit={handleSubmit} className='registration-form'>
			<h2>Complete the Quiz</h2>
			<p>Please enter your details to complete the registration.</p>
			<div>
				<input
					type='text'
					placeholder='Name'
					value={formData.name}
					onChange={e => setFormData({ ...formData, name: e.target.value })}
				/>
				{errors.name && <span className='error'>{errors.name}</span>}
			</div>
			<div>
				<input
					type='email'
					placeholder='Email'
					value={formData.email}
					onChange={e => setFormData({ ...formData, email: e.target.value })}
				/>
				{errors.email && <span className='error'>{errors.email}</span>}
			</div>
			<div>
				<IntlTelInput
					containerClassName='intl-tel-input'
					inputClassName='form-control'
					value={formData.phone}
					onPhoneNumberChange={(valid, number) => {
						setFormData({ ...formData, phone: number })
					}}
				/>
				{errors.phone && <span className='error'>{errors.phone}</span>}
			</div>
			<button type='submit' disabled={isSubmitting}>
				{isSubmitting ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	)
}

export default QuizForm
