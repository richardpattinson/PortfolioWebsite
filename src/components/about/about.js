import React, { Component } from 'react';
export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <section id="about">
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
                  <span>Richard Pattinson</span><br />
                  <span>07429 311 299</span><br />
                  <span>richie.pattinson@gmail.com</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                </p>
              </div>
            </div> 
          </div> 
        </div>
      </section>
    );
      </React.Fragment>
    );
  }
}