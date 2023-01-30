import React from "react";
import Header from "../Header/Header";
import "./Hero.scss"


const Hero = ({ className }) => {

    return (
        <section className={`hero ${className}`}>
            <Header className="hero__header-logo" />
            <div className="hero__button-wrapper">
                <div
                    className="hero__button-down"
                    onClick={() => window.fullpage_api.moveSectionDown()}>
                    <p className="hero__button-down-text">Листайте вниз</p>
                </div>
            </div>     
        </section>
    )
};

export default Hero;