import React, { Fragment } from 'react'

const Footer = () => {
    return (
        <Fragment>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12 pt-5 pb-4 text-center">
                            <img src="/asset/redlogo.png" />
                        </div>
                        <div className="col-12 pt-4 text-center">
                            <h4 className="color-4F4F4F footer-text">BuddyUp is matchmaking fitness app for runners to find, like and match with nearby training partners.</h4>
                        </div>
                        <div className="col-12 text-center pt-5 pb-4">
                            <img src="/asset/twitter.png" className="m-3" />
                            <img src="/asset/fb.png" className="m-3" />
                            <img src="/asset/insta.png" className="m-3" />
                            <img src="/asset/youtube.png" className="m-3" />
                            <hr />
                        </div>
                        <div className="col-12 text-center pb-5">
                            <p className="color-495057 font-14">Copyright &copy; {new Date().getFullYear()} <strong>BuddyUp</strong>. All Rights Reserved</p>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

export default Footer
