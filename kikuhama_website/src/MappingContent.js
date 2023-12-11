//MappingContent.js
import React from 'react';
import kikuhamaBusiness from "./pictures/KikuhamaMapBusinesses.png";
import kikuhamamHotel from "./pictures/KikuhamaMapHotels.png";
import kikuhamaLots from "./pictures/KikuhamaMapLots.png";
import kikuhamaFull from "./pictures/mapOfKikuhamaWithLegend.png";
import kikuhamaMap from "./pictures/highlightedKikuhamaMap.png";
import pastMap from "./pictures/pastMapOfKikuhama.png";
import kyotoAtNight from "./pictures/kyotoAtNight.jpg";
import IQP2023 from "./iqpreports/2023Report.pdf";
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
                    <p>Map of Kikuhama with all the buildings categorized (2023)</p>
                </div>
                <div className="mapping-text3">
                    <p>The neighborhood map created with QGIS for our 2023 analysis expanded significantly upon efforts from previous years, to fully align with the Kyoto Census map boundaries. Due to the widened scope of our mapped area, we utilized updated building data in conjunction with newer census data to conduct a more accurate and comprehensive examination of the neighborhood. </p>
                </div>
                <div className="pastMap">
                    <img src={pastMap}  alt="Past map of Kikuhama"/>
                </div>
                <div className="caption">
                    <p>Past map of Kikuhama used for projects from 2019-2022</p>
                </div>
                <div className="mapping-text4">
                    <embed src={IQP2023} type="application/pdf" width="57%" height="500px" />
                </div>
                <div className="caption">
                    <p>For more information, please refer our paper (2023)</p>
                </div>


            </div>
        </section>
    )
}

export default MappingContent;