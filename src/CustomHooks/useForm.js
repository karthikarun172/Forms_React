import React, { useState } from 'react'

function useForm(initialValue, validateOnChange = false, validate) {
    const [formValues, setFormValues] = useState(initialValue)
    const [errors, setErrors] = useState({})


    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues, [name]: value
        })
        if (validateOnChange) {
            validate({ [name]: value })
        }
    }



    return {
        formValues,
        setFormValues,
        handleChange,
        errors,
        setErrors

    }
}

export default useForm