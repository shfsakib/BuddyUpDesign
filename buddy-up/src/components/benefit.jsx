import React, { Fragment } from 'react'  
const Benefit = () => {
    return (
        <Fragment>
            <section>
                <div className="row mr-0 pt-3 pb-0 pr-0">
                    <div className="col-lg-7 h-75 pl-benifit text-left">
                        <div className="row">
                            <div className="col-12 h-50 pt-4">
                                <h1 className="font-weight-bolder pb-5 mt-4">Our Benefits</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <img src={'/asset/running.png'} />
                                <h5 className="font-weight-bold mt-2">Find Running Partners</h5>
                                <p className="color-c1c1c1">Use our powerful matchmaking tool to find your perfect partner, or engage with runners near you.</p>
                            </div>
                            <div className="col-lg-6">
                                <img src={'/asset/tracker.png'} />
                                <h5 className="font-weight-bold mt-2">Introduce Yourself</h5>
                                <p className="color-c1c1c1">Add your fitness stats, goals and bio and start looking for your running buddy today</p>
                            </div>
                            <div className="col-lg-6 mt-5">
                                <img src={'/asset/exercise.png'} />
                                <h5 className="font-weight-bold mt-2">Run Together</h5>
                                <p className="color-c1c1c1">Once you've found your running partners, hit the road or local park and tick off some goals together</p>
                            </div>
                            <div className="col-lg-6 mt-5">
                                <img src={'/asset/coffee-cup.png'} />
                                <h5 className="font-weight-bold mt-2">Meet New People</h5>
                                <p className="color-c1c1c1">Why stop at running? Grab a coffee or a post-workout drink and get to know each other</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 p-0 benefit-img-bg">
                        <img src={'/asset/bg1.png'} className="w-100 h-100" />
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Benefit

