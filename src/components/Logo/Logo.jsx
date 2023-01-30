import React from "react";
import { ReactComponent as IconLogo } from "../../assets/images/logo.svg";

const Logo = ({className}) => {


    return (
        <div className={className}>
            <IconLogo />
        </div>
    )
};

export default Logo;