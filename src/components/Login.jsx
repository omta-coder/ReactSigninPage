import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from "react-router-dom";
import Image from "./Image";

const Login = () => {

    const navigate = useNavigate();

    const [inpdata, setInpdata] = useState({
        email:"",
        password:""
    });

    const [data, setData] = useState([]);

    const getdata =(e)=>{
        const {value,name} = e.target;

        setInpdata(()=>{
            return{...inpdata,[name]: value}
        })
    }

    const addData = (e) =>{
        e.preventDefault();

        const getuserArr = localStorage.getItem("userinfo");
        console.log(getuserArr);
       
       const {email,password} = inpdata;
       if(email === ""){
            toast.error("email field is requred!");
        }else if(!email.includes("@")){
            toast.error("plz enter valid email addres");
        }else if(password === ""){
            toast.error("password field is requred");
        }else if(password.length < 5){
            toast.error("password length greater five");
        }else{
            
            if(getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr);
                console.log(userdata);
                const userlogin = userdata.filter((elem,k)=>{
                    return  elem.email == email && elem.password == password;
                });
                if(userlogin.length === 0){
                    toast.error("Invalid Details");
                }else{
                    toast.success("User Login Successfully");
                    localStorage.setItem("user_login",JSON.stringify(userlogin));
                    navigate("/details");
                }
            }
        }
    }
    

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign In</h3>

            <Form>
              
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                <Form.Control type="password" name="password" onChange={getdata} placeholder="Password" />
              </Form.Group>
              <Button variant="primary" onClick={addData} className='col-lg-6' style={{ background: "rgb(67, 185, 127)" }} type="submit">
                Submit
              </Button>
            </Form>
            <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
          </div>
          <Image/>
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Login