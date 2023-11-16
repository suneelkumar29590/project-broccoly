import './delivery&ret.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';
const DeliveryAndRet = () => {
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
    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>
            <Header2/>
            <div className="banner">
                <div className="left-side">
                    <h4 className="texting"> Delivery&Returns</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>

       
            
            <div className='container pt-5'>
                
                <div className="row">
                    <div className='col-md-3 col-lg-3 col-sm-12'>
                        <div><Link to={'/ContactUs'}><button className='DelandRetbtns1'> Contact Us</button></Link></div>
                        <div><Link to={'/DeliveryAndRet'}><button className='DelandRetbtns'><i className= 'fas fa-caret-up'> </i> Delivery&Returns</button></Link></div>
                        <div><button className='DelandRetbtns1'> Guarantee</button></div>
                        <div><button className='DelandRetbtns1'> Terms & Conditions</button></div>
                        <div><button className='DelandRetbtns1'> Privacy</button></div>
                        <div><Link to={'/Security'}><button className='DelandRetbtns1'> Security</button></Link></div>

                    </div>
                    <div className='col-md-6 col-lg-6 col-sm-12'>
                        <div className='DelandRetbrdr'>
                            <h3 style={{color:"silver"}}>Free standard delivery on orders over 40</h3>
                            <p>Once your order is handed over to ouir couriers your items will be delivered on a next day service.
                                saturday delivery is available for an extra fee of 1.95
                            </p>
                            <p>You will be sent an email when your order is shipped with details of the courier online tracking sysytem so you can you track your
                                order through the delivery process. Alternatively you can <span>Log into your Diet Chef Account </span> and access the status of your order from here
                            </p>
                        </div>
                        <div className=''>
                            <h2 style={{color:'silver'}}><i className="truck fa-solid fa-truck"></i> Delivery</h2>
                        </div>
                    </div>
                    <div className='col-md-3 col-lg-3 col-sm-12'>
                        <div className="row">
                            <div className="">
                                <div className="DelandRetsticky">
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

                            <div className="" style={{ maxHeight: "400px", overflowY: "auto" }}>
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
                            <button className='DelandRetgetstarted mt-4'>Get Started Now <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
            </div>
        
    )
}
export default DeliveryAndRet;