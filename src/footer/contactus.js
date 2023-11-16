
import './contactus.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from "../header/navbar";
import Header2 from '../header2/header2';
import Footer from './footer';



const ContactUs = () => {
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

    const [currentIndex, setCurrentIndex] = useState(1); // Set initial index to 1

    
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
                    <h4 className="texting">Contact Us</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>

        
        
        <div className='container pt-5'>
            <div className='row'>
                <div className='col-md-3 col-lg-3'>
                    <div>
                        <Link><button className='Contactusbtn'><i className= 'fas fa-caret-up'> </i> Contact Us</button></Link>
                    </div>
                    <div>
                        <Link to={'/DeliveryAndRet'}> <button className='Remainingbtns'> Delivery & Returns</button></Link>
                    </div>
                    <div>
                        <Link> <button className='Remainingbtns'> Guarantee</button></Link>
                    </div>
                    <div>
                        <Link > <button className='Remainingbtns'> Terms & Conditions</button></Link>
                    </div>
                    <div>
                        <Link><button className='Remainingbtns'> Privacy</button></Link>
                    </div>
                    <div>
                        <Link to='/Security'> <button className='Remainingbtns'> Security</button></Link>
                    </div>
                </div>
                <div className='col-md-6 col-lg-6'>
                    <h1 className='contacticon'>Contact Us</h1>
                    <div className='ContactUsbrdr'>
                        <p className='Contactuspara'>If you have any questions,please check Our<span>FAQs</span>for the answer first</p>
                        <div className='Contactuspara'>If  Our<span>FAQs</span>can't answer it for you, we'll be gaid to answer you in person!</div>
                    </div>
                    <div className='ContactUsbrdr'>
                        <h6 className='contacticon'> @  Email</h6>
                        <div>
                            <p>Email Us any Time at <a>info@broccoly.com</a></p>
                            <p>We will reply to all emails within one working day</p>
                        </div>
                    </div>
                    <div className='ContactUsbrdr'>
                        <h6 className='contacticon'><i class="fa-solid fa-envelope"></i>  By Post</h6>
                        <p>If you'd like to write to us a line at the following address:</p>
                        <div>2 Rennie Square</div>
                        <div>Brucefield Industrial estate</div>
                        <div>Livingston</div>
                        <div>EHS4 9DF</div>
                    </div>
                    <div className='ContactUsbrdr'>
                        <h6 className='contacticon'><i class="fa-solid fa-phone"></i> By Phone</h6>
                        <p>Call Us free on 0123456789</p>

                        <li>Monday-Friday 9.00am-5.00pm</li>
                        <li>Free from most UK landlines and mobiles</li>
                        <li>Leave a voicemail if all our agents are busy</li>

                    </div>
                    <div className='ContactUsbrdr'>
                        <h6 className='contacticon'>Returns</h6>
                        <p>If you are returning products then they should be sent to:</p>

                        <div>DietChef Ltd</div>
                        <div>2 Rennie Square,</div>
                        <div>Brucefield Industrial estate,</div>
                        <div>Livingston,</div>
                        <div>EHS4 9DF</div>
                        <p>please include a note detailing items returned,and your name and address</p>
                    </div>


                </div>


                <div className="col-md-3 col-lg-3">
                    <div className="row">
                        <div className="">
                            <div className="Custiomersticky">
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
                        <button className='getstarted mt-5'>Get Started Now <i class="fa-solid fa-arrow-right" style={{color:"yellow"}}></i></button>
                    </div>
                </div>






            </div>
        </div>

        <Footer/>
       
        </div>
    )
}
export default ContactUs;