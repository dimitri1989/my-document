import React, { useState } from 'react';

const Form = ({ userInfo }) => {
  const [userEmail, setUserEmail] = useState({ username: '', password: '' });
  const [authorized,setAuthorized] = useState(false)
  const [border,setBorderDanger] = useState("form-control")
  const [borderpasword,setBorderpasword] = useState("form-control pasword")
  var validRegexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  var regularExpressionPasword = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  function saveUserHandler(event) {
    event.preventDefault();
    setAuthorized(true);
  }

  function onchangehandler(event, name) {
    if(!userEmail.username.match(validRegexEmail)){
      console.log("ar udris")
      setBorderDanger("form-control border border-danger")
    }else{
      setBorderDanger("form-control border border-success")
    }
    if(!userEmail.password.match(regularExpressionPasword)){
      setBorderpasword("form-control border border-danger")
      console.log("ar udrisss")
    }
    else{console.log("else")
    setBorderDanger("form-control border border-success")
   }
    setUserEmail({ ...userEmail, [name]: event.target.value });
    
  }
  return (
    <div className="w-100 d-flex justify-content-center">
      <form className="w-50 mt-3" onSubmit={saveUserHandler}>
        <div className="mb-2">
          <label  className="form-label">
            Email address
          </label>
          <input
            type="email"
            className={border}
            id="exampleInputEmail1"
            value={userEmail.username}
            onChange={(e) => onchangehandler(e, 'username')}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Password
          </label>
          <input
            type="password"
            className={borderpasword}
            id="exampleInputPassword1"
            value={userEmail.password}
            onChange={(e) => onchangehandler(e, 'password')}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" >
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
