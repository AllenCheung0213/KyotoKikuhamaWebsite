// Content.js
import React from 'react';
import kyotoCity from "./pictures/kyotoCity.png";
import kikuhamaMap from "./pictures/kikuhamaMap.png";
import IQP2019 from "./iqpreports/2019Report.pdf";
import IQP2021 from "./iqpreports/2021Report.pdf";
import IQP2022 from "./iqpreports/2022Report.pdf";
import IQP2022a from "./iqpreports/2022aReport.pdf";
import IQP2023 from "./iqpreports/2023Report.pdf";
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
                <h3>Projects in Kikuhama Over the Years (2019 - 2023)</h3>
                <div className="over-the-years">
                    {/* Row 1 */}
                    <div className="pdf-row">
                        <div className="pdf-embed">
                            <embed src={IQP2019} type="application/pdf" width="100%" height="400px" />
                            <p className="caption">Mapping for the Future of Gojo Rakuen (2019)</p>
                        </div>
                        <div className="pdf-embed">
                            <embed src={IQP2021} type="application/pdf" width="100%" height="400px" />
                            <p className="caption">Mapping for Vital Kyoto: A Case Study on Kikuhama (2021)</p>
                        </div>
                    </div>
                    {/* Row 2 */}
                    <div className="pdf-row">
                        <div className="pdf-embed">
                            <embed src={IQP2022a} type="application/pdf" width="100%" height="400px" />
                            <p className="caption">Unrooting the Issue: Conflict Resolution of Urban River Restoration, Kikuhama (2022)</p>
                        </div>
                        <div className="pdf-embed">
                            <embed src={IQP2022} type="application/pdf" width="100%" height="400px" />
                            <p className="caption">Community-Centered Activity Along The Takase River (2022)</p>
                        </div>
                    </div>
                </div>
                <h3>Revitalizing Kikuhama: Mapping, Envisioning, and Building a Vibrant Tomorrow (2023)</h3>
                <div className="project2023">
                    <div className="pdf-embed">
                        <embed src={IQP2023} type="application/pdf" width="100%" height="400px" />
                        <p className="caption">Revitalizing Kikuhama: Mapping, Envisioning, and Building a Vibrant Tomorrow (2023)</p>
                    </div>
                </div>
            </div>
            <div id="projects">
                <h2>Student Projects 2023</h2>
                {/* Your projects content goes here */}
            </div>
            <div id="open-data">
                <h2>Open Data for Kikuhama Project 2023</h2>
                {/* Your open data content goes here */}
            </div>
            {/* Add more sections as needed */}
        </section>
    );
};

export default Content;
