



// src/components/website/Header.jsx
import React from 'react';
import Slider from 'react-slick';
import './Header.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


// Import images
import image1 from '../../assets/1.png'; // Adjust path as needed
import image2 from '../../assets/2.png'; // Adjust path as needed
import image3 from '../../assets/3.png'; // Adjust path as needed

const Header = () => {
    // const settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 3000,
    // };


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            }
        ]
    };
    

    return (
        <header className="header">
            <div className="text-section">
                <h1>Advans Nafabaksh</h1>
                <p>
                Save for a future business or personal project</p>
              <a href="https://www.advanspakistan.com/products/manage/sahulat-current-account/"><button>Leran More</button></a>  
            </div>
            <div className="slider-section">
                <Slider {...settings}>
                    <div>
                        <img src={image1} alt="Slide 1" className="slider-image" />
                    </div>
                    <div>
                        <img src={image2} alt="Slide 2" className="slider-image" />
                    </div>
                    <div>
                        <img src={image3} alt="Slide 3" className="slider-image" />
                    </div>
                </Slider>
            </div>
        </header>
    );
};

export default Header;

