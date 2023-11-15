// Sidebar.js
import React, { useState } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
            <div className="hamburger-menu" onClick={toggleSidebar}>
                &#9776;
            </div>
            <nav>
                <ul>
                    <li>
                        <a href="#Map">Mapping Kikuhama 菊浜</a>
                    </li>
                    <li>
                        <a href="#projects">Student Projects</a>
                    </li>
                    <li>
                        <a href="#open-data">Open Data</a>
                    </li>
                    {/* Add more links as needed */}
                </ul>
            </nav>
        </aside>
    );
};

export default Sidebar;