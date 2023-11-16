import './faqgenaral.css'
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';

const Genaral = () => {
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
                    <h4 className="texting">General</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>
        <div className='container pt-5'>
            <div className='row'>
                
                <div className='col-md-6 col-lg-6 mt-2'>
                    <button
                        
                        className='Genaral-active'
                    >
                        General
                    </button>
                    <Link to={'/delivery'}><button
                        className='Genaral-button1'
                    >
                        Delivery
                    </button></Link>
                   <Link to={'/bmi'}> <button
                        className='Genaral-button1'
                    >
                        BMI
                    </button></Link>
                    <div>
                        <h1 style={{ color: 'silver' }}>General FAQs</h1>
                        <h3 className='p-3' style={{ color: 'silver' }}>General Food Related Questions</h3>
                        <div >
                            <div className="">
                                <button
                                    type="button"
                                    className="Genaral-location1"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo"
                                >
                                    Do we need to use a microwave to heat the meal?<span className='iconbtn1'><i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo" class="collapse text-start textitem">
                                    The microwave is the most convenient way to heat up the meals but you can also open the pouches and heat in a pan on a conventional stove.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo1"
                                >
                                    What other foods should I eat whilst I am on the Broccoly diet?<i className="iconbtn2 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo1" class="collapse text-start textitem">
                                    We do encourage you to add fresh fruit and vegetables to your diet each day. Included in your Diet Guide are some suggestions.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo2"
                                >
                                    Do you have vegetarian options?<i className="iconbtn3 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo2" class="collapse text-start textitem">
                                    Yes we do. We have lots of lunch and dinner meals that are suitable for vegetarians. Lots of our breakfasts and snacks are suitable.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo3"
                                >
                                    What is the difference between male and  female options? <i className="iconbtn4 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo3" class="collapse text-start textitem">
                                    We have included an extra snack each day within the Male option
                                    as men often require a higher daily calorie intake and this applies to losing weight
                                    as well.Because of this, the Male option has a slightly higher price
                                    point to factor in the additional 28 snacks.

                                </div>

                            </div>
                            <h3 className='p-3' style={{ color: "silver" }}>Ambient Food Related Questions </h3>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo4"
                                >
                                    What are ambient meals?<i className="iconbtn5 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo4" class="collapse text-start textitem">
                                    Ambient meals, or 'shelf-stable meals', are meals that can be safely stored at room temperature for use before their best-before date.
                                    They can be stored this way either because their ingredients are naturally stable at room temperature or because the meal has been prepared or packaged in a special way.


                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo5"
                                >
                                    How should I store and prepare ambient meals? <i className="iconbtn6 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo5" class="collapse text-start textitem">
                                    In order to provide you with a wide range of meals which can be stored suitably, and also reheated easily, our team have worked with suppliers to prepare meals using a Sous Vide method of cooking.Sous Vide is French for "under vacuum". It is a method of cooking in which food is sealed in airtight packing then placed in a temperature-controlled steam environment. The intent is to cook the item evenly, ensuring that the inside is properly cooked without overcooking the outside, and retain moisture.
                                    Because it is sealed in the packages, the aromatics are retained, not lost in the steam. The cooking process ensures that the food is totally cleared of any bacteria, which makes the food safe for long periods, without the use of unnecessary preservatives.Other meal options, are prepared using traditional cooking and packing methods.This means you can store these Diet Chef meals at room temperature, without the need to take up space in your fridge or freezer.


                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="Genaral-location1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo6"
                                >
                                    How are the ambient meals Provided?<i className="iconbtn7 fa-solid fa-angle-down sp"></i>
                                </button>
                                <div id="demo6" class="collapse text-start textitem">
                                The meals are developed by our Executive Chef then prepared, sealed in a pouch or tray and cooked in a pressure cooker.

                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-4 col-lg-4 shadow-sm mt-4'>
                <div className="row">
                            <div className="">
                                <div className="Genaral-sticky">
                                    <div className="stars">
                                        <span style={{ color: 'black' }}>Average</span>
                                        {Array.from({ length: averageRating }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>

                                    <p className="genaral-review-text">Based on 10,974 reviews on</p>
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
                            <button className='Genaral-getstarted mt-4'>Get Started Now</button>
                        </div>
                </div>
                <div className='col-md-1'></div>
                
            </div>
        </div>
        <Footer/>
        </div>

    )
}
export default Genaral;
