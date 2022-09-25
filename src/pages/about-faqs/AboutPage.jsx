import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const location = useLocation();
  console.log("We are in Route", location.pathname);
  let navigate = useNavigate();
  return (
    <div>
        <h1>About/faqs page</h1>
        <div style={{
          padding: "5px",
          display: "flex",
          flexDirection: "row",
          gap:"5px"
        }}>
          <button className='btn btn-success' onClick={() => navigate("/")}>
            Go To Home
          </button>
          <button className='btn btn-success' onClick={() => navigate(-1)}>
            Go Back
          </button>
        </div>
    </div>
  )
}

export default AboutPage