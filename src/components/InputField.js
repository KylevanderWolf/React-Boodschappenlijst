import React, { useState } from 'react'

//Styling
const styles = {
    formField: {
        backgroundColor: 'white',
        padding: '10px',
        display: 'flex',
        justifyContent: 'center'
    },
    inputField: {
        padding: '5px',
        border: 'none',
        outline: 'none',
        border: '2px solid #a2a2a2',
        borderRadius: '5px'
    },
    submitBtn: {
        marginLeft: '5px',
        backgroundColor: 'purple',
        color: "white",
        padding: '10px 15px',
        border: 'none',
        outline: 'none',
        cursor: 'pointer',
        boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
        borderRadius: '5px'
    }
}


function InputField({ submitItem }) {
    const [inputValue, setinputValue] = useState('')

    const handleChange = (e) => {
        setinputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        submitItem(inputValue)
    }

    return (
        <div>
            <form
                style={styles.formField}
                onSubmit={handleSubmit}>

                <input
                    className="inputField"
                    style={styles.inputField}
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    autoFocus
                    required
                />
                <button
                    style={styles.submitBtn}
                    type="submit">
                    Voeg toe
                </button>
            </form>
        </div>
    )
}
export default InputField