import './faqdelivary.css'
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import Header from '../header/navbar';
import Header2 from '../header2/header2';

const Delivery = () => {
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
    const visibleReviews = reviews.slice(currentIndex, currentIndex + 3);

    function calculateAverageRating(reviews) {
        if (reviews.length === 0) return 0;
        const totalRating = reviews.reduce((sum, review) => sum + review.stars, 0);
        return Math.round(totalRating / reviews.length);
    }

    const [activeButton, setActiveButton] = useState("General");
    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };
    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>
            <Header2/>
            <div className="banner">
                <div className="left-side">
                    <h4 className="texting"> Delivery</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>
             <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                   <Link to={'/general'}> <button
                        className='Deliverybutton1'
                    >
                        General
                    </button></Link>
                    <button
                        className='Deliveryactive'
                    >
                        Delivery
                    </button>
                    <Link to={'/bmi'}><button
                        className='Deliverybutton1'
                    >
                        BMI
                    </button></Link>
                    <div>
                        <h1 style={{ color: 'silver' }}>Delivery</h1>
                        <p className='Delfont-size'>Orders will be shipped for delivery within 24 hours of your order being placed or the first working day if ordered at the weekend.</p>
                        <p className='Delfont-size'>Orders received by 3:30 p.m. are shipped for delivery next working day to most areas.</p>
                        <p className='Delfont-size'>Orders received after 3:30 p.m. will be shipped a day later.</p>
                        <p className='Delfont-size'>In most parts of the INDIA you will be texted with a one hour delivery window.</p>
                        <div >
                            <div className="">
                                <button
                                    type="button"
                                    className="Deliverylocation1"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo"
                                >
                                    How much will delivery cost?<span className='dicon1'><i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo" class="collapse text-start textitem">
                                    We use a secure courier service to make sure your Diet Chef order reaches you safe and sound.
                                    Standard delivery = FREE on all Pay monthly plans

                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Deliverylocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo1"
                                >
                                    How long will delivery take?<span className='dicon2'><i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo1" class="collapse text-start textitem">
                                    We aim to get your order to you as quickly as possible so that you can get started with Diet Chef. Generally delivery is next working day or two working days for remote areas.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Deliverylocation1"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo2"
                                >
                                    Who will deliver my Parcel?<span className='dicon3'><i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo2" class="collapse text-start textitem">
                                    We use Mail for all of our shipping in the India and other couriers including DHL for orders outside the India.
                                    Our couriers offer a swift and secure service, and we'll send you delivery updates by email throughout your order.

                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className='col-md-1 col-lg-1'></div>
                <div className='col-md-4 col-lg-4 shadow-sm'>
                <div className="row">
                            <div className="">
                                <div className="Delivery-sticky">
                                    <div className="stars">
                                        <span style={{ color: 'black' }}>Average</span>
                                        {Array.from({ length: averageRating }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>

                                    <p className="Del-review-text">Based on 10,974 reviews on</p>
                                    <p>showing our4 & 5 star reviews</p>
                                </div>
                            </div>

                            <div className="" style={{ maxHeight: "400px", overflowY: "auto" }}>
                                {visibleReviews.map((review, index) => (
                                    <div key={index} className="">
                                        <div className="star">
                                            {Array.from({ length: review.stars }, (_, i) => (
                                                <i key={i} className="fas fa-star"></i>
                                            ))}
                                        </div>
                                        <h3 className="">{review.heading}</h3>
                                        <p className="">{review.text}</p>
                                    </div>
                                ))}

                            </div>
                            <button className='Del-getstarted mt-4'>Get Started Now</button>
                        </div>
                </div>
                <div className='col-md-1 col-lg-1'></div>
            </div>
        </div>
<Footer/>

        </div>
       
    )
}
export default Delivery;
