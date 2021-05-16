import React from "react";
import "../CSS/home.css";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Home() {
  const [showMobileNav, setShowMobileNav] = React.useState(false);

  const viewButton = () => {
    setShowMobileNav(!showMobileNav);
  };

  return (
    <div className="body">
      <Header />
      <div className="banner-section">
        <div className="container">
          <div className="row v-center">
            <div className="col-lg-5 col-md-6 mrt-top">
              <div className="logo-flex">
                <div>
                  <img
                    src={require("../images/logo1.png")}
                    className="img-fluid"
                    alt="altImage"
                  />
                </div>
              </div>
              <div className="banner-text">Drink to Success</div>
              <div className="info-btn-list">
                <div className="info-btn">
                  500+
                  <br />
                  <span className="sm-btn-txt">Statisfied Customers</span>
                </div>
                <div className="info-btn">
                  1,000,000+
                  <br />
                  <span className="sm-btn-txt">Proxies Generated</span>
                </div>
              </div>
              <div className="dropdown info-btn1" onClick={viewButton}>
                <div
                  className="drop-banner"
                  id="dropdownMenuButton"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <div>
                    <a href="/#">View all plans</a>
                  </div>
                  <div>
                    <img
                      src={require("../images/down-arrow.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                {/* <div className="select-bg">
                                    <div className="select-list">
                                        <select className="sec1-drop">
                                            <option value>1 GB</option>
                                            <option value>2 GB</option>
                                            <option value>3 GB</option>
                                        </select>
                                    </div>
                                </div> */}
                <div
                  className={
                    showMobileNav ? "dropdown-menu show" : "dropdown-menu"
                  }
                  aria-labelledby="dropdownMenuButton"
                >
                  <a className="dropdown-item" href="/#">
                    1 GB
                  </a>
                  <a className="dropdown-item" href="/#">
                    2 GB
                  </a>
                  <a className="dropdown-item" href="/#">
                    3 GB
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-6">
              <div className="banner-img">
                <img
                  src={require("../images/banner.png")}
                  className="img-fluid"
                  alt="altImage"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="section1" id="planmenu">
          <div className="container">
            <div className="section-header">
              <h2>Proxy Plans</h2>
              <div className="head-info">Got Boba?</div>
            </div>
            <div className="three-box">
              <div className="row">
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="sec1-box">
                    <div className="proxy-img">
                      <img
                        src={require("../images/sec1-1.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="proxy-img1">
                      <img
                        src={require("../images/sec1-1-1.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="box-center-data">
                      <div className="cup-flex">
                        <div>
                          <img
                            src={require("../images/cup1.png")}
                            className="cup-img img-fluid"
                            alt="altImage"
                          />
                        </div>
                        <div className="cup-data">
                          <div className="box-head1">Boba</div>
                          <div className="box-head-info">Server</div>
                          <div className="box-data">
                            The sweetest servers with:
                          </div>
                        </div>
                      </div>
                      <ul className="text-left mt-minus show">
                        <li>10GB Networking</li>
                        <li>
                          Less than 1ms ping for connections to Footsites,
                          Supreme and Shopify
                        </li>
                        <li>Unlimited bandwidth </li>
                        <li>99.9% Uptime</li>
                        <li>Located in Ashburn VA</li>
                        <li>30 day expiration renewable</li>
                      </ul>
                      <div className="select-bg select-bg-top">
                        <div className="select-list">
                          <select className="sec1-drop">
                            <option value>6 Core</option>
                            <option value>8 Core</option>
                            <option value>12 Core</option>
                          </select>
                        </div>
                      </div>

                      <div className="add-to-cart1">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>{" "}
                        Purchase
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="sec1-box">
                    <div className="proxy-img">
                      <img
                        src={require("../images/sec1-2.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="proxy-img1">
                      <img
                        src={require("../images/sec1-2-2.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="box-center-data">
                      <div className="cup-flex">
                        <div>
                          <img
                            src={require("../images/cup2.png")}
                            className="cup-img img-fluid"
                            alt="altImage"
                          />
                        </div>
                        <div className="cup-data">
                          <h6 className="box-head2">Taro Milk Tea</h6>
                          <p className="box-head-info">Premium Residential</p>
                          <p className="box-data">The sweetest servers with:</p>
                        </div>
                      </div>
                      <ul className="text-left show med-ul">
                        <li>30 Day Expiration </li>
                        <li>Private Discord Access </li>
                        <li>
                          Speeds as low as 80ms on our Boba servers and
                          100ms-180ms on local
                        </li>
                        <li>US and UK specific </li>
                        <li>Unmatched success on all sites</li>
                        <br />
                      </ul>

                      <div className="select-bg second ">
                        <div className="select-list">
                          <select className="sec1-drop">
                            <option value>3 GB</option>
                            <option value>5 GB</option>
                            <option value>8 GB</option>
                          </select>
                        </div>
                      </div>

                      <div className="add-to-cart2">
                        <i
                          className="fa fa-shopping-cart"
                          aria-hidden="true"
                        ></i>{" "}
                        Purchase
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 mt-3">
                  <div className="sec1-box">
                    <div className="proxy-img">
                      <img
                        src={require("../images/sec1-3.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="proxy-img1">
                      <img
                        src={require("../images/sec1-3-3.png")}
                        className="img-fluid"
                        alt="altImage"
                      />
                    </div>
                    <div className="box-center-data new-top">
                      <div className="cup-flex new-cup">
                        <div>
                          <img
                            src={require("../images/cup3.png")}
                            className="cup-img img-fluid"
                            alt="altImage"
                          />
                        </div>
                        <div className="cup-data">
                          <div className="box-head3">Fruit Tea</div>
                          <div className="box-head-info">ISP</div>
                        </div>
                      </div>

                      {/* <div className="select-bg">
                                                <div className="select-list">
                                                    <select className="sec1-drop">
                                                        <option value="">1 GB</option>
                                                        <option value="">2 GB</option>
                                                        <option value="">3 GB</option>
                                                    </select>
                                                </div>
                                            </div> */}

                      <div className="add-to-cart3 mt-405 mt-5">
                        <i className="fa fa-shopping-cart" aria-hidden="true" />{" "}
                        Coming Soon!
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section2" id="Featuresmenu">
          <div className="container">
            <div className="section-header">
              <h2>Premium Features</h2>
              <div className="head-info">Let us help secure yours!</div>
            </div>
            <div className="four-box">
              <div className="row">
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-1.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">24/7 Support</div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-2.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">
                      User:Pass Authenticated
                    </div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-3.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Caffeinated Speeds</div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-4.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Dedicated Servers</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="four-box">
              <div className="row">
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-5.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Competative Price</div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-6.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Insta Delivery</div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-7.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Highly Filtred subnets</div>
                  </div>
                </div>
                <div className="col-md-3  col-6 mb-5">
                  <div className="four-box-flex">
                    <img
                      src={require("../images/sec2-8.png")}
                      className="img-fluid"
                      alt="altImage"
                    />
                    <div className="four-box-title">Custom Networking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section3" id="Successmenu">
          <div className="container">
            <div className="section-header">
              <h2>Unmatched Success</h2>
              <div className="head-info">Let us help secure yours</div>{" "}
            </div>
          </div>
          <div className="container-fluid pl-0 pr-0">
            <div className="slider-box">
              <Carousel
                swipeable={false}
                className=""
                draggable={false}
                showDots={true}
                autoPlay={true}
                slidesToSlide={1}
                responsive={responsive}
                partialVisible
                arrows={false}
                infinite={true}
                responsive={responsive}
              >
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814354052942135326/Nokiny-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">nokiny</div>
                        <div className="slide-box-head-info">@nokinyyy</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      Pretty good day today 308 total,
                      <br /> thank you to those who helped{" "}
                    </div>
                    <div className="white mb-3 proxies">
                      Proxies:
                      <span style={{ cursor: "pointer" }}>@taroproxies</span>
                      <br />
                      Bots:@SelexAIO @KageAIO
                    </div>
                    {/* <div className="white mt-4 review"></div> */}
                    <img
                      src={require("../images/sec3-1.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814338230501507072/Cooklo-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">Cook</div>
                        <div className="slide-box-head-info">@Cooklo_</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      @ValorAIO x @taroproxies
                    </div>
                    <div className="white mb-3 proxies">
                      Proxies:
                      <span style={{ cursor: "pointer" }}>@taroproxies</span>
                    </div>
                    <img
                      src={require("../images/sec3-2.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814353893634342962/Midas-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">midas</div>
                        <div className="slide-box-head-info">@m1das14</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      Late post, but definitely had to share! Finally starting
                      to scale my services!{" "}
                    </div>
                    <div className="white mb-3 proxies">
                      Proxies:
                      <span style={{ cursor: "pointer" }}>@taroproxies</span>
                    </div>
                    <img
                      src={require("../images/sec3-3.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814354203727495188/VivekJ-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">Vivek Joshi</div>
                        <div className="slide-box-head-info">@VivekJ1404</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      A nice test before dunks!
                      <br />
                      CG: @AMNotifyCA @OculusAlerts
                    </div>

                    {/* <div className="white mt-4 review">Lorem ipsum dolor sit amet,<br />consectetur adipiscing elit</div> */}
                    <div className="white mb-3 proxies">
                      Proxies:
                      <span style={{ cursor: "pointer" }}>
                        {" "}
                        @taroproxies @tarosuccess1 @ScarletProxies
                      </span>
                    </div>
                    <img
                      src={require("../images/sec3-1.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814353738889953310/Eric-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">ericresell</div>
                        <div className="slide-box-head-info">@ericresell</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      late night restocks ty <br />
                      @MEKRobotics{" "}
                    </div>
                    <div className="white mb-3 proxies">
                      @taroproxies
                      <span style={{ cursor: "pointer" }}>@OculusProxies</span>
                    </div>
                    <img
                      src={require("../images/sec3-2.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
                <div>
                  <div className="slider-box-1">
                    <div className="slider-box-1-flex">
                      <div>
                        <img
                          src="https://cdn.discordapp.com/attachments/814336590004486185/814338757049712690/Taro-Website.png"
                          className="mr-3 img-fluid"
                          alt="altImage"
                        />
                      </div>
                      <div className="sld-bx-1">
                        <div className="slide-box-head">Taro Proxies</div>
                        <div className="slide-box-head-info">@taroproxies</div>
                      </div>
                    </div>
                    <div className="white mt-4 review">
                      Today was the first official drop that users were able to
                      use Taro Proxies! With only ~30 users running during our
                      soft launch, we were able to secure an estimated 3,325
                      pairs alone! We are going into the next release excited
                      for our users and ready to cook!
                    </div>
                    <div className="white mb-3 proxies">
                      Proxies:
                      <span style={{ cursor: "pointer" }}>@taroproxies</span>
                    </div>
                    <img
                      src={require("../images/sec3-3.png")}
                      className="mt-3 img-fluid"
                      alt="altImage"
                    />
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
          <div className="faq-section" id="FAQmenu">
            <div className="container">
              <div className="faq">
                <div className="section-header">
                  <h2>Frequently Asked Question</h2>
                  <div className="head-info"></div>
                </div>
                <div className="faq-list">
                  <div className="row">
                    <div className="col-md-6 mb-5">
                      <div className="faq-box">
                        <div className="faq-box-head1">
                          How Do I Purchase A Plan?
                        </div>
                        <div className="faq-box-data">
                          Taro Proxies exclusively restocks in our invite only
                          Discord server.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="faq-box">
                        <div className="faq-box-head2">
                          What makes us different from the rest?
                        </div>
                        <div className="faq-box-data">
                          We are not another oxylabs reseller. We have built our
                          own infrastructure from the ground up to provide you
                          the best service.
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="faq-box">
                        <div className="faq-box-head3">
                          What Regions do we currently support?
                        </div>
                        <div className="faq-box-data">
                          We currently only support US, UK, and SG. We are
                          working hard to add more regions!
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6 mb-5">
                      <div className="faq-box">
                        <div className="faq-box-head4">
                          How can I get a invite to the Discord?
                        </div>
                        <div className="faq-box-data">
                          Follow us on Twitter and keep post notifications on.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
