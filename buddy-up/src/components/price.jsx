import React, { Fragment } from 'react'

const Price = () => {
    return (
        <Fragment>
            <section id="pricing">
                <div className="container pt-1 mt-2">
                    <div className="row p-3">
                        <div className="col-12 pb-3 text-center">
                            <h1 className="font-weight-bolder p-4">Choose Your Plan From The App Store</h1>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <div className="card card-body side-div radius-left">
                                    <div className="row">
                                        <div className="col-12 text-center mt-4">
                                            <img src={'/asset/free.png'} className="price-img" />
                                        </div>
                                        <div className="col-12 text-center pt-4">
                                            <h3 className="h3 font-weight-bold color-333333">Free</h3>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h4 className="color-333333 mt-3">£0</h4>
                                        </div>
                                        <div className="col-12 text-center color-4F4F4F">
                                            <p className="font-weight-100 h5 mt-4">Like 10 people / day <br />
                                                1 direct message / week <br />
                                                Form 1 group with up to 3 others</p>
                                        </div>
                                        <div className="col-12 text-center pt-4">
                                            <button className="btn-red">Get Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="center-div card card-body">
                                    <div class='triangle'><span className="rotate-text">Popular</span></div>
                                    <br /><br /><br />
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <img src={'/asset/calendar (2).png'} className="price-img" />
                                        </div>
                                        <div className="col-12 text-center pt-5">
                                            <h3 className="h3 font-weight-bold color-333333">Monthly</h3>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h4 className="color-333333 mt-3">£4.99</h4>
                                        </div>
                                        <div className="col-12 text-center color-4F4F4F">
                                            <p className="font-weight-100 h5 mt-4">Like 50 people / day <br />
                                                5 direct message / week <br />
                                                Form 3 group with up to 5 others</p>
                                        </div>
                                        <div className="col-12 text-center pt-4">
                                            <button className="btn-red">Get Now</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card card-body side-div radius-right">
                                <div className="row">
                                        <div className="col-12 text-center mt-4">
                                            <img src={'/asset/price-tag.png'} className="price-img" />
                                        </div>
                                        <div className="col-12 text-center pt-4">
                                            <h3 className="h3 font-weight-bold color-333333">Annual</h3>
                                        </div>
                                        <div className="col-12 text-center">
                                            <h4 className="color-333333 mt-3">£45</h4>
                                        </div>
                                        <div className="col-12 text-center color-4F4F4F">
                                            <p className="font-weight-100 h5 mt-4"><i>Unlimited Likes</i> <br />
                                                15 direct message / week <br />
                                                Unlimited Groups and Members</p>
                                        </div>
                                        <div className="col-12 text-center pt-4">
                                            <button className="btn-red">Get Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Price
