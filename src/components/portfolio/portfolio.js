import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    return (
      <React.Fragment>
      {/*generated code*/}
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Projects.</h1>
            {/* portfolio-wrapper */}
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://wanderlist-makers.herokuapp.com/" target="_blank">
                    <img alt="" src="images/portfolio/wanderlist.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Wanderlist</h5>
                        <p>Rails route sharing Application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="https://simple-asset-tracker.herokuapp.com/" title>
                    <img alt="" src="images/portfolio/laptop.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Simple Asset Tracker</h5>
                        <p>Django/React asset tracking application</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-03">
                    <img alt="" src="images/portfolio/amplify.png" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>Amplify Notes</h5>
                        <p>AWS amplify notes app</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}
              <div className="columns portfolio-item">
                <div className="item-wrap">
                  <a href="#modal-04">
                    <img alt="" src="images/portfolio/algorithm.jpg" />
                    <div className="overlay">
                      <div className="portfolio-item-meta">
                        <h5>MachineLearning Demo</h5>
                        <p>Machine learning test script</p>
                      </div>
                    </div>
                    <div className="link-icon"><i className="icon-plus" /></div>
                  </a>
                </div>
              </div> {/* item end */}  {/* item end */}
            </div> {/* portfolio-wrapper end */}
          </div> {/* twelve columns end */}
          {/* Modal Popup
	      --------------------------------------------------------------- */}
        </div> {/* row End */}
      </section>
      </React.Fragment>
    );
  }
}