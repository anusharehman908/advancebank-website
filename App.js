import React, { useState } from 'react';
import './App.css';
import Header from './components/website/Header';
import CircleSection from './components/website/CircleSection';
import FindUsSection from './components/website/FindUsSection';
import BrandsSection from './components/website/BrandsSection';
import Footer from './components/website/Footer';
// import Form from './components/website/Form';
import Navbar from './components/website/Navbar';

function App() {
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleFormSubmit = () => {
        setFormSubmitted(true);
    };





    return (
        // <>
        //     {!formSubmitted ? (
        //         <Form onFormSubmit={handleFormSubmit} />
        //     ) : (
                <>
                <Navbar />
                    <Header />
                    <CircleSection />
                    <FindUsSection />
                    <BrandsSection />
                    <Footer />
                </>
            )}
//         </>
//     );
// }

export default App;
