import React from "react";
import "../CSS/home.css";

function Header() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const headerMenu = () => {
    setShowMobileNav(!showMobileNav);
  };
  return (
    <div className="nav-section">
      <div className="container">
        <nav className="navbar navbar-expand-lg">
          <a className="navbar-brand" href="/#">
            <img
              src={require("../images/logo.png")}
              className="img-fluid"
              alt="altImage"
            />
          </a>
          <button
            className="navbar-toggler"
            style={{ outline: "none" }}
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={headerMenu}
          >
            <span className="navbar-toggler-icon">
              <i
                className="fa fa-bars"
                style={{ color: "#fff", fontSize: "28px" }}
              />
            </span>
          </button>
          <div
            className={
              showMobileNav
                ? "navbar-collapse collapse show "
                : "collapse navbar-collapse"
            }
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#planmenu">
                  Plans
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Featuresmenu">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Successmenu">
                  Success
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#FAQmenu">
                  FAQ
                </a>
              </li>
            </ul>
            <div className="my-2 my-lg-0">
              <a
                className="nav-link"
                href="https://dashboard.taroproxies.com/dashboard"
              >
                <span className="dash-btn">Dashboard</span>
              </a>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
