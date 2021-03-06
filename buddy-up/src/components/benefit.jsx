import React, { Fragment } from 'react'  
const Benefit = () => {
    return (
        <Fragment>
            <section className="benefit-section">
                <div className="row mr-0 pt-0 pb-lg-0 pb-5 pr-0">
                    <div className="col-lg-7 h-75 pl-benifit text-left">
                        <div className="row">
                            <div className="col-12 text-center text-lg-left">
                                <h1 className="font-weight-bolder benifit-header pb-5 mt-4">Our Benefits</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6">
                                <img src={'/asset/running.png'} />
                                <h5 className="font-weight-bold mt-2">Find Running Partners</h5>
                                <p className="color-495057">Use our powerful matchmaking tool to find your perfect partner, or engage with runners near you.</p>
                            </div>
                            <div className="col-6">
                                <img src={'/asset/tracker.png'} />
                                <h5 className="font-weight-bold mt-2">Introduce Yourself</h5>
                                <p className="color-495057">Add your fitness stats, goals and bio and start looking for your running buddy today</p>
                            </div>
                            <div className="col-6 mt-5">
                                <img src={'/asset/exercise.png'} />
                                <h5 className="font-weight-bold mt-2">Run Together</h5>
                                <p className="color-495057">Once you've found your running partners, hit the road or local park and tick off some goals together</p>
                            </div>
                            <div className="col-6 mt-5">
                                <img src={'/asset/coffee-cup.png'} />
                                <h5 className="font-weight-bold mt-2">Meet New People</h5>
                                <p className="color-495057">Why stop at running? Grab a coffee or a post-workout drink and get to know each other</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0 benefit-img-bg d-none d-lg-block">
                        <img src={'/asset/bg1.png'} className="w-100 h-100" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Benefit

