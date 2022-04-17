import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectLoginErrorMsg } from "../store/auth/selectors";
import { login, setLoginErrorMsg } from "../store/auth/slice";
function Login() {
  const dispatch = useDispatch();
  const error = useSelector(selectLoginErrorMsg);
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  // handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (error) dispatch(setLoginErrorMsg(""));
    dispatch(login(credentials));
  };
  return (
    <div className='containter p-5 text-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='email'
            required
            className='from-control'
            placeholder='Enter your email...'
            value={credentials.email}
            onChange={(e) =>
              setCredentials({ ...credentials, email: e.target.value })
            }
          />
        </div>

        <div className='form-group'>
          <input
            type='password'
            required
            className='from-control'
            placeholder='Enter your password...'
            value={credentials.password}
            onChange={(e) =>
              setCredentials({ ...credentials, password: e.target.value })
            }
          />
        </div>
        {error && <div className='text-danger m-3'>{error}</div>}
        <button type='submit' className='btn btn-light'>
          Log In
        </button>
      </form>
    </div>
  );
}

export default Login;
