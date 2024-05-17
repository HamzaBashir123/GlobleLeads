import "./main.css";
import React, { useState } from "react";


const Main = () => {
  const [showGermanyOffers, setShowGermanyOffers] = useState(false);
  const [showFranceOffers, setShowFranceOffers] = useState(false);
  const [count, setCount] = useState("0");



  const germanyList = [
    {
      name: "~Telekom Frühjahr Gewinnspiel 2024~  DE",
      link: "https://track.adcocktail.com/c.VCRshLFikySIsNQVRERH&subid=",
    },
    {
      name: "On That A",
      link: "https://track.adcocktail.com/c.VCRshLFikyQcRysSVTRK&subid=",
    },
    {
      name: "Prime Opinion (DE)",
      link: "https://track.adcocktail.com/c.VCRshQFikySICKLVCjk&subid=",
    },
  ];
  const franceList = [
    {
      name: "Coupon Network (FR)~",
      link: "https://track.adcocktail.com/c.VCRshLFikyQywCSsEwh&subid=",
    },
    {
      name: "Assurland Mutuelle Sante (FR)~ C",
      link: "https://track.adcocktail.com/c.VCRshLFikyQIhEsSVkChk&subid=",
    },
    {
      name: "Assurland Auto (FR)~",
      link: "https://track.adcocktail.com/c.VCRshQFikyLIkCHSVqsH&subid=",
    },
  ];
  const showGermanyHandler = () => {
    setShowGermanyOffers(true);
    setShowFranceOffers(false);
  };

  const showFranceHandler = () => {
    setShowGermanyOffers(false);
    setShowFranceOffers(true);
  };
  const counterAdded = () => {
    setCount(+1)
  };

 

  return (
    <div class="container-fluid mainContiner">
      <div class="div1 container-xxl">
        <h1 class="div1_h1">Campaigns</h1>
        <p class="div1_p1">Earn money by participating in our campaigns!</p>
      </div>
      <div class="contact-info">
        <p class="contact-heading">Contact us for:</p>
        <p class="contact-details">
          Campaign Advertisement, Website Design, Logo Design, or Website
          Testing.
        </p>
        <p class="contact-email">Email: workerfhanif@hotmail.com</p>
        <p class="contact-company">FHR SERVICES LIMITED</p>
      </div>

      <div class="countryName d-flex container-xxl">
        <button class="div2_h1" id="button1" onClick={showGermanyHandler}>
          <img class="div2_img1" src="http://localhost:3000/assets/germany.png" alt="" /> Germany
        </button>

        <button class="div2_h1" id="button2" onClick={showFranceHandler}>
          <img class="div2_img1" src="http://localhost:3000/assets/France.png" alt="" /> France
        </button>
      </div>

      <div class="container-xxl offerDiv">
      <div className={`div3 ${showGermanyOffers ? "" : "hidden"}`}>
          {germanyList.map((item, index) => (
            <div key={index} className="box">
              <span class="boldd">{index+1}</span>
              <img className="div3_img1" src="http://localhost:3000/assets/germany.png" alt="" />
              <a className="div3_link1" href={item.link} target="_blank" onClick={counterAdded}>
                {item.name}

              </a>
              <span class="counterData">{count}</span>
            </div>
          ))}
        </div>

        <div className={`div3 ${showFranceOffers ? "" : "hidden"}`}>
          {franceList.map((item, index) => (
            <div key={index} className="box">
              <span class="boldd">{index+1}</span>
              <img className="div3_img1" src="http://localhost:3000/assets/France.png" alt="" />
              <a className="div3_link1" href={item.link} target="_blank">
                {item.name}
              </a>
              <span class="counterData" key={index}>{count}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
