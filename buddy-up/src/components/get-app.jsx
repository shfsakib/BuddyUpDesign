import React, { Fragment } from 'react'

const GetApp = () => {
    return (
        <Fragment>
            <div className="row mr-0">
                <div className="col-12 p-0 bg-red mb-2">
                    <div className="row mr-0">
                        <div className="col-12 col-lg-7">
                            <img src="/asset/getbg.png" className="getbg" />

                        </div>
                    </div>
                    <span className="get-title text-right">
                        <h1 className="text-white font-weight-bolder">Get the <i>BuddyUp</i> for <br />your mobile device</h1>
                        <span className="d-block text-right mt-5">
                            <a href="#"><img src={'/asset/appstore.png'} /></a>
                            <a href="#"><img src={'/asset/playstore.png'} className="ml-2" /></a>
                        </span>
                    </span>
                </div>
            </div>
        </Fragment>
    )
}

export default GetApp
