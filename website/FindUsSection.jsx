import React from "react";
import "./FindUsSection.css";

const FindUsSection = () => {
    return (
        <div className="find-us-section">
            <div className="find-us-content">
                <img
                    src="https://www.advanspakistan.com/fileadmin/user_upload/Advans-Pakistan_Personnages-04.png"
                    alt="Find Us"
                    className="find-us-image"
                />
                <div className="find-us-info">
                    <h2>Find us</h2>
                    <p>
                        Find your nearest branch to discover our range of tailored financial services.
                    </p>
                    <button className="find-us-button">Find me!</button>
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Enter your city/postal code"
                        />
                        <button className="search-button">🔍</button>
                    </div>
                </div>
            </div>
            <div className="map-container">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14121.609312079516!2d69.3451159!3d24.8607341!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0!2zMjTCsDUxJzE4LjciTiA2OcKwMjAnNDEuNSJF!5e0!3m2!1sen!2s!4v1675244175111!5m2!1sen!2s"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    title="Google Maps"
                ></iframe>
            </div>
        </div>
    );
};

export default FindUsSection;
