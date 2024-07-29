import PropTypes from "prop-types";
import "./frame-component.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`team-management-content-parent ${className}`}>
      <div className="team-management-content">
        <div className="team-management-description">
          <div className="team-management-description-inner">
            <div className="manage-multiple-tiered-teams-parent">
              <h2 className="manage-multiple-tiered">
                Manage Multiple Tiered Teams
              </h2>
              <div className="we-can-support">
                We can support up to 5 levels of agents and teams allowing for
                insurers and agents to be managed at multiple levels.
              </div>
            </div>
          </div>
          <img
            className="mask-group-icon2"
            loading="lazy"
            alt=""
            src="/mask-group-2@2x.png"
          />
        </div>
      </div>
      <footer className="component-11">
        <div className="component-11-child" />
        <div className="footer-content">
          <div className="address-container">
            <img
              className="vector-icon1"
              loading="lazy"
              alt=""
              src="/vector-1.svg"
            />
          </div>
          <div className="subscription-form">
            <div className="form-content">
              <div className="sivatel-tower-12th">
                Sivatel Tower, 12th Floor, Sivatel Tower, Kolkata, India 10330,
                IN
              </div>
              <div className="input-container">
                <div className="email-input">
                  <input
                    className="enter-your-email"
                    placeholder="Enter Your email address"
                    type="text"
                  />
                </div>
                <button className="subscription-button">
                  <div className="subscribe">SUBSCRIBE</div>
                  <div className="union-frame">
                    <img className="union-icon3" alt="" src="/union-2.svg" />
                  </div>
                </button>
              </div>
            </div>
            <div className="footer-links-container">
              <div className="footer-links1">
                <a className="products1">Products</a>
                <div className="footer-link-categories">
                  <div className="agency-management">Agency Management</div>
                  <div className="direct-to-consumer">Direct to Consumer</div>
                </div>
              </div>
              <div className="footer-links2">
                <a className="developers">Developers</a>
                <div className="documentation-parent">
                  <div className="documentation">Documentation</div>
                  <div className="apis-sdk">{`APIs & SDK`}</div>
                </div>
              </div>
              <div className="footer-links3">
                <a className="contact">Contact</a>
                <div className="parent">
                  <div className="div">+91 9999999999</div>
                  <div className="supportgmailio">support@gmail.io</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-social">
          <div className="social-icons">
            <img
              className="social-icons-child"
              loading="lazy"
              alt=""
              src="/group-171.svg"
            />
            <img
              className="social-icons-item"
              loading="lazy"
              alt=""
              src="/group-172.svg"
            />
          </div>
          <div className="footer-social-inner">
            <div className="separator-parent">
              <div className="separator" />
              <div className="copyright-and-legal">
                <div className="copyright">
                  <div className="all-rights-reserved">
                    2024 All Rights Reserved
                  </div>
                </div>
                <div className="legal-links">
                  <div className="legal-items">
                    <div className="privacy-policy">Privacy policy</div>
                  </div>
                  <div className="legal-items1" />
                  <div className="legal-items2">
                    <div className="security">Security</div>
                  </div>
                  <div className="legal-items3" />
                  <div className="legal-items4">
                    <div className="terms-conditions">{`Terms & conditions`}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
