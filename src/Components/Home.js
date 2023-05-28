import React from "react";
import "./style.css";
import bannerImage from "../assets/Banner.jpg";
import biologyImage from "../assets/Biology.png";
import chemistryImage from "../assets/Chemistry.png";
import physicsImage from "../assets/Physics.png";
import mathImage from "../assets/Math.png";
import economicsImage from "../assets/Economics.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://fonts.googleapis.com/css2?family=Bitter:wght@500&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdn.jsdelivr.net/npm/remixicon@3.0.0/fonts/remixicon.css"
        rel="stylesheet"
      />
      <link
        rel="icon"
        type="image/png"
        href="https://drive.google.com/uc?export=view&id=1d1G_xyCTgf7FMIHAY2jMVrohQ8qcUp2Z"
      />
      <title>Chain of Education</title>
      <div className="banner-container">
        <img src={bannerImage} alt="banner" className="banner" />
        <div className="banner-text">
          <h1>INTERVENTION PROGRAM</h1>
          <hr />
          <p className="subtext">
            {" "}
            Engage your mind and experience the true power of learning with
            interactive problem solving, the most effective and enjoyable way
            for lifelong learning.
          </p>
        </div>
      </div>
      <div className="appointment">
        <div className="line line-red" />
        <Link to="/home">
          <a href="https://calendly.com/coe-tutors" class="appoint">
            Book An Appointment
          </a>
        </Link>
        <div className="line line-black" />
      </div>
      <div className="card-grid">
        <div className="card">
          <Link to="/biology">
            <img src={biologyImage} alt="Avatar" style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4>
              <b>Biology</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/chemistry">
            <img src={chemistryImage} alt="Avatar" style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4>
              <b>Chemistry</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/physics">
            <img src={physicsImage} alt="Avatar" style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4>
              <b>Physics</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/math">
            <img src={mathImage} alt="Avatar" style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4>
              <b>Math</b>
            </h4>
          </div>
        </div>
        <div className="card">
          <Link to="/economics">
            <img src={economicsImage} alt="Avatar" style={{ width: "100%" }} />
          </Link>
          <div className="container">
            <h4>
              <b>Economics</b>
            </h4>
          </div>
        </div>
      </div>
      <div className="experience">
        <div className="line line-red" />
        <p className="exp">
          With our 40+ years of EXPERIENCE, Our courses are crafted by <br />{" "}
          professionals and teachers hailing from
        </p>
        <div className="line line-black" />
      </div>
      <div className="uni">
        <div className="name">Harvard</div>
        <div className="name">LAU</div>
        <div className="name">AUB</div>
        <div className="name">MEPI</div>
      </div>
      <div className="line line-red" />
      <footer>
        <img src={bannerImage} alt="footer" className="footer" />
        <div className="footerLogo">
          <img
            src="https://drive.google.com/uc?export=view&id=1d1G_xyCTgf7FMIHAY2jMVrohQ8qcUp2Z"
            alt="Avatar"
          />
          <div>
            <h2>Chain of Education</h2>
            <p>
              Your #1 Supporter to unlock your utmost <br /> potential and excel
              academically
            </p>
          </div>
          <div className="contact">
            <div>
              <h4>Contact us</h4>
              <a href="mailto: coeintervetion.programs@gmail.com">Email</a>
              <p>All operations are remote</p>
              <div className="socialIcons">
                <a
                  href="https://www.instagram.com/chainofeducation/"
                  target="_blank"
                  className="social-link"
                >
                  <i className="ri-instagram-line" />
                </a>
                <a
                  href="https://www.linkedin.com/company/chain-of-education/https://www.linkedin.com/company/chain-of-education/"
                  target="_blank"
                  className="social-link"
                >
                  <i className="ri-linkedin-box-line" />
                </a>
                <a
                  href="mailto: coeintervetion.programs@gmail.com"
                  target="_blank"
                  className="social-link"
                >
                  <i className="ri-mail-line" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
