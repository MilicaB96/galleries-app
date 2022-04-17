import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../store/auth/slice";
function Register() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
    terms_and_conditions: false,
  });
  //handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData));
  };
  return (
    <div className='containter m-3 text-center'>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <input
            type='text'
            required
            className='from-control'
            placeholder='Enter first name...'
            value={userData.first_name}
            onChange={(e) =>
              setUserData({ ...userData, first_name: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            required
            className='from-control'
            placeholder='Enter last name...'
            value={userData.last_name}
            onChange={(e) =>
              setUserData({ ...userData, last_name: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            required
            className='from-control'
            placeholder='Enter email...'
            value={userData.email}
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            required
            min='8'
            pattern='(?=.*\d).{8,}'
            title='Password must be 8 charachters long and contain at least one number'
            className='from-control'
            placeholder='Enter password...'
            value={userData.password}
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            required
            className='from-control'
            placeholder='Confirm password...'
            value={userData.password_confirmation}
            onChange={(e) =>
              setUserData({
                ...userData,
                password_confirmation: e.target.value,
              })
            }
          />
        </div>
        <div className='form-group form-check'>
          <input
            type='checkbox'
            required
            className='form-check-input'
            name='terms_and_conditions'
            checked={userData.terms_and_conditions}
            onChange={(e) =>
              setUserData({
                ...userData,
                terms_and_conditions: e.target.checked,
              })
            }
            id='terms_and_conditions'
          />
          <label htmlFor='terms_and_conditions' className='form-check-label'>
            I accept the terms and conditions
          </label>
        </div>
        <button type='submit' className='btn btn-light'>
          Register
        </button>
      </form>
      {console.log(userData)}
    </div>
  );
}

export default Register;
