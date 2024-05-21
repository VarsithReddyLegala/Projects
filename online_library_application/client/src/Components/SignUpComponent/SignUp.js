import React, { useState } from 'react';
import Navbar from "../NavbarComponent/Nav";
import './SignUp.css'; // Import the CSS file

function SignUp() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [retypepassword, setRetypePassword] = useState('');
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        setSuccess(false);
        if(retypepassword===password){

        try {
            const response = await fetch('http://localhost:4000/adduser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json(); // Parse JSON response
            console.log('Success:', data);
            setSuccess(true);
        } catch (error) {
            console.error('Error:', error);
            setError('Sign up failed. Please try again.');
        }
      }
      else {
        setError('Password and Retype-Password does not match');
      }
    };

    return (
        <div className="App">
            <Navbar />
            <div className="sign-up-form-wrapper">
                <div className="sign-up-form-container">
                    <h2>Sign Up</h2>
                    <form className="sign-up-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="Retype-password">Re-type Password:</label>
                            <input
                                type="password"
                                id="Retype-password"
                                value={retypepassword}
                                onChange={(e) => setRetypePassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="submit-button">Sign Up</button>
                    </form>
                    {success && <p className="success-message">Sign up successful!</p>}
                    {error && <p className="error-message">{error}</p>}
                </div>
            </div>
        </div>
    );
}

export default SignUp;
