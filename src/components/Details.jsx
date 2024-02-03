import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";

const Details = () => {
  const [logindata, setLoginData] = useState([]);

  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((elem, k) => {
        return elem.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("Happy Birthday");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = ()=>{
    localStorage.removeItem("user_login")
    navigate("/");
}

  useEffect(() => {
    Birthday();
  }, []);

  return (
    <>
    <div className='container mt-5 d-flex flex-column justify-content-lg-center align-items-center'>
      {logindata.length === 0 ? "error": 
        <>
          <h1>Details Page</h1>
          <h2>{logindata[0].name}👋🏼</h2>
          <Button className="mt-2" onClick={userlogout}>LogOut</Button>
           {
            logindata[0].date === todayDate ? 
            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{logindata[0].name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Welcome
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>:""
           }
          
        </>
      }
      </div>
    </>
  );
};

export default Details;
