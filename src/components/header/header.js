import React, { Component } from 'react';
const styleheight={
  height: 800,
}
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section style={styleheight}>
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
          </ul> {/* end #nav */}
        </nav> {/* end #nav-wrap */}
        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">I'm Richard Pattinson.</h1>
            <h3>I'm a London based <span>full-stack developer</span>, <span>lifelong learner</span> and <span>team player</span> with a passion for clean, well tested code and sleek web design. Let's <a className="smoothscroll" href="#about">start scrolling</a>
              and learn more <a className="smoothscroll" href="#about">about me</a>.</h3>
            <hr />
            <ul className="social">
              <li><a href="https://www.linkedin.com/in/richard-pattinson-1517b578/"><i className="fa fa-linkedin" /></a></li>
              <li><a href="https://github.com/richardpattinson#"><i className="fa fa-github" /></a></li>

            </ul>
          </div>
        </div>
        <p className="scrolldown">
          <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
        </p>   
      </section>
      </React.Fragment>
    );
  }
}