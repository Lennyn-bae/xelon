import React, { useState } from "react";
import "./Burger.scss";

const Burger = ({ active }) => {

    const [isButtonClicked, setIsButtonClicked] = useState(false)

    const down = () => window.fullpage_api.moveSectionDown()
    const up = () => window.fullpage_api.moveSectionUp()

    const handleClick = () => {
        setIsButtonClicked(!isButtonClicked);
        !!isButtonClicked ? up() : down()
    }

    return (
        <div
            className={`burger-button ${isButtonClicked || active !== 0 ? "burger-button--active" : ""}`}
            onClick={handleClick}
        >
            <div className="burger-button__line burger-button__line--1"></div>
            <div className="burger-button__line burger-button__line--2"></div>
            <div className="burger-button__line burger-button__line--3"></div>
        </div>
    )
}

export default Burger