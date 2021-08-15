import React, { Fragment } from 'react'

const Team = () => {
    return (
        <Fragment>
            <section>
                <div className="container">

                    <div className="row pt-lg-5 pb-lg-5">
                        <div className="col-12 text-center pt-lg-0 pb-lg-2 pb-3">
                            <h1 className="font-weight-bolder">Meet Our Team</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 text-center d-flex pt-0">
                            <q className="open-quoto">
                                <p className="team-quoto">Keen runner, cross-country skier and mad about all things tech! Competed already in one ski ultra-marathon and have a trail-running marathon coming up next July in Norway. Been working in startups and tech for the last few years and really want to create something that helps the everyday runner or cyclist get fitter and make new friends!</p>
                            </q>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pt-5 pb-5 d-flex justify-content-center team-members">
                            <div id="container">
                                <div id="one" className="move leftDiv text-center">
                                    <img src={'/asset/grp.png'} className="left-pic team-pic" />
                                   <span className="title"><h4 className="font-weight-bold opacity-0">Joey Hext</h4>
                                    <h6 className="opacity-0">Co-Founder</h6></span> 
                                </div>
                                <div id="two" className="move midDiv pt-4 text-center">
                                    <img src={'/asset/grp-left.png'} className="center-pic team-pic" />
                                    <span className="title"> <h4 className="font-weight-bold  opacity-1">John Haakon Chen</h4>
                                    <h6 className="opacity-1">Co-Founder</h6></span> 
                                </div>
                                <div id="three" className="move rightDiv text-center">
                                    <img src={'/asset/grp-right.jpeg'} className="left-pic team-pic" />
                                    <span className="title"><h4 className="font-weight-bold opacity-0">Grey John</h4>
                                    <h6 className="opacity-0">CTO</h6></span> 
                                </div>
                            </div>
                        </div>
                        <div classname="col-12  pt-5 pb-5 d-flex w-100 team-members">

                        </div>

                    </div>
                </div>
            </section>
        </Fragment >
    )
}

export default Team
