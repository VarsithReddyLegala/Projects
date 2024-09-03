import './login.css'
function login() {
    return(
        <div class="container">
        <h1>WELCOME TO ONLINE LIBRARY APPLICATION</h1>
        <div className="loginbox">
            <div className='usernamebox'>
            <h1>UserName: </h1>
            <input className='username' type="text"/>
            </div>
            <div className='passwordbox'>
            <h1>Password: </h1>
            <input className='password' type="password"/>
            </div>
            <div className='submitbox'>
            <button>Submit</button>
            </div>
        </div>
    </div>
    );
}

export default login