import React from 'react';

function Dropdown({handleToggle, display}) {
    return ( 
        <div style={{visibility:display.dropdown}} className="dropdown pointer" onClick={handleToggle}>
            <div className="dropdown-wrapper">
                <div className="dropdown-txt">
                    Choose your star wars film
                </div>
                <div className="dropdown-icon">
                    <img src="/assets/images/png/downarrow.png" alt="drop down icon" className="icon-img" />
                </div>
            </div>
        </div>
     );
}

export default Dropdown;