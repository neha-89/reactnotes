import React, { useState } from 'react'
import { Alert } from 'react-bootstrap';
import Home from './Home';

function Login() {

    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");

    const [flag, setFlag] = useState(false);

    const [home, setHome] = useState(true);


    function handleLogin(e) {
        e.preventDefault();
        let pass = localStorage.getItem('Password').replace(/"/g, "");
        let mail = localStorage.getItem('Email').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!email || !password) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((password !== pass) || (email !== mail)) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }


    return (
        <div>
            {home ? <form onSubmit={handleLogin}>
                <h3>LogIn</h3>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" onChange={(event) => setEmail(event.target.value)} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" onChange={(event) => setPassword(event.target.value)} />
                </div>

                <button type="submit" className="btn btn-dark btn-block">Login</button>

                {flag && <Alert color='primary' variant="warning" >
                    Please fill correct details.
                        </Alert>}
            </form>
                : <Home />
            }

        </div>
    )
}

export default Login
