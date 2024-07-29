import FrameComponent1 from "../components/frame-component1";
import BrandsContent from "../components/brands-content";
import FrameComponent from "../components/frame-component";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <FrameComponent1 />
      <main className="brands-content-parent">
        <BrandsContent />
        <section className="gamification-content-wrapper">
          <div className="gamification-content">
            <img
              className="mask-group-icon"
              loading="lazy"
              alt=""
              src="/mask-group-1@2x.png"
            />
            <div className="gamification-description-wrapper">
              <div className="gamification-description">
                <h2 className="foster-competition-via">
                  Foster Competition via Gamification
                </h2>
                <div className="our-platform-enhances">
                  Our platform enhances sales performance via competition and
                  campaign creation based on variables such as GWP, commissions,
                  products, time frame, renewal rate, and more.
                </div>
              </div>
            </div>
          </div>
        </section>
        <FrameComponent />
      </main>
      <div className="eazy-house">
        <h1 className="more-from-the">More from the house of Eazy</h1>
      </div>
    </div>
  );
};

export default Home;
