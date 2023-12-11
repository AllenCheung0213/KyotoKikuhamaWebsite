// HomePageContent.js

import React from 'react';
import backgroundImage from "./pictures/kyotocityimagebackground.png";

const HomePageContent = () => {
    return (
        <section
            id="home"
            style={{
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '130vh', // Set a higher value for a longer section
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <div className="home-content">
                <h1>Kyoto Project Center</h1>
                <p> For the past 4 years, we have been exploring the Kyoto prefecture. From augmented reality tourism to sustainable farming practices, students have explored the multifaceted challenges presented by an intriguing city that blends history and modernity.
                    </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>
                <p> </p>


            </div>
        </section>
    );
};

export default HomePageContent;