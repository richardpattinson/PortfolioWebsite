import React, { Component } from 'react';
export default class Resume extends Component {
  render() {
    return (
      <React.Fragment>
       <section id="resume">
        {/* Education
      ----------------------------------------------- */}
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Makers Academy</h3>
                <p className="info">Software Development Bootcamp <span>•</span> <em className="date">January 2020 - April 2020</em></p>
                <p>
                  Kicking off my degree in web development at Makers Academy was such a thrill. Here I learned the basics of the ruby programming language with a little javascript thrown in. Makers Gave me the skills to test drive my own applications, along with the git and agile practices neccessary to contribute to any development team.
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>University of Bath</h3>
                <p className="info">B.Sc Degree in Chemistry <span>•</span> <em className="date">September 2014 - June 2017</em></p>
                <p>
                As part of my chemistry degree I completed a dissertation on modeling the surfaces of solid oxide exchange fuel cells, as well as producing detailed and data driven lab reports. As part off my disseratation I used the python backed Metadise modelling software to determine the properties of the oxide exchange cathode and these properties were used to generate a 3D crystal structure. This project introduced me to the python programming language and prompted me to continue learn the language independently. I'll never forget my time at university, or the friends I made along the way.
                </p>
              </div>
            </div> {/* item end */}
          </div> {/* main-col end */}
        </div> {/* End Education */}
        {/* Work
      ----------------------------------------------- */}
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                <h3>Hamsphire Trust Bank</h3>
                <p className="info">It Department Helpdesk <span>•</span> <em className="date">January 2019 - December 2019</em></p>
                <p>
                • Compiling financial reporting and tracking documents<br></br>
                •  Technical support and ticket handling<br></br>
                •  Handling developing business apps using mattsoft and building API integration's with experian using snaplogic.<br></br>
                •  Leading team meetings and operational Metrics Reporting<br></br>
                </p>
              </div>
            </div> {/* item end */}
            <div className="row item">
              <div className="twelve columns">
                <h3>Host Staffing </h3>
                <p className="info">Contractor <span>•</span> <em className="date">October 2018 - July 2019</em></p>
                <p>
                • Running festival events<br></br>
                • Plate waiting, manual carrying<br></br>
                • Leading small teams of people to deliver fantastic customer experiences.<br></br>
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>DanceStore Ltd</h3>
                <p className="info">IT Manager <span>•</span> <em className="date">University Holidays August 2015 - October 2018</em></p>
                <p>
                • Updating and managing the Totaldance website<br></br>
                • Filing bug reports<br></br>
                • Organising email promotion campaigns<br></br>
                • Integrating a stock administration system and technical support.<br></br>
                </p>
              </div>
            </div>
            <div className="row item">
              <div className="twelve columns">
                <h3>IBM </h3>
                <p className="info">PSM Analyst <span>•</span> <em className="date">July 2013 - May 2014</em></p>
                <p>
                • Leading team meetings/conference calls<br></br>
                • On-site compliance auditing of data centers<br></br>
                • Data Analysis and Presentation<br></br>
                • Accessing SQL and CIRATS Databases<br></br>
                • Interfacing with customers and internal IBM stakeholders<br></br>
                • Operational metrics reporting and organising internal IBM events.<br></br>
                </p>
              </div>
            </div>
          </div> {/* main-col end */}
        </div> {/* End Work */}
        {/* Skills
      ----------------------------------------------- */}
        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>
          <div className="nine columns main-col">
            <p>
            • Agile development, test-driven development, pair programming, storyboarding, process diagramming.<br></br>
            • A quick study, willing and able to pick up any tech stack.<br></br>
            • Excellent team player, strong social skills and emotional intelligence, confident remote worker.<br></br>
            • Managing teams, leading meetings, organised with effective presentation skills.<br></br>

            </p>
            <div className="bars">
              <ul className="skills">
                <li><span className="bar-expand photoshop" /><em>Javascript</em></li>
                <li><span className="bar-expand html5" /><em>Python</em></li>
                <li><span className="bar-expand html5" /><em>Ruby</em></li>
                <li><span className="bar-expand wordpress" /><em>CSS</em></li>
                <li><span className="bar-expand jquery" /><em>HTML5</em></li>
              </ul>
            </div>{/* end skill-bars */}
          </div> {/* main-col end */}
        </div> {/* End skills */}
      </section>
      </React.Fragment>
    );
  }
}