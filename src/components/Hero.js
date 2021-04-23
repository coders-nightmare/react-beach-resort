import React from "react";

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: "defaultHero",
};
//here defaultprop is used in case if anything is not passed in hero component then by default it will take these value
