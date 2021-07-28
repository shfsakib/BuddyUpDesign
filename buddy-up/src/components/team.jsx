import React, { Fragment } from 'react'

const Team = () => {
    return (
        <Fragment>
            <section>
                <div className="container">

                    <div className="row">
                        <div className="col-12 text-center pt-5 pb-5">
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
                        <div className="col-12 pt-5 pb-5 d-flex justify-content-center">
                            <span className="team-bio"><img src={'/asset/grp-left.png'} className="left-pic team-pic" />
                                <span className="title"> <h4 className="font-weight-bold">Joey Hext</h4>Co-Founder</span></span>
                            <span className="team-bio"><img src={'/asset/grp.png'} className="center-pic team-pic" />
                                <span className="title"><h4 className="font-weight-bold">John Haakon Chen</h4>Co-Founder</span></span>
                            <span className="team-bio"> <img src={'/asset/grp-left.png'} className="right-pic team-pic" />
                                <span className="title"><h4 className="font-weight-bold">Grey John</h4>CTO</span></span>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Team
