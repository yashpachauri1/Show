import React from "react";
import "./home.css";
import headImg from "../../assets/images/image-web-3-desktop.jpg";
import retro from'../../assets/images/image-retro-pcs.jpg';
import laptop from'../../assets/images/image-top-laptops.jpg'
import Growth from'../../assets/images/image-gaming-growth.jpg'
const Home = () => {
  return (
    <div className="home">
      <div className="head">
        <img src={headImg} alt="web3" />
      </div>
      <div className="main">
        <h1>The Bright Future of Web 3.0?</h1>
        <div className="main-content">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
          <button> Read more </button>
        </div>
      </div>
      <div className="aside">
        <h1>New</h1>
        <div className="aside-content">
          <div className="aside-text">
            <h2>Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
          </div>

          <div className="aside-text">
            <h2>The Downsides of AI Artistry</h2>
            <p>
              What are the possible adverse effects of on-demand AI image
              generation?
            </p>
          </div>

          <div className="aside-text">
            <h2>Is VC Funding Drying Up?</h2>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means.
            </p>
          </div>
        </div>
      </div>
      <div className="foot">
        <div className="footer">
          <div className="footer-img">
            <img src={retro} alt="retro" />
          </div>
          <div className="footer-content">
          <h1>01</h1>
          <h2>  Reviving Retro PCs</h2>
          <p>  What happens when old PCs are given modern upgrades?</p>
          </div>
        </div>
        <div className="footer">
          <div className="footer-img">
            <img src={laptop} alt="laptop" />
          </div>
          <div className="footer-content">
          <h1>02</h1>
          <h2>Top 10 Laptops of 2022</h2>
          <p> Our best picks for various needs and budgets.</p>
          </div>
        </div>
        <div className="footer">
          <div className="footer-img">
            <img src={Growth} alt="growth" />
          </div>
          <div className="footer-content">
          <h1>03</h1>
          <h2>The Growth of Gaming</h2>
          <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
