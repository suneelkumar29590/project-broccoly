import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './terms.css'
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';

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

const Terms = () => {

    const [isOverflowHidden, setIsOverflowHidden] = useState(false);
    const adjustStyles = () => {
      const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      if (screenWidth <= 1600) {
        setIsOverflowHidden(true);
      } else {
        setIsOverflowHidden(false);
      }
    };
    useEffect(() => {
      adjustStyles();
      window.addEventListener('resize', adjustStyles);
      return () => {
        window.removeEventListener('resize', adjustStyles);
      };
    }, []);

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
    const [currentIndex, setCurrentIndex] = useState(1); 
    const averageRating = calculateAverageRating(reviews);
    const visibleReviews = reviews.slice(currentIndex, currentIndex + 6);

    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.stars, 0);
        return Math.round(totalRating / reviews.length);
    }

    
  
    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
          
      <Header/>
      <Header2/>
      <div className="banner">
      <div className="left-side">
      <h2 className='texting'>Terms and Conditions</h2>
                    <p className='texting'> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
        
      </div>
      </div>
            <div className="main-container row pt-5">
                <div className="navi-container col-lg-3">
                    <nav>
                    <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', flexDirection: 'column' }}>
            <li style={{ marginBottom: '10px' }}>
                <Link to="" style={{ color: 'black' }}>Contact Us</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
                <Link to="" style={{ color: 'black' }}>Delivery & Returns</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'black' }}>Guarantee</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
            <i class="fa-solid fa-caret-right termaslist"></i><Link to="/Terms"  className='termaslist'>Terms and Conditions</Link>
            </li>
            <li style={{ marginBottom: '10px'}} >
                <Link to="/Privacy" style={{ color: 'black' }}>Privacy Policy</Link>
            </li>
            <li style={{ marginBottom: '10px' }}>
                <Link to="/" style={{ color: 'black' }}>Security</Link>
            </li>
        </ul>
                    </nav>
                </div>
                <div className="col-lg-5 p-5">
                    <h2 className="con brdr-btm">General Terms and Conditions</h2>
                    <h2 className="intro1">Introduction</h2>
                    <p className="desc1">These are our general terms and conditions. They apply to any sale by Broccoly Ltd <br /> ("Diet Chef" or "us") to any person ("the Customer" or "you") of any product or <br /> products. Diet Chef Ltd is a company registered in Scotland number SC328517, VAT <br /> regustration number GB 2843 10, D-U-N-S number 21-008-9880. Please ensure that you will be bound by them once a contract comes into existence between you and <br /> us.
                     </p>
                     <h2 className="intro1 brdr-btm">Contact Details</h2>
                    <p className="desc1">Diet Chef Ltd. 2 Rennie Square, Brucefield Industrial Estate,Livingston,Scotland,<br />UK,EH54 9DF. Fax:0131 220 2473 Email:info@broccoly.com
                     </p>
                     <p className="desc1 brdr-btm">Communication willbe in English only</p>
                     <h2 className="intro1">Health</h2>
                    <p className="desc1">We strongly recommended that you seek medical advice before starting any weight<br /> loss or nutritional programme. The information provided by Broccoly is not medical <br /> advice or a substitute for medical treatment. You should not use Broccoly if you are <br /> underweight, pregnant, breastfeeding, under 18 or have any medical condition which affects your dietary requirements.
                     </p>
                </div>
               
                
                <div className=" rev-iew col-md-3 col-lg-3">
                    <div className="shadow-sm">
                        <div className="">
                            <div className="sticky">
                                <div className="stars">
                                    <span style={{ color: 'black' }}>Average</span>
                                    {Array.from({ length: averageRating }, (_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>

                                <p className="review-text">Based on 10,974 reviews on</p>
                                <p>showing our4 & 5 star reviews</p>
                            </div>
                        </div>

                        <div className="" style={{ maxHeight: "400px", overflowY: "auto",textAlign:"start" }}>
                            {visibleReviews.map((review, index) => (
                                <div key={index} className="">
                                    <div className="star">
                                        {Array.from({ length: review.stars }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>
                                    <h3 className="card-heading">{review.heading}</h3>
                                    <p className="review-text">{review.text}</p>
                                </div>
                            ))}

                        </div>
                        <button className='getstarted mt-4 mb-4'>Get Started Now</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </ div>
    )
}
export default Terms;