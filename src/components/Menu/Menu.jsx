import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Menu.scss";

const Menu = ({ className }) => {

    return (
        <section className={`menu ${className}`}>
            <Header className="menu__logo" />
            <div className="menu__list">
                <p className="menu__item">Главная</p>
                <p className="menu__item">Каталог</p>
                <p className="menu__item">Проекты</p>
                <p className="menu__item">Контакты</p>
                <p className="menu__item">FAQ</p>
            </div>
            <Footer />
        </section>
    )
};

export default Menu;