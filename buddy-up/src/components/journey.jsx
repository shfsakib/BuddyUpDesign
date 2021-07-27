import React, { Fragment } from 'react' 
// import flat2 from '/asset/FlatiPhone2.png'
// import flat3 from '/asset/FlatiPhone3.png'
const Journey = () => {
    
    return (
        <Fragment>
            <section>
                <div className="container pb-100">
                    <div className="row p-3">
                        <div className="col-lg-6 text-center pt-lg-5">
                            <img src={'/asset/FlatiPhone.png'} className="journey-img" />
                        </div>
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-12 pt-4">
                                    <h1 className="font-weight-bolder mt-5">Start Your Journey</h1>
                                </div>
                                <div className="col-4">
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
                </div>
            </section>
        </Fragment>
    )
}

export default Journey
