import './security.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';
const Security = () => {

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
                    <h4 className="texting">Security</h4>
                    <p className="texting"> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                </div>
            </div>
       
        <div className='container pt-5'>
            <div className='row mt-3'>
                <div className='col-md-3 col-lg-3 col-sm-12'>
                    <div><Link to='/ContactUs'><button className='Security-btn'>  ContactUs</button></Link></div>
                    <div><Link to={'/DeliveryAndRet'}><button className='Security-btn'> Delivery & Returns</button></Link></div>
                    <div><button className='Security-btn'> Guarantee</button></div>
                    <div><button className='Security-btn'> Terms & Conditions</button></div>
                    <div><button className='Security-btn'> Privacy</button></div>
                    <div><button className='Security-btn1' ><i className= 'fas fa-caret-up'> </i> Security</button></div>
                </div>
                <div className='col-md-6 col-lg-6 col-sm-12'>
                    <h1>Security</h1>
                    <p className='security-p-font'>The information you provide to us is protected by SSL and SSL extended verification certificates. This means that people cannot listen in as you enter credit card details on our site. You can get details of the GeoTrust certificate from your web browser.</p>
                    <p className='security-p-font'>Your credit card security code is discarded after we use it to ensure it cannot fall into the wrong hands.</p>
                    <p className='security-p-font'>Credit card details are stored at SagePay, one of the largest payment processing companies in the world. No card details (other than the first four digits, last four digits and expiry date) are stored by us.</p>
                    <p className='security-p-font'>We store the IP address of all orders along with details of the web browser and computer that you are using. This can be used by the police in the event of a fraudulent transaction.</p>
                    <p className='security-p-font'>For certain orders we mark boxes with permanent ultra violet (UV) of the shipment number so that stolen goods can be recovered. For larger orders we may also insist that the courier gets a signature.</p>
                    <p className='security-p-font'>We use 3rd Man fraud & risk managment screening on all transactions. This covers value, AVS/CV2 results, country of issuing card, history of the card, IP address, billing and delivery address, email address, postcode check, electoral roll and other parameters.</p>
                    <p className='security-p-font'>We also use Verified by Visa, MasterCard SecureCode and American Express SafeKey which are known as 3D-Secure. This includes password verification, IP address and other checks.</p>
                    <p className='security-p-font'>All fraud is reported to ActionFraud which is the India’s national fraud and internet crime reporting centre or the Internet Crime Complaint Center (IC3) which is the Federal Bureau of Investigation (CBI) reporting center for the India.</p>
                    <p className='security-p-font'>Broccoly security has been assessed by TrustWave as being Payment Card Industry (PCI) Data Security Standard (DSS) compliant.</p>
                    <p className='security-p-font'>Other security measures are in place that we do not wish to publicise.</p>
                    <p className='security-p-font'>Please accept our apologies if you are inconvenienced while we verify your purchase from us.</p>
                </div>
                <div className='col-md-3 col-lg-3 col-sm-12 reviw-card shadow-sm'>
                <div className="">
                        <div className="">
                            <div className="security-sticky">
                                <div className="stars">
                                    <span style={{ color: 'black' }}>Average</span>
                                    {Array.from({ length: averageRating }, (_, i) => (
                                        <i key={i} className="fas fa-star"></i>
                                    ))}
                                </div>

                                <p className="security-review-text">Based on 10,974 reviews on</p>
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
                        <button className='security-getstarted mt-4'>Get Started Now <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </div>
    )
}
export default Security;