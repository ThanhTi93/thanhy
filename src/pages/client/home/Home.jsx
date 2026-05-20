import React from 'react';
import Header from '../../../components/client/Header';
import HeroSlider from '../swipers/HeroSlider';
import Footer from '../../../components/client/Footer';
import DreamHome from '../main/DreamHome';
import TopProperties from '../main/TopProperties';

function Home(props) {
    return (
        <div>
            <Header />
            <HeroSlider />
            <div className="bg-[#fafafa]">
            <DreamHome />
            <TopProperties />
            </div>
            <Footer />
        </div>
    );
}

export default Home;