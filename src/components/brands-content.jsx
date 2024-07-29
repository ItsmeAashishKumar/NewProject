import PropTypes from "prop-types";
import "./brands-content.css";

const BrandsContent = ({ className = "" }) => {
  return (
    <section className={`brands-content ${className}`}>
      <div className="brand-title-container">
        <div className="trusted-by-leading-insurance-b-wrapper">
          <div className="trusted-by-leading">
            Trusted By Leading Insurance Brands
          </div>
        </div>
        <div className="brand-logos">
          <img
            className="mask-group-icon1"
            loading="lazy"
            alt=""
            src="/mask-group@2x.png"
          />
          <div className="logos-container">
            <div className="logo-image-container">
              <img
                className="image-13-icon"
                loading="lazy"
                alt=""
                src="/image-13@2x.png"
              />
            </div>
            <div className="rectangle-parent">
              <div className="frame-child" />
              <img
                className="frame-item"
                loading="lazy"
                alt=""
                src="/group-39612.svg"
              />
              <div className="team-title-container">
                <h2 className="kickass-team">Kickass Team</h2>
              </div>
            </div>
          </div>
          <div className="benefits-content-parent">
            <div className="benefits-content">
              <div className="efficiency-benefit">
                <div className="efficiency-icon-container">
                  <div className="image-14-wrapper">
                    <img
                      className="image-14-icon"
                      loading="lazy"
                      alt=""
                      src="/image-14@2x.png"
                    />
                  </div>
                  <div className="efficiency-title-container">
                    <div className="efficiency-title-container-child" />
                    <img
                      className="efficiency-title-container-item"
                      loading="lazy"
                      alt=""
                      src="/group-39610@2x.png"
                    />
                    <h2 className="improve-efficiency">Improve Efficiency</h2>
                  </div>
                </div>
              </div>
              <div className="digitization-benefit">
                <div className="digitization-icon-container">
                  <div className="digitization-icon-content-wrapper">
                    <div className="digitization-icon-content">
                      <img
                        className="image-12-icon"
                        loading="lazy"
                        alt=""
                        src="/image-12@2x.png"
                      />
                      <img
                        className="img-2528-2-icon"
                        loading="lazy"
                        alt=""
                        src="/img-2528-2@2x.png"
                      />
                      <div className="why-us-title-container-parent">
                        <div className="why-us-title-container">
                          <img
                            className="image-15-icon"
                            loading="lazy"
                            alt=""
                            src="/image-15@2x.png"
                          />
                        </div>
                        <h1 className="why-us">Why Us?</h1>
                      </div>
                    </div>
                  </div>
                  <div className="engagement-benefit">
                    <div className="engagement-icon-container">
                      <div className="engagement-icon-container-child" />
                      <div className="frame-parent">
                        <div className="rectangle-wrapper">
                          <div className="frame-inner" />
                        </div>
                        <div className="we-touch-dozens-of-lives-of-ev-parent">
                          <div className="we-touch-dozens-of-lives-of-ev" />
                          <div className="making-real-differences-to-peo" />
                        </div>
                      </div>
                      <h2 className="enable-digitization">
                        Enable Digitization
                      </h2>
                    </div>
                    <div className="engaging-title-container">
                      <div className="engaging-title-container-child" />
                      <img
                        className="engaging-title-container-item"
                        loading="lazy"
                        alt=""
                        src="/group-39608@2x.png"
                      />
                      <h2 className="engaging">Engaging</h2>
                    </div>
                  </div>
                </div>
                <div className="sales-pitch-container">
                  <h1 className="we-help-your">
                    Streamline Your Agency Operations Today
                  </h1>
                </div>
              </div>
            </div>
            <div className="activation-content-wrapper">
              <div className="activation-content">
                <h2 className="improved-agent-activation">{`Improved Agent Activation `}</h2>
                <div className="of-agents-are">
                  80% of agents are opportunistic and have no tools or platforms
                  to help them sell. With a tool, even a small % of extra
                  activation would result in a large sales increase.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

BrandsContent.propTypes = {
  className: PropTypes.string,
};

export default BrandsContent;
