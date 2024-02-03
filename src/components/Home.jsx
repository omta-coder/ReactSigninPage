import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink, useNavigate } from "react-router-dom";
import Image from "./Image";

const Home = () => {
    const navigate = useNavigate();

    const [inpdata, setInpdata] = useState({
        name:"",
        email:"",
        date:"",
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
       
        const {name,email,date,password} = inpdata;

        if(name ===""){
            toast.error("name field is requred!");
        }else if(email === ""){
            toast.error("email field is requred!");
        }else if(!email.includes("@")){
            toast.error("plz enter valid email addres");
        }else if(date === ""){
            toast.error("date field is requred");
        }else if(password === ""){
            toast.error("password field is requred");
        }else if(password.length < 5){
            toast.error("password length greater five");
        }else{
            navigate("/login");
            localStorage.setItem("userinfo",JSON.stringify([...data,inpdata]));
        }
    }
    
  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
            <h3 className="text-center col-lg-6">Sign Up</h3>

            <Form>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="text"
                  name="name"
                  onChange={getdata}
                  placeholder="Enter your name"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  onChange={getdata}
                  placeholder="Enter Your email"
                />
              </Form.Group>
              <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                <Form.Control name="date" onChange={getdata} type="date" />
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
  );
};

export default Home;
