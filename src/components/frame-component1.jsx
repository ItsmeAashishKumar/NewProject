import PropTypes from "prop-types";
import "./frame-component1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`container-wrapper ${className}`}>
      <div className="container">
        <header className="component-9-parent">
          <div className="component-9">
            <nav className="navigation-wrapper">
              <nav className="navigation">
                <div className="products">Products</div>
                <div className="news">News</div>
                <div className="about">About</div>
              </nav>
            </nav>
            <div className="footer-links">
              <button className="contact-links-container">
                <div className="refer-us">Refer us</div>
                <div className="union-container">
                  <img className="union-icon" alt="" src="/union.svg" />
                </div>
              </button>
              <button className="contact-links-container1">
                <div className="contact-us">Contact us</div>
                <div className="union-wrapper">
                  <img className="union-icon1" alt="" src="/union-1.svg" />
                </div>
              </button>
            </div>
            <img
              className="eazydiglogo-1-icon"
              alt=""
              src="/eazydiglogo-1@2x.png"
            />
          </div>
          <img
            className="vector-icon"
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </header>
        <div className="hero-content-parent">
          <div className="hero-content">
            <div className="hero-subheading-parent">
              <div className="hero-subheading">
                <h1 className="one-platform-endless">
                  One Platform, Endless Capabilities
                </h1>
                <div className="with-hands-on-experience">
                  With hands-on experience transforming companies and brokers.
                  We know how to create platforms that agents and customers will
                  love.
                </div>
              </div>
              <div className="div-imgwrap">
                <div className="book-a-free">Book a free demo</div>
                <div className="demo-button-union">
                  <img
                    className="union-icon2"
                    loading="lazy"
                    alt=""
                    src="/union-2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
          <img
            className="image-63-icon"
            loading="lazy"
            alt=""
            src="/image-63@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
