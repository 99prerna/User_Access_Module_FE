import React from "react";
import { Link } from "react-router-dom";
import Introduction from "../../components/Introduction";
import reactImg from '../../public/react.svg';
import nodeImg from '../../public/nodejs.svg';
import DatabaseImg from '../../public/database.png';  
import expressImg from '../../public/expressjs.svg';   
import Dcoker from '../../public/docker.svg';   
import ansible from '../../public/ansible.svg';   
import jenkins from '../../public/jenkins.svg';   
import aws from '../../public/AWS.svg'; 
import person from '../../public/person.svg';  
import github from '../../public/github.svg';
import linkedin from '../../public/linkedin.svg';   

const HomePage = () => {
  const styles = {
    entirePage: {
      width: 100 + 'vw',
      height: 100 + 'vh'
    }
  }

  return (
    <div>
      {/* Header */}
      <div style={styles.entirePage}>
        <header className="header d-flex justify-content-between align-items-cener px-4 py-3 border-bottom">
          <div className="d-flex justify-content-center align-items-center">
            <p className="fs-6 fw-light text-secondary text-uppercase mb-0">Access Control</p>
          </div>
          <Link to="/login" className="btn btn-outline-primary text-decoration-none py-2 fw-light px-4 rounded-pill">
              Login
          </Link>
        </header>
        <Introduction />
      </div>

      {/* Main content */}
      <div className="d-flex p-4 justify-content-center align-items-center">
        <div id="about-me" className="w-75 border shadow-sm rounded p-4 text-center">
          <p className="text-uppercase fw-bold text-secondary fs-3 border-bottom pb-3">About Project</p>
            <div className="d-flex justify-content-center align-items-center">
              <img src={person} width={150} height={250} className="mx-5" alt="" />
              <p className="pr-5  fw-light">
              This project is designed to deliver a secure, scalable, and user-friendly solution for managing user roles, permissions, and authentication within web applications. It allows administrators to efficiently assign roles, control access, and monitor user activities, ensuring that only authorized users can access specific features and data.
              </p>
            </div>
          </div>
      </div>

      <div className="pt-5">
        <div className="my-5 pt-5">
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-uppercase fw-semibold text-center text-secondary fs-3 border-bottom pb-3 w-50">Development Tools</p>
        </div>
        <div className="container">
          <div className="row p-5">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={reactImg} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">ReactJS</p>
                <p className="fw-light text-secondary mb-0">Used to interact with the project.</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={nodeImg} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">NodeJS</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
          </div>
          <div className="row p-5">
          <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={DatabaseImg} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">RDS Cloud DB</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={expressImg} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">ExpressJS</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>


      <div className="pb-5">
        <div className="mt-5 py-5">
        <div className="d-flex justify-content-center align-items-center">
          <p className="text-uppercase fw-semibold text-center text-secondary fs-3 border-bottom pb-3 w-50">Deployment Tools</p>
        </div>
        <div className="container">
          <div className="row p-5">
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={jenkins} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">Jenkins</p>
                <p className="fw-light text-secondary mb-0">Used to interact with the project.</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={ansible} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">Ansible</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
          </div>
          <div className="row p-5">
          <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={Dcoker} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">Docker</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div>
                <img src={aws} width={50} height={50} alt="" />
              </div>
              <div className="ms-2">
                <p className="text-medium mb-0">Amazon EC2</p>
                <p className="fw-light text-secondary mb-0">Handles the request from the users.</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div className="d-flex justify-content-around align-items-center" style={{ width: '100vw', height: '30vh', backgroundColor: '#d7d7d7' }}>
        <div className="row justify-content-around align-items-center" style={{ width: '70vw', height: '30vh' }}>
          <div className="col-2">
            <h1>Communication</h1>
            <div>
              <img src={github} className="mx-2" width={50} height={50} alt="" />
              <img src={linkedin} className="mx-2" width={50} height={50} alt="" />
            </div>
          </div>
          <div className="col-2">
          
          </div>
          <div className="col-2">
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
