import style from '../register/Register.module.css'
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../context/UserContext';

export function Login() {
    const ctx = useContext(UserContext);
    const userLoggedIn = ctx.user.loggedIn;
    // console.log(userLoggedIn);

    const navigate = useNavigate();
    const [loginErr, setLoginErr] = useState('');
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const [password, setPass] = useState('');
    const [passErr, setPassErr] = useState('');

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePass(e) {
        setPass(e.target.value);
    }

    function isValidEmail(e) {
        const { value } = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setEmailErr(`Email to short. Minimum ${minSize} symbols.`);
        }
        return setEmailErr('');
    }

    function isValidPass(e) {
        const { value } = e.target;
        const minSize = 6;

        if (value.length < minSize) {
            return setPassErr(`Pass to short. Minimum ${minSize} symbols.`);
        }
        return setPassErr('');
    }

    function handleSubmit(e) {
        e.preventDefault();

        fetch('http://localhost:3001/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            }),
        }).then(res => res.json())
            .then(data => {
                if (data.status === 'err-list'){
                    for(const item of data.errors){
                        if(item.input === 'email'){
                            setEmailErr(item.message)
                        }
                        if(item.imput === 'password'){
                            setPassErr(item.message)
                        }
                    }

                    
                }
                if (data.status === 'err'){
                    setLoginErr(data.message)
                }
                if (data.status === 'ok'){
                    console.log('prisijunge');
                    ctx.loginUser();
                    
                    navigate('/dashboard')
                }
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className={`form-signin w-100 m-auto ${style.form}`}>
            <form onSubmit={handleSubmit}>
                <img className="mb-4" src={Logo} alt="" width="72" height="57"/>
                <h1 className="h3 mb-3 fw-normal text-center">Please sign in</h1>

                {
                    loginErr && (
                        <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            {loginErr}
                            <button onClick={() => setLoginErr('')} type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                    )
                }

                <div className="form-floating mb-3">
                    <input onChange={updateEmail} value={email} onBlur={isValidEmail} 
                        className={`form-control ${emailErr ? 'is-invalid' : ''}`} 
                        type="email" id="email" />
                    <label htmlFor="floatingInput">Email address</label>
                    <div className="invalid-feedback">{emailErr}</div>
                </div>
                <div className="form-floating">
                    <input onChange={updatePass} value={password} type="password" onBlur={isValidPass}
                        className={`form-control ${passErr ? 'is-invalid' : ''}`} id="password" />
                    <label htmlFor="floatingPassword">Password</label>
                    <div className="invalid-feedback">{passErr}</div>
                </div>

                <div className="form-check text-start my-3">
                    <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="flexCheckDefault">Remember me</label>
                </div>
                <button className="btn btn-primary w-100 py-2" type="submit">Login</button>
                <p className="mt-1 mb-3 text-center text-body-secondary">or</p>
                <Link className="btn btn-primary w-100 py-2" to="/register">Register</Link>

            </form>
        </div>
    );
  }
  