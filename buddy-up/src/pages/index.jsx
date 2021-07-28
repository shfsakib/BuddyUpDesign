import React, { Fragment } from 'react'
import Benefit from '../components/benefit'
import FitnessList from '../components/fitness-list'
import Footer from '../components/footer'
import GetApp from '../components/get-app'
import Journey from '../components/journey'
import MainDiv from '../components/main-div'
import Navbar from '../components/navbar'
import Partner from '../components/partner'
import Price from '../components/price'
import Team from '../components/team'

const Index = () => {
    return (
        <Fragment>
            <Navbar />
            <MainDiv/>
            <FitnessList/>
            <Benefit/>
            <Journey/>
            <Price/>
            <Partner/>
            <Team/>
            <GetApp/>
            <Footer/>
        </Fragment>
    )
}

export default Index
