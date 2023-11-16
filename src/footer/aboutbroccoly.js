import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './aboutbroccoly.css';
import Header from '../header/navbar';
import Footer from './footer';
import Header2 from '../header2/header2';

const AboutBroccoly = () => {
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

    const [isVideoPlaying, setVideoPlaying] = useState(false);

  
    const handleVideoPlay = () => {
        setVideoPlaying(true);
    };

    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>
            <Header2/>
            <div className="banner">
                <div className="left-side">
                    <h4 className="texting">About Broccoly</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>
            <div className="main-container row">
                <div className="content-containers col-lg-12 col-md-6 col-sm-12">
                    <div className="split-containersm brdr-btm">
                        <div className="new-left-content">
                            <p className="sprint">Diet</p>
                            <p className="spit">
                                <p className="dietic">Wouldn't it be simpler to lose weight if you had someone to prepare<br /> your food, control your portion size, and count your calories?<br /> Just like a celebrity's personal chef.</p>
                                <p className="run"><span className="quot"><i className="fa-sharp fa-solid fa-quote-left"></i></span>I started Diet Chef because I wanted everyone to be able to have<br /> that same advantage. No more labor-intensive cooking, no more<br /> worrying about calories, no more counting points or struggling with<br /> portion size.<span className="quot"><i className="fa-sharp fa-solid fa-quote-right"></i></span></p>
                            </p>
                        </div>
                        <div className="right-contentm">
                            <div className="video-containerm">
                                {isVideoPlaying ? (
                                    <iframe
                                        title="Diet Video"
                                        width="700"
                                        height="250"
                                        src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
                                        frameBorder="0"
                                        allowFullScreen
                                    ></iframe>
                                ) : (
                                    <img
                                        src="https://img.freepik.com/free-photo/spiral-book-pen-fresh-fruits-toasted-bread-vegetables-ingredients-white-textured-background_23-2148026886.jpg?w=900&t=st=1699341573~exp=1699342173~hmac=368826bb50e2f3ead36af0415d82930ca3f01e22490585a9c5f9550f4b8267ec"
                                        alt="Diet"
                                        style={{ height: '250px', width: '500px' }}
                                    />
                                )}
                                {!isVideoPlaying && (
                                    <button className="play-button iconic" onClick={handleVideoPlay}>
                                        <p className="dietic">
                                            <i className="fa-regular fa-circle-play"></i> Watch our TV ad
                                        </p>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="journey-containerm brdr-btm">
                        <div className="left-contentm journey">
                            <p className="sprint">Our Journey</p>
                            <p className="spit">
                                <p className="run">I am originally a chef by training and incredibly passionate about food, so it's important to me that<br /> everything you eat on Broccoly is delicious and healthy with no nasty ingredients.</p>
                                <p className="run"> I work to ensure you have a great range of food to choose from with lots of new dishes and<br /> innovations.</p>
                                <p className="run"> Broccoly has grown a lot in the last 10 years and we are now the UK's largest delivered diet<br /> company with over 250,000 customers; it's been a brilliant journey.</p>
                            </p>
                        </div>
                        <div className="right-contentm">
                            <img src="https://img.freepik.com/premium-photo/beautiful-young-s-woman-holding-scales_488220-35902.jpg?w=900" alt="Journey" className="imgmc" style={{ height: '250px', width: '500px' }} />
                        </div>
                    </div>
                    <div className="contact-containersm brdr-btm">
                        <div className="left-contentm">
                            <p className="sprint">Get in Touch</p>
                            <p className="spit">
                                <p className="run">I am so proud of everyone who has followed the Broccoly plan, and I love hearing your weight loss<br /> stories – it's amazing the difference losing weight can make to someone's life!</p>
                                <p className="run">If you have any questions or you want to tell me your story, email me at <a href="mailto:headchef@broccoly.com" className="ab">headchef@broccoly.com</a>.</p>
                                <p className="run">Good Luck!</p>
                            </p>
                        </div>
                        <div className="right-contentm">
                            <img src="https://img.freepik.com/free-photo/close-up-nutritionist-writing-prescription_23-2148302092.jpg?w=900&t=st=1699081126~exp=1699081726~hmac=5e0935f30780ed3ee57cf2204784e0ae0a6a30555c4ea17d09a3be41e07b633a" alt="Get in touch" className="imgmj"/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    );
};

export default AboutBroccoly;
