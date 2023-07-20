import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";
import logo from "../images/ironhack-logo-xs.png";
import menu from "../images/menu-top-xs.png";


function LandingPage() {
    return (
      <div className="LandingPage">
        <div id="top-section">
          <div id="nav-bar">
            <img src={logo} alt="logo"/>
            <img src={menu} alt="menu"/>
          </div>
          <div id="text">
            <h1>Say hello to ReactJS</h1>
            <h3>You will learn how to use the most popular frontend library, and become a super Ninja developer.</h3>
            <button className="btn">Awesome!</button>
          </div>
        </div>
        <div id="bottom-section">
          <div id="icon1">
            <img src={icon1} alt="icon1"/>
            <h2>Declarative</h2>
            <p>React makes it painless to create interactive UIs.</p>
          </div>
          <div id="icon2">
            <img src={icon2} alt="icon2"/>
            <h2>Components</h2>
            <p>Build encapsulated components that manage their state.</p>
          </div>
          <div id="icon3">
            <img src={icon3} alt="icon3"/>
            <h2>Single-Way</h2>
            <p>A set of immutable values are passed to the components.</p>
          </div>
          <div id="icon4">
            <img src={icon4} alt="icon4"/>
            <h2>JSX</h2>
            <p>Statically-typed, designed to run on modern browsers.</p>
          </div>
        </div>
      </div>
    );
  }

  export default LandingPage;
