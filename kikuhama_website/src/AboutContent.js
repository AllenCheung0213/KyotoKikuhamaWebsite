// AboutContent.js
import React, { useState } from 'react';
import visionImage from "./pictures/ourvisionpicture.jpg";
import whyKikuhamaImage from "./pictures/whykikuhamapicture.jpg";
import diversePerspectiveImage from "./pictures/diverseperspectivespicture.jpg";
import kyotoAtNight from "./pictures/kyotoAtNight.jpg";
import kamoRiver from "./pictures/kamoriver.jpg";

const AboutContent = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [popupContent, setPopupContent] = useState({ title: '', paragraph: '' });

    const handleBoxClick = (title, paragraph) => {
        setPopupContent({ title, paragraph });
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <section id="about" className="about-content">
            <h1 className="centered-title">About Mapping Kikuhama</h1>
            <div className="about-description">
                <div className="about-text1">
                    <div className="text-with-image">
                        <p>
                            Welcome to the heart of transformation, where history meets innovation in the district of Kikuhama in Kyoto. Our project is more than an urban revitalization endeavor; it's a commitment to preserving the rich heritage of Kikuhama while ushering in a vibrant and sustainable future.
                        </p>
                        <img src={kyotoAtNight} alt="Kyoto ar " className="side-image" />
                    </div>
                </div>
                <div className="box" onClick={() => handleBoxClick('Our Vision', 'At the Kikuhama Urban Revitalization Project, we envision a community that seamlessly blends tradition with modernity. We aspire to create a district that stands as a testament to Kyoto\'s enduring cultural identity while embracing the opportunities and challenges of the 21st century.')}>
                    <img src={visionImage} alt="Our Vision" />
                    <h3>Our Vision</h3>
                </div>
                <div className="box" onClick={() => handleBoxClick('Why Kikuhama', 'Nestled alongside the serene Kamo River, Kikuhama holds a unique place in Kyoto\'s historical tapestry. Often overshadowed, yet inherently significant, this district embodies the resilience and character that define Kyoto\'s essence. Our focus on Kikuhama stems from a deep appreciation for its understated allure and an understanding that its revitalization can serve as a beacon for harmonious urban development.')}>
                    <img src={whyKikuhamaImage} alt="Why Kikuhama" />
                    <h3>Why Kikuhama</h3>
                </div>
                <div className="box" onClick={() => handleBoxClick('Diverse Perspectives', 'To ensure a well-rounded approach, we engage with a diverse array of stakeholders, including local business owners, students, government workers, and the esteemed older members of the community. By weaving together the insights of these key demographics, our project strives to create a revitalized Kikuhama that resonates with the aspirations and needs of all its residents.')}>
                    <img src={diversePerspectiveImage} alt="Diverse Perspectives" />
                    <h3>Diverse Perspectives</h3>
                </div>
                <div className="box" onClick={() => handleBoxClick('Our Approach', 'Our approach is rooted in a delicate balance—preserving the historical charm that makes Kikuhama unique, while innovatively addressing the demands of a modern community. We believe in a collaborative and community-driven process, where every voice contributes to the narrative of Kikuhama\'s evolution. At the Kikuhama Urban Revitalization Project, we\'re not just revitalizing a district; we\'re building a future where the echoes of the past resonate harmoniously with the rhythms of progress.')}>
                    <img src={kamoRiver} alt="Our Approach" />
                    <h3>Our Approach</h3>
                </div>
            </div>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <button className="close-button" onClick={closePopup}>X</button>
                        <h3 className='popup-title'>{popupContent.title}</h3>
                        <p className='popup-paragraph'>{popupContent.paragraph}</p>
                    </div>
                </div>
            )}
        </section>
    );
};

export default AboutContent;
