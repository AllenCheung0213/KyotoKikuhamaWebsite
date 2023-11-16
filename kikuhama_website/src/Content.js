// Content.js
import React from 'react';
import kyotoCity from "./pictures/kyotoCity.png";
import kikuhamaMap from "./pictures/kikuhamaMap.png";

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
                    <img src={kyotoCity} />
                </div>
            </div>
            <div id="map">
                <h2>Mapping Kikuhama 菊浜</h2>
                <div className = "project5">
                    <div className="imageOfKikuhama">
                        <img src ={kikuhamaMap} />
                    </div>
                    <div className = "text-description">
                        <p>
                            Welcome to the Kikuhama district of Kyoto! Our project is focused on mapping and assessing the current status of this historic neighborhood. We aim to develop thoughtful revitalization proposals that prioritize sustainability, preserve cultural heritage, and enhance community values. The goal is to create a more vibrant, attractive Kikuhama for all - residents, workers, businesses, and visitors alike.
                            Together, we can foster a thriving community here in Kikuhama that appeals to the needs and preferences of all who live, work and visit this charming district. With cooperation and fresh thinking, we can make Kikuhama an even better place to call home, set up shop, or spend time exploring.
                        </p>
                    </div>
                </div>
                <h3>Projects Over the Years (2019 - 2023)</h3>
                <div className = "over-the-years">
                    <embed src={yourPDFDocument} type="application/pdf" width="100%" height="600px" />

                </div>
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
