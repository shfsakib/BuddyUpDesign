import React, { Fragment } from 'react'
// import flat2 from '/asset/FlatiPhone2.png'
// import flat3 from '/asset/FlatiPhone3.png'
const Journey = () => {

    return (
        <Fragment>
            <section className="">
                <div className="container pb-0">
                    <div className="row p-3 d-lg-flex d-none">
                        <div className="col-lg-6 text-center pt-lg-5">
                            <img src={'/asset/FlatiPhone.svg'} className="journey-img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 pt-4">
                                    <h1 className="font-weight-bolder mt-5">Start Your Journey</h1>
                                </div>
                                <div className="col-4 journey">
                                    <div className="round-number first">1</div>
                                    <div className="round-number second">2</div>
                                    <div className="round-number third">3</div>
                                    <hr className="vr" />
                                </div>
                                <div className="col-8">
                                    <p className="journey-p h-25">Create your profile, show people who you are don't forget to add workout data.</p>
                                    <br /> <br /> <br /><p className="journey-p secondP">Find your best matches and connect with your community in the local group chat.</p>
                                    <p className="journey-p thirdP">Meet up for a workout and well-earned coffee</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3 d-lg-none">
                        <div className="col-12 text-center">
                            <h3 className="font-weight-bold color-495057">Start Your Journey</h3>
                        </div>
                        <div className="col-lg-12 text-center pt-lg-2">
                            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="row">
                                            <div className="col-12">
                                                <img src={'/asset/FlatiPhone.svg'} className="journey-img" />

                                            </div>
                                            <div className="col-12 text-center">
                                                <div className="round-number-sm">1</div>
                                                <p className="journey-p h-25 w-75">Create your profile, show people who you are don't forget to add workout data.</p>

                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <img src={'/asset/FlatiPhone2.svg'} className="journey-img" />

                                            </div>
                                            <div className="col-12 text-center">
                                                <div className="round-number-sm">2</div>
                                                <p className="journey-p h-25 w-75">Find your best matches and connect with your community in the local group chat.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <div className="row">
                                            <div className="col-12">
                                                <img src={'/asset/FlatiPhone3.svg'} className="journey-img" />

                                            </div>
                                            <div className="col-12">
                                                <div className="round-number-sm">3</div>
                                                <p className="journey-p h-25 w-75">Meet up for a workout and well-earned coffee. <br />&nbsp;</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                    <i className="fas fa-arrow-left arrowButton"></i>
                                </a>
                                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                    <i className="fas fa-arrow-right arrowButton"></i>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Journey
