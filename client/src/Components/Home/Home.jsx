import React from 'react';
import Banner from './Banner/Banner';
import MiniCard from './MiniCard/MiniCard';
import HomeCard from './HomeCard/HomeCard';
import ImageColumn from '../Utilities/ImageColumn/ImageColumn';
import PartnerSlider from './PartnerSlide/PartnerSlide';
import Newsletter from './NewsTeller/NewsTeller';
import Accordion from './Accordion/Accordion';
import ProjectCount from './ProjectCount/ProjectCount';
import TreeCaretaker from './TreeCaretaker/TreeCaretaker';
import PlantSection from './PlantSection/PlantSection';
import Fruit from './HomeCard/Fruit';
import Vegetable from './HomeCard/Vegetable';
import Seeds from './HomeCard/Seeds';

const Home = () => {
    return (
        <div >
            <Banner/>
            <MiniCard/>

            <ImageColumn />
            <HomeCard/>
            <Fruit/>
            <ImageColumn/>
            <Vegetable/>
            
            <Seeds/>
            {/* <HomeCard/> */}
           
            {/* <HomeCard/>
            <HomeCard/> */}


            
           <div className='lg:space-y-24'>
            
            <PlantSection/>
           <Accordion/>
            <ProjectCount/>
            
            <TreeCaretaker/>
            <Newsletter/>
            <PartnerSlider/>
           </div>
            

        </div>
    );
};

export default Home;