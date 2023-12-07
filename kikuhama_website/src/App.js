// App.js
import React, { useEffect, useState } from 'react';
import './App.css';
import HomePageContent from './HomePageContent';
import AboutContent from './AboutContent';
import MappingContent from "./MappingContent";
import ContactUs from "./ContactUs";
const App = () => {
    const [scrolled, setScrolled] = useState(false);
    const [hovered, setHovered] = useState(false);

    useEffect(() => {
        // Add scroll and mousemove event listeners
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('mousemove', handleMouseMove);

        // Remove the event listeners when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    // Handle scroll event
    const handleScroll = () => {
        const scrollPosition = window.scrollY || window.pageYOffset;
        setScrolled(scrollPosition > 80); // Adjust the threshold as needed
    };

    // Handle mousemove event
    const handleMouseMove = (event) => {
        const mouseY = event.clientY;
        setHovered(mouseY <= 50); // Adjust the threshold as needed
    };

    return (
        <div>
            <header id="header" className={`${scrolled || hovered ? 'scrolled' : ''}`}>
                <nav>
                    <ul>
                        <li onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>Home</li>
                        <li onClick={() => window.scrollTo({ top: 920, behavior: 'smooth' })}>About</li>
                        <li onClick={() => window.scrollTo({ top: 2390, behavior: 'smooth' })}>Mapping Kikuhama</li>
                        <li><a href="#projects">Other Projects</a></li>
                        <li onClick={() => window.scrollTo({ top: 7000, behavior: 'smooth' })}>Contact Us</li>
                    </ul>
                </nav>
            </header>
            <div id="content" className={`initial ${scrolled ? 'scrolled' : ''}`}>
                <div id="homepage">
                    <HomePageContent />
                    <div id="aboutpage">
                        <AboutContent />
                        <MappingContent />
                        <ContactUs />
                    </div>
                </div>
                {/* Add other content components as needed */}
            </div>
        </div>
    );
};

export default App;
