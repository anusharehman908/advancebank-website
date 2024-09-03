import React, { useState } from 'react';
import Navbar from './Navbar';

const Form = ({ onFormSubmit }) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });

    const [submitted, setSubmitted] = useState(false);
    const [emailError, setEmailError] = useState('');

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });

        if (e.target.name === 'email') {
            setEmailError(''); // Reset email error on each email change
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailOccurrences = formData.email.split(',').length;

        if (emailOccurrences > 1) {
            setEmailError('Please enter your email only once.');
        } else {
            setSubmitted(true); // Form successful submission
            onFormSubmit(); // Trigger the callback to show the whole website
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2>Register</h2>
            <div style={styles.inputGroup}>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
            </div>
            <div style={styles.inputGroup}>
                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
                {emailError && <p style={styles.error}>{emailError}</p>}
            </div>
            <div style={styles.inputGroup}>
                <label>Password:</label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    style={styles.input}
                />
            </div>
            <button type="submit" style={styles.button}>Submit</button>
        </form>
    );
};

const styles = {
    form: {
        maxWidth: '400px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        backgroundColor: '#f9f9f9',
    },
    inputGroup: {
        marginBottom: '15px',
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '5px 0 10px 0',
        display: 'inline-block',
        border: '1px solid #ccc',
        borderRadius: '4px',
        boxSizing: 'border-box',
    },
    button: {
        width: '100%',
        backgroundColor: '#4CAF50',
        color: 'white',
        padding: '14px 20px',
        margin: '8px 0',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    },
    error: {
        color: 'red',
        fontSize: '14px',
    }
};

export default Form;
