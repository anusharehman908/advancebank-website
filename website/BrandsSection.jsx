import React from 'react';
import './BrandsSection.css';
import brand1 from '../../assets/7.svg'; // Add more brand images as needed
import brand2 from '../../assets/8.png';
import brand3 from '../../assets/9.jpg';
import brand4 from '../../assets/10.svg';

const BrandsSection = () => {
  return (
    <section className="brands-section">
      <div className="container">
        <h2 className="section-heading">Our Trusted Brands</h2>
        <div className="brands-content">
          <div className="brands-images">
            <img src={brand1} alt="Brand 1" className="brand-image" />
            <img src={brand2} alt="Brand 2" className="brand-image" />
            <img src={brand3} alt="Brand 3" className="brand-image" />
            <img src={brand4} alt="Brand 4" className="brand-image" />
          </div>
          <div className="brands-text">
            <h3>Why Choose Us?</h3>
            <p>We collaborate with leading brands to bring you the best products and services. Our partnerships ensure quality and reliability in every purchase.</p>
            <div className="button-container">
  <a href="https://www.advanspakistan.com/products/banking-on-equality/"> <button className="btn-primary">	
  Women Financial</button></a> 
              <button className="btn-secondary">Contact Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsSection;
