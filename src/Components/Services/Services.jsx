import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from '../../img/glasses.png';
import Humble from '../../img/humble.png';
import Card from '../Card/Card';
import Resume from './Resume.pdf'


const Services = () => {
  return (
    <div className="services" id='Services'>
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                <br/>
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </span>
            <a href={Resume} download>
            <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{left: '40rem'}}>
                <Card
                emoji = {HeartEmoji}
                heading = {'Design'}
                detail = {"Adobe Illustrator, Photoshop, Adobe Xd, Figma"}
                />
            </div>
            {/* Second card */}
            <div style={{top: "8rem", left: "8rem"}}>
                <Card
                emoji = {Glasses}
                heading = {'Developer'}
                detail = {"Html, Css, JavaScript, React"}
                />
            </div>
            {/* Third card */}
            <div style={{top: "19rem", left: "25rem"}}>
                <Card
                emoji = {Humble}
                heading = {'UI/UX'}
                detail = {"Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
                />
            </div>
            <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services