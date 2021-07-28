import React, { Fragment } from 'react' 

const Navbar = () => {
    return (
        <Fragment>
            <header>
                <div className="container pr-5 pt-2">
                    <div className="row">
                        <div className="header-logo">
                            <a href="index.html" className="ml-3">
                                <img src={'/asset/logo.png'} alt="logo" />
                            </a>
                        </div>
                        <div className="header-right">
                            <ul className="menu-nav">
                                <li><a href="#pricing">Pricing</a></li>
                                <li><a href="#">Testimonial</a></li> 
                                <li><button className="btn-white">Get The App</button></li>                                 
                            </ul>
                        </div>
                        <div className="menu-btn d-lg-none d-md-none">
                            <span className="menu-btn_burger" />
                        </div>
                    </div>
                </div>
            </header>

        </Fragment>
    )
}

export default Navbar
