import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";

const Works = () => {
  return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                <br/>
                text of the printing and typesetting industry.
                <br/>
                the industry's standard dummy text ever since the 1500s
            </span>
            <button className="button s-button">Hire me</button>

            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>

        {/* right side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>{" "}
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* Background Circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works
