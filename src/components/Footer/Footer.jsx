import React from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer">
            <div className="container">
                <div className="footer__item footer__item--copyright">
                    <p>2022</p>
                    <p>все права защищены</p>
                </div>
              
            </div>
            <p className="footer__item footer__item--developer">Разработано onepix</p>
        </div>

    )
};

export default Footer;