// Content.js
import React from 'react';

const Content = () => {
    return (
        <section>
            <h1>Kyoto Project Center</h1>
            <div className="project-description">
                <div className="text">
                    <p>
                        For the past 4 years, we have been exploring the Kyoto prefecture. From augmented reality to tourism to sustainable farming practices, students have explored the multifaceted challenges presented by an intriguing city that blends history and modernity.
                    </p>
                </div>
                <div className="image">
                    {/* Add your image source here */}
                    <img src="path/to/your/image.jpg" alt="Kyoto Project" />
                </div>
            </div>
            <div id="map">
                <h2>Mapping Kikuhama</h2>
                {/* Your map content goes here */}
            </div>
            <div id="projects">
                <h2>Student Projects</h2>
                {/* Your projects content goes here */}
            </div>
            <div id="open-data">
                <h2>Open Data</h2>
                {/* Your open data content goes here */}
            </div>
            {/* Add more sections as needed */}
        </section>
    );
};

export default Content;
