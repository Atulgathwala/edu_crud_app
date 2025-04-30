import React from "react";
import LOGO from "../../assets/images/logo.png";

const Logo = () => {
  return (
    <div>
      <picture>
        <img src={LOGO} alt="" className="h-[50px] " />
      </picture>
    </div>
  );
};

export default Logo;
