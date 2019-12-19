import React from 'react';
const Hamburger = ({isHidden, setIsHidden}) => {
    return(
        <button className="hamburger" onClick={() => setIsHidden(!isHidden)}>
            <div className='hamburger--dash'/>
            <div className='hamburger--dash'/>
            <div className='hamburger--dash'/>
        </button>
    );
}

export default Hamburger;