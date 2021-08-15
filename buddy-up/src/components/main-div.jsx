import React, { Fragment } from 'react'
const MainDiv = () => {
    return (
        <Fragment>
            <section className="wave-section">
                <div className="container">
                    <div className="row pb-lg-4 ml-lg-3 mt-lg-5">
                        <div className="col-lg-7 header-div">
                            <span className="root-title">Find Your Trusted <br />Running <i>Buddy</i></span>
                            <p className="sub-title">BuddyUp is a matchmaking fitness app for runners to  find, like and match with nearby training partners.</p>
                            <div className="row">
                                <div className="col-12 app-button-div">
                                    <span className="d-flex">
                                        <a href="#"><img src={'/asset/appstore.svg'} /></a>
                                        {/* <a href="#"><img src={'/asset/playstore.png'} className="ml-4" /></a> */}
                                    </span></div>

                            </div>
                        </div>
                        <div className="col-lg-5 text-center">
                        <img src={'/asset/hero-mockup.png'} alt="bg-pic" className="wave-bg" />
                        </div>
                    </div>
                </div>
                {/* <div class="custom-shape-divider-bottom-1627384266">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>                     
                </div> */}
            </section>

        </Fragment>
    )
}

export default MainDiv
