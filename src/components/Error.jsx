import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {

  const navigate = useNavigate();

  return (
    <>
    <div className='container mt-5'>
    <div className="error d-flex flex-column justify-content-lg-center align-items-center">
        {/* <img src="./404.png" alt="error" className='errorimg' /> */}
        <h4>404 Error ! Page Not Found 😭</h4>
        <button className='btn btn-primary mt-2' onClick={()=>navigate("/")}>Redirect Login Page</button>
    </div>

</div>
</>
  )
}

export default Error