import React from 'react';

const userInputValidation = (initialState, validate, submitHandler) => {
	const [values, setValues] = React.useState(initialState);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				submitHandler(values);
				setSubmitting(false);
			} else {
				setSubmitting(false);
			}
		}
	}, [errors]);

	const handleChangeText = (name, value) => {
		setValues({
			...values,
			[name]: value
		});
	};

	const handleSubmit = () => {
		const validationErrors = validate(values);
		setSubmitting(true);
		setErrors(validationErrors);
	};

	const resetFields = () => {
		setValues(initialState);
		setErrors({});
	};

	return { handleSubmit, handleChangeText, values, errors, isSubmitting, resetFields };
};

export default userInputValidation;