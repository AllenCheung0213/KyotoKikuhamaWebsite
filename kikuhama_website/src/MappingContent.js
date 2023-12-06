//MappingContent.js
import React from 'react';
import kikuhamaBusiness from "./pictures/KikuhamaMapBusinesses.png";
import kikuhamamHotel from "./pictures/KikuhamaMapHotels.png";
import kikuhamaLots from "./pictures/KikuhamaMapLots.png";
import kikuhamaFull from "./pictures/KikuhamaMapFull.png";
import kikuhamaMap from "./pictures/highlightedKikuhamaMap.png";


const MappingContent = () => {
    return (
        <section id="mapping" className="mapping-content">
            <h1>Mapping Kikuhama 2023</h1>
            <div className="mapping-description">
                <div className="mapping-text1">
                    <p>From October to December, our team of 4 students spearheaded the Mapping Kikuhama project.
                        During our endeavors, we mapped the entirety of the Kikuhama neighborhood, including new areas that were excluded from previous IQPs, and classified each building in the neighborhood to observe how the neighborhood has changed from past years.
                        We also conducted interviews to gauge local's views on the town, their view on the Nintendo Foundation's financial interests in the neighborhood, and learn about the people themselves.
                    </p>
                </div>
                <div className="kikuhamaMap">
                    <img src={kikuhamaMap} alt="Kikuhama Map" />
                </div>
                <div className="caption">
                    <p>Map of Kikuhama according to the 2020 census. Different sections on the map are highlighted as the area was divided into 6 sections for the project.</p>
                </div>
                <div className="mapping-text2">
                    <p>To tackle this project, we began by cutting up the district into distinct smaller sections and each of these sections were further broken down further into smaller blocks. We took pictures of all the buildings in the area, categorized them, and found the owners of those buildings to see if there is a consistent land buying trend in the area. Here is the map of Kikuhama with categorized buildings: </p>
                </div>
                <div className="kikuhamaFullMap">
                    <img src={kikuhamaFull} alt="Kikuhama Map" />
                </div>
                <div className="caption">
                    <p>Map of Kikuhama according to the 2020 census. Different sections on the map are highlighted as the area was divided into 6 sections for the project.</p>
                </div>
                <div className="mapping-text3">
                    <p>Analysis of the above image. Next picture is the table.</p>
                </div>
            </div>
        </section>
    )
}

export default MappingContent;