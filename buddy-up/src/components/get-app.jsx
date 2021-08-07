import React, { Fragment } from 'react'

const GetApp = () => {
    return (
        <Fragment>
            <div className="row mr-0">
                <div className="col-12 p-0 bg-red mb-2">
                    <div className="row mr-0">
                        <div className="col-12 col-lg-7 bottom-order">
                            <img src="/asset/getbg.png" className="getbg d-lg-block d-none" />
                        </div>
                        <div className="col-12 col-lg-5 pt-5 pt-lg-0 top-order">
                            <div className="get-title text-center text-lg-right">
                                <h1 className="text-white font-weight-bolder mt-5">Get the <i>BuddyUp</i> now and find your running partner today</h1>
                                <span className="d-block text-center text-lg-right mt-1">
                                    <a href="#" className=""><img src={'/asset/appstore.svg'} /></a>
                                    {/* <a href="#"><img src={'/asset/playstore.png'} className="ml-2" /></a> */}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Fragment>
    )
}

export default GetApp
