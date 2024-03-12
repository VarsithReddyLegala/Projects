import './Login.css';
import { Link } from 'react-router-dom';
function Login() {

    function handleSubmit(event) {
        event.preventDefault();
        const username = event.target.elements.username.value;
        const password = event.target.elements.password.value;
        
        if (username === 'admin' && password === 'test@123') {
            window.location.href = "/home";
        } else {
            alert("Invalid username or password.");
        }
    }

    return (
        <div className="Login">
            <div className="SubmittionForm">
                <div className="welcome">
                    <h1>LOGIN</h1>
                </div>
                <form className="inputFields" onSubmit={handleSubmit}>
                    <label htmlFor="username"><b>UserName:</b></label>
                    <input type="text" id="username" name="username" className="username" required />
                    <label htmlFor="password"><b>Password:</b></label>
                    <input type="password" id="password" name="password" className="password" required />
                    <br />
                    <input type="submit" value="Submit" className="submitButton" />
                </form>
                <div className="signupLink">
                    <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
                </div>
            </div>
        </div>
    );
}

export default Login;
