import { useState } from 'react'

// Custom hook for form validation
const useFormValidation = () => {
	const [errors, setErrors] = useState({})

	// Function to validate an email address using a regular expression
	const validateEmail = email => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
		return re.test(email)
	}

	// Function to validate the form data
	const validateForm = formData => {
		const newErrors = {}

		if (!formData.name.trim()) newErrors.name = 'Name required'
		if (!validateEmail(formData.email)) newErrors.email = 'Invalid email'
		if (!formData.phone) newErrors.phone = 'Phone required'

		// Update the errors state with the new errors
		setErrors(newErrors)

		// Return true if there are no errors, otherwise false
		return Object.keys(newErrors).length === 0
	}

	// Return errors state and validateForm function to use in components
	return { errors, validateForm }
}

export default useFormValidation
