import React from 'react';
import Header from '../../../components/client/Header';
import HeroSlider from '../swipers/HeroSlider';
import Footer from '../../../components/client/Footer';
import DreamHome from '../main/DreamHome';
import Hero from '../main/Hero';
import Stats from '../main/Stats';
import FeaturedProperties from '../main/FeaturedProperties';
import ConsultationBanner from '../main/ConsultationBanner';
import Areas from '../main/Areas';
import Testimonials from '../main/Testimonials';

function Home(props) {
    return (
        <div>
            <Header />
            <Hero />
            <Stats />
            <FeaturedProperties />
            <ConsultationBanner />
            <Areas />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default Home;