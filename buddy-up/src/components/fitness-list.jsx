import React, { Fragment } from 'react'    

const FitnessList = () => {
    return (
        <Fragment>
            <section>
                <div className="container">
                    <div className="row p-3">
                        <div className="col-12 p-4 text-center">
                            <h1 className="font-weight-bolder">Easily Connect Your Fitness Apps</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 pb-5">
                            <div className='row row-cols-3 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-6 big-deal-div pt-3 product-list-grid'>
                                <div className='col'>
                                    <div className='text-center'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/nike.png'}
                                            alt='brand'
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-center'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/adidas.png'}
                                            alt='brand'
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-center'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/UA.png'}
                                            alt='brand'
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-center mt-5 mt-lg-0'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/google.png'}
                                            alt='brand'
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-center mt-5 mt-lg-0'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/runkeeper.png'}
                                            alt='brand'
                                        />
                                    </div>
                                </div>
                                <div className='col'>
                                    <div className='text-center mt-5 mt-lg-0'>
                                        <img
                                            className='deal-image'
                                            src={'/asset/strava.png'}
                                            alt='brand'
                                        />
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

export default FitnessList
