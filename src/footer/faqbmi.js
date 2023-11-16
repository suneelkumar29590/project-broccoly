import './faqbmi.css';
import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';

const BMI = () => {
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
                    <h4 className="texting">BMI</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>
            
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-6 col-lg-6'>
                    <Link to={'/general'}> <button
                        className='bmibutton1'
                    >
                        General
                    </button></Link>
                    <Link to={'/delivery'}> <button
                        className='bmibutton1'
                    >
                        Delivery
                    </button></Link>
                     <button
                        className='bmiactive'
                    >
                        BMI
                    </button>
                    <div>
                        <h1 style={{ color: 'silver' }}>BMI</h1>

                        <div >
                            <div className="">
                                <button
                                    type="button"
                                    className="bmilocation1"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo"
                                >
                                    What is body mass index(BMI)? <span className='BMIicon1'><i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo" class="collapse text-start textitem">
                                    Measuring your BMI is a great way to check if you are a healthy weight for your height. The calculation divides your weight by your height squared.

                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo1"
                                >
                                    What does BMI tell me?<span className='BMIicon2'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo1" class="collapse text-start textitem">
                                    BMI helps give you an indication as to whether you are at an increased risk of health problems that are associated with overweight and obesity. In general the higher your BMI the greater your risk of health problems. You can use our Free personal profile to check if you are in a healthy BMI range.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo2"
                                >
                                    Who should use BMI calculations?<span className='BMIicon3'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo2" class="collapse text-start textitem">
                                    A body mass index calculation is for adults. It uses ranges for each category which takes into consideration that people come in different shapes and sizes.
                                    *please note there are exceptions to the rule please see 'how accurate is BMI'


                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo3"
                                >
                                    What are the BMI ranges?<span className='BMIicon4'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo3" class="collapse text-start textitem">
                                    If you register below 18.5 this means that you may be underweight.<br />
                                    If your are between 18.5 and 24.9 this puts you in the healthy weight range.<br />
                                    If you are between 25 and 29.9 this means you may be overweight.<br />
                                    If your BMI is 30 or above this is classified as obese.<br />



                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo4"
                                >
                                    What if I am not in healthy range?<span className='BMIicon5'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo4" class="collapse text-start textitem">
                                    If your BMI falls outside of the "healthy" weight range you may want to talk with your GP or Medical Practitioner about how you can best achieve a healthier body weight. If you are over the healthy weight range you can reduce your BMI by losing weight. This is best achieved by following a healthy eating plan and taking regular exercise if possible. If you are classified as underweight it is not recommended you try to lose weight.



                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo5"
                                >
                                    How can broccoli help?<span className='BMIicon6'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo5" class="collapse text-start textitem">
                                    We offer a calorie-controlled, healthy eating plan delivered direct to your door. Click here to learn more about Broccoly.


                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo6"
                                >
                                    How accurate is the BMI?<span className='BMIicon7'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo6" class="collapse text-start textitem">
                                    It is a useful measurement for the majority of people however it does have limitations:<br />
                                    - Athletes or very muscular people could record higher BMI readings – this is because muscle weighs more than fat and BMI cannot account for this.<br />
                                    - It is a general tool to help people identify people who may be at an increased health risk, it is not a diagnostic tool that determines the overall health of a specific individual.<br />
                                    - If you are pregnant or breastfeeding BMI does not apply.
                                </div>

                            </div>
                            <div className=" ">
                                <button
                                    type="button"
                                    class="bmilocation1 "
                                    data-bs-toggle="collapse"
                                    data-bs-target="#demo7"
                                >
                                    Are there other indicators?<span className='BMIicon8'> <i className=" fa-solid fa-angle-down sp"></i></span>
                                </button>
                                <div id="demo7" class="collapse text-start textitem">
                                Waist circumference measurements and waist to hip ratios can also be helpful tools in assessing increased health risks.
                                </div>

                            </div>


                        </div>
                    </div>
                </div>
                <div className='col-md-1 col-lg-1'></div>
                <div className='col-md-4 col-lg-4 shadow-sm'>
                <div className="row">
                            <div className="">
                                <div className="BMIsticky">
                                    <div className="stars">
                                        <span style={{ color: 'black' }}>Average</span>
                                        {Array.from({ length: averageRating }, (_, i) => (
                                            <i key={i} className="fas fa-star"></i>
                                        ))}
                                    </div>

                                    <p className="BMIreview-text">Based on 10,974 reviews on</p>
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
                            <button className='BMIgetstarted mt-4'>Get Started Now</button>
                        </div>
                </div>
                <div className='col-md-1 col-lg-1'></div>
            </div>
        </div>
        <Footer/>
        </div>

    )
}
export default BMI;
