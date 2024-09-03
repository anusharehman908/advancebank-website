// src/components/CircleSection.jsx
import React from 'react';
import './CircleSection.css';

// Import images
import circleImage1 from '../../assets/5.svg'; // Adjust path as needed
import circleImage2 from '../../assets/6.svg'; // Adjust path as needed
import circleImage3 from '../../assets/7.svg'; // Adjust path as needed
// import circleImage4 from '../../assets/8.png'; // Adjust path as needed

const CircleSection = () => {
    return (
        <section className="circle-section">
            <div className="circle">
              <a href="https://www.advanspakistan.com/products/borrow/"> <img src={circleImage1} alt="Circle 1" className="circle-image" /></a> 
                <p className="circle-text">Loan Offers</p>
            </div>
            <div className="circle">
              <a href="https://www.advanspakistan.com/products/manage/"> <img src={circleImage2} alt="Circle 2" className="circle-image" /></a> 
                <p className="circle-text">your money
                </p>
              
            </div>
{/*             
            <div className="circle">
               <a href="https://www.advanspakistan.com/products/save/"><img src={circleImage3} alt="Circle 3" className="circle-image" /></a> 
                <p className="circle-text">Savings Solutions</p>
            </div> */}


            {/* <div className="circle">
            <a href="https://www.advanspakistan.com/products/banking-on-equality/">  <img src={circleImage4} alt="Circle 4" className="circle-image" /></a>  
                <p className="circle-text">Women Financial Services</p>
            </div> */}
        </section>
    );
};

export default CircleSection;
