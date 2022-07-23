import React, { useState } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [allEntry, setAllEntry] = useState([]);
    const submitForm = () => {
        const newEntry = { username: username, password: password };
        setAllEntry([...allEntry, newEntry]);
        console.log("done");

    }
    return (
        <>
            <form onSubmit={submitForm} className="w-25 mx-auto mt-5 pt-5">
                <div className="mb-3">
                    <label htmlFor='username' className="form-label">Username</label>
                    <input className="form-control" type="text" name='username' id='username' onChange={(e) => setUsername(e.target.value)
                    } />

                </div>
                <div className="mb-3">
                    <label className="form-label" htmlFor='password'>Password</label>
                    <input className="form-control" type="password" name='password' id='password'  value={password} onChange={(e) => setPassword(e.target.value)
                    } />
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Remember me</label>
                </div>
                <Link to='/'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </Link>

            </form>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    };
};
export default connect(mapStateToProps)(Login);