import "./navbar.css";
import { Link } from "react-router-dom";
import React from "react";
import pdf from "../../sdd.pdf";
import pdf2 from "../../srs.pdf";

const Navbar = ({ user, login, logout, setLoginEmail, setLoginPassword }) => {
  return (
    <div className="container">
      <div className="Logo">
        <Link to="/">InART</Link>
      </div>
      <div className="center">
        <ul className="list">
          <li className="listItem">
            <a
              href="https://csns.cysun.org/department/cs/project/view?id=7873469"
              target="_blank"
              rel="noreferrer"
            >
              CSNS
            </a>
          </li>
          <li className="listItem">
            <a href={pdf2} target="_blank" rel="noreferrer">
              SRS
            </a>
          </li>
          <li className="listItem">
            <a href={pdf} target="_blank" rel="noreferrer">
              SDD
            </a>
          </li>
          <li className="listItem">
            <Link to="/todo">Todo</Link>
          </li>
          <li className="listItem">
            <a
              href="https://drive.google.com/drive/folders/1By442yVL7UxpRAgZgF2EpW5QcbXDcaZ1"
              target="_blank"
              rel="noreferrer"
            >
              Google Drive
            </a>
          </li>
          {/* <li className="listItem">
            <Link to="/changelog">Changelog</Link>
          </li> */}
        </ul>
        {!user ? (
          <div className="login-form">
            <input
              className="login-username"
              type="text"
              placeholder="Username..."
              onChange={(event) => {
                setLoginEmail(event.target.value);
              }}
            />
            <input
              className="login-password"
              type="password"
              placeholder="Password..."
              onChange={(event) => {
                setLoginPassword(event.target.value);
              }}
            />
            <button className="login-button" onClick={login}>
              Login
            </button>
          </div>
        ) : (
          <button className="logout-button" onClick={logout}>
            Logout
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
