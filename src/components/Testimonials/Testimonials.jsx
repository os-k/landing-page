import React, { useState, useEffect } from 'react';
import './Testimonials.css';

const Testimonials = ({ testimonials, interval = 3000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, interval);

        return () => clearInterval(timer);
    }, [testimonials.length, interval]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    };

    return (
        <div className="slideshow">
            <button className="nav-button prev" onClick={goToPrevious}>&#10094;</button>
            <img src={testimonials[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slide" />
            <button className="nav-button next" onClick={goToNext}>&#10095;</button>
        </div>
    );
};

export default Testimonials;
