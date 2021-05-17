import React from "react";
import "../CSS/home.css";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="foot-data ml-2">
          <div className="row">
            <div className="col-md-4">
              <img
                src={require("../images/footer-logo.png")}
                className="img-fluid"
                alt="altImage"
              />
              <div className="copy-data mt-4">
                Copyright 2020 @ Taro Proxies
                <br />
                All Rights Reserved
              </div>
            </div>
            <div className="col-md-4">
              <div className="foot-head">Navigation</div>
              <div className="nav-foot-flex">
                <div>
                  <a href="#planmenu">Home</a>
                </div>
                <div>
                  <a href="#Successmenu">Success</a>
                </div>
                <div>
                  <a href="#planmenu">Plans</a>
                </div>
                <div>
                  <a href="#FAQmenu">FAQ</a>
                </div>
                <div>
                  <a href="#Featuresmenu">Features</a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="nav-foot-flex">
                <div className="foot-head">Important</div>

                <div className="foot-head">Social</div>
                <div>Privacy Policy</div>

                <div className="social">
                  <div className="w-20">
                    <a href="https://twitter.com/taroproxies">
                      <img
                        src={require("../images/twiter.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </a>
                  </div>
                  <div className="w-20">
                    <img
                      src={require("../images/social2.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>Terms of Services</div>
              </div>
            </div>
            {/* <div className="col-md-2">

                        </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
