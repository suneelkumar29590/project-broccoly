// ReviewCarousel.js
import React, { useState } from "react";


import "./section4.css";

const reviews = [
  {
    stars: 5,
    heading: "Excellent Service",
    text: "I couldn't be happier with the quality of the food and the service provided by this diet plan. Highly recommended!"
  },
  {
    stars: 4,
    heading: "Great Results",
    text: "The results I've achieved with this diet plan are fantastic. I feel healthier and more energetic."
  },
  {
    stars: 4,
    heading: "Tasty Meals",
    text: "The meals are not only healthy but also delicious. I look forward to every meal."
  },
  {
    stars: 5,
    heading: "Effective and Convenient",
    text: "This diet plan is not only effective but also convenient. It fits perfectly into my busy lifestyle."
  },
  {
    stars: 3,
    heading: "Improved Health",
    text: "While it took some time, I have seen a noticeable improvement in my health since starting this diet plan."
  },
  {
    stars: 5,
    heading: "Life-Changing Experience",
    text: "This diet plan has truly been a life-changing experience for me. I've lost weight and gained confidence."
  },
  {
    stars: 4,
    heading: "Impressive Results",
    text: "I'm impressed with the results I've achieved with this diet plan. It's worth every penny."
  },
  {
    stars: 5,
    heading: "Highly Recommend",
    text: "I highly recommend this diet plan to anyone looking to improve their health and well-being."
  }
];



  



const Section4 = () => {
  const [currentIndex, setCurrentIndex] = useState(1); // Set initial index to 1

  const nextReview = () => {
    setCurrentIndex((currentIndex + 1) % reviews.length);
  };

  const previousReview = () => {
    setCurrentIndex((currentIndex - 1 + reviews.length) % reviews.length);
  };

  const averageRating = calculateAverageRating(reviews);
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);
  
  function calculateAverageRating(reviews) {
    if (reviews.length === 0) return 0;
    const totalRating = reviews.reduce((sum, review) => sum + review.stars, 0);
    return Math.round(totalRating / reviews.length);
  }

  return (
    <div className="review-carousel mt-5">
      <h2 className="carousel-heading">What Our Customers Say</h2>
     
    <div className="carousel-cards">
    <div className="carousel-card card-average ">
        <div className="stars">
          {Array.from({ length: averageRating }, (_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
        </div>
        <h3 className="card-heading">Average Rating</h3>
        <p className="review-text">The average rating of our customers' reviews.</p>
        <p><span className="text-center googleword"><span className="text-primary">G</span><span className="text-danger">o</span><span className="text-warning">o</span><span className="text-primary">g</span><span className="text-primary">l</span><span className="text-danger">e</span></span> </p>
        <p className="text-center">reviews{Array.from({ length: averageRating }, (_, i) => (
            <i key={i} className="fas fa-star"></i>
          ))}
          </p>
      </div>
      <div>
        
      </div>
        <button className="arrow-button prev-button " onClick={previousReview}>
          <i className="fas fa-arrow-left"></i>
        </button>
        {visibleReviews.map((review, index) => (
          <div key={index} className="carousel-card card-review">
            <div className="star">
              {Array.from({ length: review.stars }, (_, i) => (
                <i key={i} className="fas fa-star"></i>
              ))}
            </div>
            <h3 className="card-heading mb-2 mt-3">{review.heading}</h3>
            <p className="review-text">{review.text}</p>
          </div>
        ))}
        <button className="arrow-button next-button" onClick={nextReview}>
          <i className="fas fa-arrow-right"></i>
        </button>
      
      
      </div>
    </div>
  );
};

export default Section4;
