import React, { useState } from 'react'

const Form = ({userInfo}) => {
    const [userEmail,setUserEmail] = useState({username:"",password:""})
    function saveUserHandler(event){
        event.preventDefault()
        
        
       return userInfo(userEmail)

    }
    function onchangehandler(event,name){
        
        setUserEmail({...userEmail,[name]:event.target.value})
        
    }
    console.log(userEmail)
  return (
    <div className='w-100 d-flex justify-content-center'>
        <form className='w-50 mt-3' onSubmit={saveUserHandler}>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" value={userEmail.username} onChange={(e)=>onchangehandler(e,'username')} aria-describedby="emailHelp"/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"  value={userEmail.password} onChange={(e)=>onchangehandler(e,'password')}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
  )
}

export default Form