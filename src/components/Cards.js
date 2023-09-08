import React from "react";
import CardItem from './CardItem';
import './Cards.css';
import hero from '../footimages/mid-woven.jpg';
import skate from '../footimages/Janowski-mint.jpg';
import lifestyle from '../footimages/Janowski-hero.jpg';
import kid from '../footimages/kid-shoe.jpg';
import hike from '../footimages/hiking.jpg';


function Cards() {


    return(
    <>
        <div className="cards">
            <h1>
                Check out the newest releases below
            </h1>
            <div className="cards_container">
                <div className="cards_wrapper">
                    <ul className="cards_items">
                        <CardItem 
                        src={hero} 
                        text="New Mid-Tops perfect for back to school" 
                        label="Back To School" 
                        path="/services" 
                        />
                        <CardItem 
                        src={skate} 
                        text="New skate styles fresh off the Street Leaguse competition circuit" 
                        label="Skate" 
                        path="/services" 
                        />
                    </ul>
                    <ul className="cards_items">
                        <CardItem 
                        src={lifestyle} 
                        text="Shoes to fit any lifestyle, from casual to sport" 
                        label="Lifestyle" 
                        path="/services" 
                        />
                        <CardItem 
                        src={kid} 
                        text="Kids sizes available for the whole family" 
                        label="Baby/Toddler" 
                        path="/services" 
                        />
                        <CardItem 
                        src={hike} 
                        text="Stay comfortable in any terrain with our new trail line" 
                        label="Hiking" 
                        path="/services" 
                        />
                    </ul>
                </div>
            </div>
        </div>
    </>
    )
}
export default Cards;