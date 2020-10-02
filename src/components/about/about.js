import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
      <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
          <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#about">Home</a></li>
            <li><a className="smoothscroll" href="#resume">Resume</a></li>
            <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
            <li><a href="https://github.com/richardpattinson#" target="_blank"><i className="fa fa-github" /></a></li>
            <li><a href="https://www.linkedin.com/in/richard-pattinson-1517b578/" target="_blank"><i className="fa fa-linkedin" /></a></li>
          </ul> {/* end #nav */}
        </nav>
        <div className="row">
          <div className="three columns">
            <img className="profile-pic" src="images/profilepic.jpg" alt="" />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>
            <p>Aspiring developer and university of Bath Alumni. After graduating I worked for Hampshire Trust Bank setting up Experian API calls using Snaplogic and developing front end internal applications using Matssoft. In order to build on the development skills and agile practices used at the bank, I enrolled at makers academy, a software development bootcamp with a great track record of aiding new developers to acquire hands on experience working in teams, designing, implementing and testing their own applications. These hard skills in the ruby, python and javascript languages along with the ancillary skills of good git collaboration practices and mastery of workﬂow tools (such as jira and trello) put me in a great position to be an asset to any development team.
            </p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>mobile: (+44)7429 311 299</span><br />
                  <span>email: richie.pattinson@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> {/* end row */}
          </div> {/* end .main-col */}
        </div>
      </section>
      </React.Fragment>
    );
  }
}