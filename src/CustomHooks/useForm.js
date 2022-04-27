import React, { useState } from 'react'

function useForm(initialValue) {
    const [formValues, setFormValues] = useState(initialValue)


    const handleChange = e => {
        const { name, value } = e.target
        setFormValues({
            ...formValues, [name]: value
        })
    }

    return {
        formValues,
        setFormValues,
        handleChange,

    }
}

export default useForm