import React from 'react';
// import Banner from './section-components/banner-v2';
import Aboutv3 from './section-components/about-v3';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import ShogGrid from './shop-components/shop-grid-v1';
import Hero from "./hero";
import TitlesHeader from "./consultora-fm-components/titles-header";
import TestimonialV1 from "./section-components/testimonial-v1";

const Home_V2 = () => {
    return (
        <div>
            {/*<Banner/>*/}
            <Hero/>

            <TitlesHeader text={"PROPIEDADES DISPONIBLES"}/>
            <ShogGrid/>
            <CallToActionV1/>
            <Aboutv3/>
            <TestimonialV1/>
            <Footer/>
        </div>
    )
}

export default Home_V2

