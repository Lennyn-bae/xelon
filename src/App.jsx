
import React, { useState } from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import Hero from "./components/Hero/Hero";
import Menu from "./components/Menu/Menu";
import Burger from "./components/Burger/Burger";
import "../src/styles/main.scss";




const App = () => {

  const [activeIndex, setActiveIndex] = useState(0);
  const afterLoad = (origin, destination, direction) => {
    setActiveIndex(destination.index);
  }

  return (
    <>
      <Burger active={activeIndex} />
      <ReactFullpage
        scrollingSpeed={750}
        afterLoad={afterLoad}


        render={() => {

          return (
            <ReactFullpage.Wrapper>
              <Hero className="section" />
              <Menu className="section" />
            </ReactFullpage.Wrapper>

          );
        }}

      />

    </>
  )
};
export default App;
