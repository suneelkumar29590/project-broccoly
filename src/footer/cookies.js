import React, { useState,useEffect }  from 'react';
import { Link } from 'react-router-dom';
import './cookies.css';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';

const Cookies = () => {
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

    const contents = [
        {
          name: 'Introduction',
          description: "We think it's important for you to understand how cookies and other similar\n technologies are used by Diet Chef and our partners. These technologies\n help Diet Chef function, allow us to understand how you use our services,\n and have a number of purposes (beyond just advertising) that you\n can read about in this policy.This Cookies & Similar Technologies\n Policy was published on 23 May 2018",
        },
        {
          name: 'What are Cookies?',
          description: "Cookies are tiny text files stored on your computer when you visit certain web\n pages. They are stored in your browser’s cache and allow a website\n or a third party to recognise your browser. Cookies can’t harm your\n computer. We don’t store personally identifiable information such as credit\n card details in cookies we create, but we do use encrypted information gathered\n from them to help improve your experience of the site. For example,\n they help us to identify and resolve errors that can sometimes occur on\n websites.\n\nThere are three primary types of cookies:\n1: Session cookies are specific to a particular visit and carry information\n as you view different pages so you don’t have to re-enter information\n everytime you change pages or make a purchase.Session cookies expire\n and delete themselves automatically in a short period of time like after\n you leave the Site or when you close your web browser.\n2: Persistent cookies remember certain information about your preferences for\n viewing the site, and allow broccoly to recognise you each time you return.\n Persistent cookies are stored on your browser cache or mobile device until you\n choose to delete them, and otherwise typically delete themselves\n at expiration.\n3: Third-party cookies are placed by someone other than Broccoly and may\n gather browsing activity across multiple websites and across multiple sessions.\n They are usually a type of persistent cookie and are stored until you delete\n them or they expire based on the time period set in each third-party\n cookie.",
        },
        {
            name: 'Other technologies',
            description: "In addition to cookies, there are other similar technologies used by Diet Chef \nand elsewhere on the web.\n 1:Web beacons: These are tiny graphics (sometimes called “clear GIFs” or “web pixels”)\n with a unique identifier that are used to understand browsing activity. In contrast\n to cookies, which are stored on a user's computer hard drive, web beacons\n are rendered invisibly on web pages when you open a page.\n 2:Social widgets: These are buttons or icons provided by third-party social\n media providers that allow you to interact with those social media services\n when you view a web page or a mobile app screen. These social widgets\n may collect browsing data, which may be received by the third party that provided\n the widget, and are controlled by the third parties.\n 3:UTM codes: These are strings that can appear in a URL (the “Uniform Resource Locator”,\nwhich is typically the http or https address entered to go to a web page)\n when a user moves from one web page or website to another, where the string\n can represent information about browsing, such as which advertisement,\n page, or publisher sent the user to the receiving website.\n 4:Local Storage Objects: These (sometimes called flash cookies)\n are sets of data that can be stored on your browser by a site or app.\n They can be used to maintain preferences, maintain a history of usage, or even\n maintain the state or settings of an app.",
         },
         
          {
            name: 'Updates and changes to this policy',
            description: "We may amend or update this policy from time to time. We\n encourage you to check back\n regularly and review any updates.\n Contact us:\n If you have any questions you can;\n Send an email to info@broccoly.in \n Write to us at:\n Broccoly Support Team - Privacy Policy \n  Address:",
          },
          {
            name: 'Contact Us',
            description: "If you have any questions you can;\n Send an email to info@broccoly.co.in\n Write to us at:\n broccoly Support Team - Privacy Policy \n Address\n If you have an unresolved privacy or data use concern that we have\n  not addressed satisfactorily, or if you need any advice you should contact the\n  Information Commissioner’s Office (ICO). Click this link to visit their\n  website.\n ICO helpline; Telephone: 1234567890",
        },
      ];
      const descriptionLines = contents.map((contents) => contents.description.split('\n'));
      const [showDescription, setShowDescription] = useState(Array(contents.length).fill(false));
    
      const toggleDescription = (index) => {
        const newShowDescription = [...showDescription];
        newShowDescription[index] = !newShowDescription[index];
        setShowDescription(newShowDescription);
      };
      const additionalContents = [
        {
          name: 'Introduction',
          description: "Broccoly uses Cookie Technologies to recognise your logged-in state on Broccoly, to\n understand what products customers and visitors are interested in, to make Broccoly’s\n Sites function for you, and to help your browsing experience and use\n of the Site, Services, and Apps feel more customised. More generally,\n Broccoly uses Cookie Technologies for the following:",
        },
        {
          name: 'Security and Authentication:',
          description: "Some cookie and similar technology functions are necessary and vital to ensuring that\n Broccoly works properly for visitors and customers, such as maintaining the security,\n safety, and integrity of the Site, authentication and logging into Broccoly\n (including remembering permissions and consents you have granted), and ensuring\n the ability to securely complete transactions.",
        },
        {
          name: 'Account and user preferences:',
          description: "Some technologies are used to remember your account and preferences\n over time, such as remembering your account or keeping yourself logged in when\n returning to Broccoly, maintaining your choices on Diet Chef, and customising\n  content based on how youuse Broccoly.",
        },
        {
            name: 'Social networks',
            description: "Some technologies help you to interact with social networks you are signed into while\n using the Services, such as sharing content with the social network, logging in\n with the social network, and other features you employ with the social network, or\n that are allowed in the social network’s privacy policy. These may be set and\n controlled by the social networks, and your preferences with those social\n networks.",
        },
          {
            name: 'Performances and analytics',
            description: "Some technologies help provide performance data on how the Services\n are functioning in order to improve Broccoly and the Services, including,\n for example, data on site and app functionality and speed to help us optimise\n Broccoly, how the Services are used to help us improve your experience\n on Broccoly, and detecting and gathering reporting on bugs to help make\n Broccoly work better",
        },
          {
            name: 'Marketing services',
            description: "Diet Chef partners with third-party service providers that may use various\n Cookie Technologies to permit us and them to learn about what ads you\n see and click when you visit Diet Chef and affiliated sites or to show\n you ads on and off Diet Chef. These may include things such as:\n Frequency capping, which limits the number of times a user’s browser\n or mobile device displays the same ad. \n Attribution tracking, which estimates what advertising or marketing source\n brought someone to Broccoly, or determines what marketing source\n led to actions like a visit or a purchase.\n Remarketing, which shows relevant ads to an audience based on\n prior shopping and browsing patterns on Broccoly.\n Audience targeting, which refers to targeting advertisements to a\n large audience based on the audience’s known or inferred demographics.\n Cross-device recognition, which recognises actions across\n multiple devices or browsers.",
        },
          {
            name: 'Consent, contract and legitimate interests in processing:',
            description: "Certain Cookie Technologies are employed to make the Site function\n for its intended purpose, and are provided based on contractual necessity based\n on your agreement with Broccoly to perform the services you have requested.\n These include the functions strictly necessary to the service noted above.",
        },
      ];
      const additionaldescriptionLines = additionalContents.map((additionalContents) => additionalContents.description.split('\n'));
      const [showAdditionalDescription, setShowAdditionalDescription] = useState(Array(additionalContents.length).fill(false));
    
      const toggleAdditionalDescription = (index) => {
        const newShowAdditionalDescription = [...showAdditionalDescription];
        newShowAdditionalDescription[index] = !newShowAdditionalDescription[index];
        setShowAdditionalDescription(newShowAdditionalDescription);
      };
  
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
                  <h2 className='texting'>Cookies Policy</h2>
                    <p className='texting'> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                    
                </div>
            </div>
    <div className="row">
  
                <div className='col-md-1'></div>
                <div className="content-table1 col-lg-6">
        
      
                <table className="table1">
        <h2 className="headers1">Overview</h2>
        <thead>
          <tr>
            
            
          </tr>
        </thead>
        
        <tbody>
        
        {contents.map((content, index) => (
  <tr key={index}>
    <td>
      
    <div className="content-container1">
  <div className="content dropdown1">
    {content.name}
  </div>
  <div className="button-container1">
    <button className="custom-button1" onClick={() => toggleDescription(index)}>
      <i className={`fas ${showDescription[index] ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
    </button>
  </div>
</div>

      
      {showDescription[index] && (
        <div className="description1">
          {descriptionLines[index].map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </td>
  </tr>
))}

      </tbody>
      </table>
      <table className="table1">
      <h2 className="headers1">Information uses,sharing and disclosure</h2>
      <thead>
        <tr>
         
        </tr>
      </thead>
      <tbody>
        
        {additionalContents.map((contents, index) => (
  <tr key={index}>
    <td>
      
    <div className="content-container1">
  <div className="content dropdown1">
    {contents.name}
  </div>
  <div className="button-container1">
    <button className="custom-button1" onClick={() => toggleAdditionalDescription(index)}>
      <i className={`fas ${showAdditionalDescription[index] ? 'fa-caret-up' : 'fa-caret-down'}`}></i>
    </button>
  </div>
</div>

      
      {showAdditionalDescription[index] && (
        <div className="description1">
          {additionaldescriptionLines[index].map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      )}
    </td>
  </tr>
))}

      </tbody>
    </table>
    </div> 







    <div className='col-lg-1'></div>
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

                        <div className="" style={{ maxHeight: "400px", overflowY: "auto", textAlign: "start" }}>
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
    </div>
  );
};


export default Cookies;




