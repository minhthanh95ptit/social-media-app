import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { register } from '../redux/actions/authAction'
import { Link } from 'react-router-dom'


function Register() {
    const { auth, alert } = useSelector(state => state )
    const dispatch = useDispatch()
    const history = useHistory()

    const initialState = { 
        fullname: '',
        username: '',
        email: '', 
        password: '',
        cf_password: '',
        gender: 'male'
    }
    const [userData, setUserData] = useState(initialState);
    const { fullname, username, email, password, cf_password } = userData

    const [typePass, setTypePass] = useState(false)
    const [typeCfPass, setTypeCfPass] = useState(false)

    useEffect(() =>{
        if(auth.token) history.push("/")
    }, [auth.token, history])
 
 

    const handleChangeInput = e =>{
        const { name, value } = e.target
        setUserData({...userData, [name]:value})
    }

    const handleSubmit = e =>{
        e.preventDefault()
        dispatch(register(userData))
    }

    return (
        <div className="auth_page">
            <form onSubmit={handleSubmit}>
                <h3 className="text-uppercase text-center mb-4">MT-Network</h3>

                <div className="form-group">
                    <label htmlFor="fullname">Full Name</label>
                    <input type="fullname" className="form-control" id="exampleInputFullName" onChange={handleChangeInput} value={fullname} name="fullname" 
                    style={{background: `${alert.fullname ? '#fd2d6a14' : ''}`}} />
                    <small className="form-text text-danger">
                        {alert.fullname ? alert.fullname : ''}
                    </small>
                </div>
                
              
                <div className="form-group">
                    <label htmlFor="username">User Name</label>
                    <input type="username" className="form-control" id="exampleInputUserName" onChange={handleChangeInput} value={username.toLowerCase().replace(/ /g, '')} name="username" 
                    style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}/>
                     <small className="form-text text-danger">
                        {alert.username ? alert.username : ''}
                     </small>
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail" onChange={handleChangeInput} value={email} name="email" style={{background: `${alert.username ? '#fd2d6a14' : ''}`}}/>
                    <small className="form-text text-danger">
                        {alert.email ? alert.email : ''}
                    </small>
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    
                    <div className="pass">
                        <input type={ typePass ? "text" : "password" } className="form-control" id="exampleInputPassword" onChange={handleChangeInput} value={password} name="password" 
                        style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    </div>
                    <small className="form-text text-danger">
                        {alert.password ? alert.password : ''}
                    </small>
                    
                </div>

                <div className="form-group">
                    <label htmlFor="cf_password">Confirm password</label>
                    <div className="pass">
                        <input type={ typeCfPass ? "text" : "password" } className="form-control" id="cf_password" onChange={handleChangeInput} value={cf_password} name="cf_password" 
                        style={{background: `${alert.username ? '#fd2d6a14' : ''}`}} />
                    </div>  

                    <small className="form-text text-danger">
                        {alert.cf_password ? alert.cf_password : ''}
                    </small>
                </div> 
                

                <div className="row justify-content-between mx-0 mb-1">
                    <label htmlFor="male">
                        Male: <input type="radio" id="male" name="gender" value="male" defaultChecked onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="fmale">
                        Female: <input type="radio" id="fmale" name="gender" value="fmale" onChange={handleChangeInput} />
                    </label>

                    <label htmlFor="other">
                        Other: <input type="radio" id="other" name="gender" value="other" onChange={handleChangeInput} />
                    </label>
                </div>

                <button type="submit" className="btn btn-dark w-100">Register</button>
                <p className="my-2">
                    You already have an account? <Link to="/login" style={{color: "crimson"}}>Login Now</Link>
                </p>
            </form>
        </div>
    )
}

export default Register
