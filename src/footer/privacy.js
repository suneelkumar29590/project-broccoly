import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import './privacy.css';
import Header from '../header/navbar';
import Header2 from '../header2/header2';
import Footer from './footer';

const Privacy = () => {
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
            description: "At Broccoly, we care about your privacy. We believe in transparency,\n and we’re committed to being upfront about our privacy practices, including\n how we treat your personal information. This policy explains our privacy \n practices and explains how we are committed to protecting your privacy \n and the security of any information given to us.",
        },
        {
            name: 'Data Protection Act registration',
            description: "Diet Chef Ltd is registered under the Data Protection Act, Registration Number Z136582X",
        },
        {
            name: 'Our data protection policy',
            description: "We will not gather or hold personal information about you unless\n you have given your express permission for us to do so.\n By placing an order, you will consent to the use of such\n personal information.\n Any personal information held or processed will be kept up-to-date\n and will be destroyed as soon as the reason for it's\n collection or processing has lapsed. No personal data about customers will\n  be passed to any third party, except to fulfil the delivery of the\n goods to you, and as is necessary to process credit or \n debit card payments.\n Your privacy and confidence will be respected at all times.",
        },
        {
            name: 'What information is collected about you and how it is used?',
            description: "When you place an order we need to collect your name,\n address, e-mail and telephone number as well as details of the\n method by which you intend to pay for the Goods.\n This information allows us to process your offer to purchase Goods\n and delivery of those Goods to you. We use your e-mail\n address to send you notification of the status of the order.\n We will contact you by e-mail or by telephone if any problems\n occur regarding delivery of the Goods to you. This information\n may be provided to third party service providers for the purpose\n of processing your offer to purchase the goods.\n We may use your e-mail address to provide you with information on\n products, services, promotions and special offers where you have indicated that\n this is acceptable. If you supply your email address without placing an\n order, we may pass your email to a third party organisation in\n order to offer you the opportunity to purchase from us. Your\n email address will not be used for any other purpose and will not\n be held on file by ourselves or any third parties after the reason\n for collecting it has lapsed.\n ",
        },
        {
            name: 'Automated Information',
            description: "Broccoly automatically receives and records information from your browser\n or your mobile device when you visit the website, such as your\n IP address or unique device identifier, cookies and data\n about which pages you visit in order to allow us to operate and\n provide the Services. This information is stored in log files\n and is collected automatically. We may combine this information\n from your browser or your mobile device with other information that\n we or our partners collect about you, including across\n devices. This information is used to prevent fraud and to keep the\n Services secure, to analyse and understand how the Services work\n for customers and visitors, and to provide advertising, including across\n your devices, and a more personalised experience for\n members and visitors\n We may also automatically collect device-specific information when you\n install, access, or use our Services. This information may\n include information such as the hardware model, operating system\n information, app version, app usage and debugging information, browser\n information, IP address, and device identifiers.",
        },
        {
            name: 'Location information',
            description: "We may collect information about your use of the Services for advertising,\n analytics, to serve content and to protect the Services, including your IP address,\n browser information (including referrers), device information (such as iOS IDFA,\n IDFV for limited non-advertising purposes, Android AAID, and, when enabled by you,\n location information provided by your device).",
        },
        {
            name: 'Analytics Information',
            description: "We use data analytics to ensure website functionality and improve our Services.\n This software may record information such as how often you use the website,\n what happens within the website, aggregated usage, performance data,\n errors and debugging information, and where the websites were\n accessed from. We do not link the information we\n  store within the analytics software to any personally identifiable\n  information.",
        },
        {
            name: 'Non-Customer Information',
            description: "Broccoly may receive or obtain information (for example, an email address or IP\n  address) about a person who is not yet a registered Broccoly customer in connection\n  with certain Broccoly features, such as when a non-customer chooses\n  to subscribe to a broccoly newsletter or a customer invites\n  a non-customer to visit the website. Non-customer information\n  is used only for the purposes given when it was submitted.",
        },
        {
            name: 'Third parties',
            description: "We will not sell your details to third party organisations. We will pass your details\n  to third party organisations for the purpose of processing your offer to purchase\n  the goods and to correspond with you via email communication.\n We also partner with third parties to manage our advertising on\n  other websites. Our third-party partners may use cookies or similar\n  technologies in order to provide you with advertising based upon your browsing\n  activities and interests. If you have chosen to connect your\n  account to an external third-party application, such as Facebook,\n  or an app developed using the API, you can change your settings\n  and remove permission for the app by changing your account settings",
        },
        {
            name: 'Consent',
            description: "By making offer to purchase Goods you consent to the information you provide to\n  us being  processed for any of the above purposes.",
        },
        {
            name: 'Security',
            description: "The security of your personal information is important to us. We follow \n best-practice standards to protect the personal information submitted to\n  us, both during transmission and after it is received.\n All data transfer between your browser and our website or our website\n  and third-parties is encrypted to prevent it being intercepted\n For more information on how we protect you and your personal information\n please see our Security policy",
        },
        {
            name: 'Choice and control',
            description: "We know that customers value having control over their own information,\n  so Broccoly gives you the choice of providing, editing or removing certain\n  information, as well as choices about how we contact you.\n  You may change or correct your Broccoly account information through\n  your account settings. You can also request the deletion of\n  the personal information in your account by emailing Info@broccoly.co.in.\n You also have additional rights with respect to your information,\n  such as:\n i.	data access (including the right to obtain a\n  copy of your personal data you provided to Broccoly);\n ii.	data correction (including the ability to update your personal\n  data, in many cases via your account);\n iii.	data deletion (including the right to have Broccoly delete your\n  personal information, except information we are required to retain,\n  by contacting us)\n iv.	withdrawal of consent or objection to processing (including, in limited\n  circumstances, the right to ask Broccoly to stop processing your personal\n  data, with some exceptions, by contacting us).\n You may also control the receipt of certain types of\n  communications from Broccoly in your account settings. broccoly may\n  send you messages about the Services or your activity. Some of\n  these messages are required, service-related messages for customers\n  (such as transactional messages or legal notices). Other messages\n  are not required, such as newsletters. You can\n  control which optional messages you choose to receive by changing\n  your contact preferences in your account settings, and you can\n  learn more in the “Messages from broccoly” section\n  of this policy.\n ",
        },
        {
            name: 'Messages from Diet Chef',
            description: "On occasion, Broccoly may need to contact you. Primarily, these messages\n  are delivered by email, and every account is required to keep a valid email\n  address on file to receive messages. Broccoly may also contact you by\n  telephone to provide customer support or for transaction-related\n  purposes if you request that we call you\n Additionally, and with your consent, Broccoly may send you an SMS (or similar)\n  message or physical mail in order to provide you with customer support or\n  to provide you with information about products and features that\n  you may find of interest. You may update your contact preferences\n  in your account settings or by emailing info@broccoly.co.in.\n Some messages from Broccoly are service-related and necessary for\n  customers. You agree that Broccoly can send you non-marketing emails or\n  messages, such as those related to transactions, your account, security,\n  or product changes. Examples of service-related messages include\n  an email address confirmation when you place an order, notification of\n  a delivery, service availability, modification of key features or \n functions and correspondence with Broccoly’s support team\n When you register for an account, subscribe to a newsletter,\n  or provide us with your email address or phone number such as for a purchase,\n  you receive notice of and agree (in some jurisdictions and situations,\n  by an additional unambiguous consent) to receive marketing emails\n  and messages from us. You can unsubscribe at any time from marketing\n  emails through the opt-out link included in all marketing emails or\n  messages. Customers may also control marketing emails or messages\n  through their account settings.",
        },
        {
            name: 'Updates and changes to this policy',
            description: "We may amend or update this policy from time to time. We encourage you to\n  check back regularly and review any updates.",
        },
        {
            name: 'Contactus',
            description: "If you have any questions you can;\n Send an email to info@broccoly.co.in\n Write to us at:\n broccoly Support Team - Privacy Policy \n Address\n If you have an unresolved privacy or data use concern that we have\n  not addressed satisfactorily, or if you need any advice you should contact the\n  Information Commissioner’s Office (ICO). Click this link to visit their\n  website.\n ICO helpline; Telephone: 1234567890",
        },
    ];

    const descriptionLines = contents.map((content) => content.description.split('\n'));
    const [showDescription, setShowDescription] = useState(Array(contents.length).fill(false));

    const toggleDescription = (index) => {
        const newShowDescription = [...showDescription];
        newShowDescription[index] = !newShowDescription[index];
        setShowDescription(newShowDescription);
    };
    const additionalContents = [
        {
            name: 'Introduction',
            description: "When you access or use the Services, we collect, use, share, and otherwise\n  process your personal information as described in this policy.",
        },
        {
            name: 'Providing and improving and secure',
            description: "We may use your information to improve and customise our Services, including\n  sharing of your information for such purposes, and we do so as it is necessary\n  to pursue our legitimate interests of improving our Services\n  for our users. This is also necessary to enable us to pursue our legitimate\n  interests in understanding how our Services are being used, and to\n  explore and unlock ways to develop and grow our business. It is als\n o necessary to allow us to pursue our legitimate interests in improving our Services,\n  efficiency, interest in Services for users and obtaining insights into\n  usage patterns of our Services.",
        },
        {
            name: 'Keeping our service safe and secure',
            description: "We may also use your information for safety and security purposes, including\n  sharing of your information for such purposes, and we do so because it is necessary\n  to pursue our legitimate interests in ensuring the security of our\n  Services, including enhancing protection of our community against spam,\n  harassment, intellectual property infringement, crime, and security\n  risks of all kind.We respect your privacy. Broccoly will not disclose your name, email\n address or other personal information to third parties without your\n  consent, except as specified in this policy.\n We use your information to provide and improve the Services and our products,\n  for billing and payments, for identification and authentication, for targeted online\n  and offline marketing including through tools like Facebook Custom Audiences\n  and Google Customer Match, to contact members or interested parties, and for general\n research and aggregate reporting. For example, in accordance with our\n existing case resolution process, we may use information you provide to resolve\n disputes with Broccoly. We may learn the sorts of products that you’re\n interested in from your browsing and purchasing behaviour on (and\n off) the Website or Apps and suggest potential purchases as a result.\n As a core part of our Services, we have a legitimate interest in customising\n your on-website experience to help you discover relevant items and\n recommended purchases. Similarly, we may advertise our Services through a\n variety of different mediums and rely on your consent to do so off-website.\n As part of this, we may work with advertising partners such as Facebook\n or Google.",
        },
        {
            name: 'Legal and safety',
            description: "Broccoly may also retain, preserve, or release your personal information to\n  a third party in the following limited circumstances: in response to lawful\n  requests by public authorities, including to meet legitimate national security\n  or law enforcement requirements; to protect, establish, or exercise our legal\n  rights or defend against legal claims, including\n  to collect a debt; to comply with a witness summons, court order, legal process,\n  or other legal requirement; or when we believe in good faith that such disclosure is\n reasonably  necessary to comply with the law, prevent imminent physical harm\n or financial  loss, or investigate, prevent, or take action regarding illegal\n activties,  suspected fraud, threats to our property, or violations of\n Broccoly Terms of\n  Use. In these cases, our use of your information may be\n necessary for the purposes of our or a third party’s legitimate interest in keeping\n our Services secure, preventing harm or crime, enforcing or\n defending legal rights, or preventing damage. Such use may also be necessary\n to comply with a legal obligation, a court order, or to exercise or defend\n legal claims. It may also be necessary in the public interest (such as\n to prevent crime) or to protect vital interests (in rare cases where\n we may need to share information to prevent loss of life or\n personal injury). If Broccoly receives a lawful, verified request for a member’s\n records or information in one of the limited circumstances described in the\n previous paragraph, Broccoly may disclose personal information, which\n may include, but may not be limited to, a member’s name, address, phone number,\n email address, and company name. Find out more about how Diet Chef\n responds to requests for records or information about customers of Broccoly in our\n Requests for Information Policy.",
        },
        {
            name: 'Affiliated bussiness',
            description: "Broccoly is affiliated with a variety of businesses and works closely with them\n  for a variety of purposes, including assisting us to perform and improve\n  the Services. These businesses may sell items or services to you through the\n  Services or, with your consent, offer promotions (including email promotions)\n  to you. Diet Chef may also provide services or\n  sell products jointly with affiliated businesses, including providing information to\n  such partners to allow them to more effectively market to you. When an affiliated\n  business assists in facilitating your transaction, we may need to share\n  information related to the transaction with that affiliated business in order to\n facilitate your transaction,  and this forms part of the Services we\n provide in accordance with our Terms of\Use. We rely on consent\n (which can be withdrawn at any time) to send marketing messages\n and for third-party sharing relating to advertising.",
        },
        {
            name: 'Aggregated information',
            description: "Broccoly may share demographic information with business partners, but it will\n be aggregated and de-personalised, so that personal information is not revealed.",
        },
        {
            name: 'Service providers',
            description: "Broccoly also needs to engage third-party companies and individuals (such as\n payment processors, research companies, and analytics and security providers)\n to help us operate, provide, and market the Services. These third partieshave only\n limited access to your information, may use your information only to perform\n these tasks on our behalf, and are obligated to Broccoly not to disclose\n or use your information for other purposes. Our engagement of service\n providers is often necessary for us to provide the Services to you, particularly\n where such companies play important roles like processing payments and shipments\n and helping us keep our Service operating and secure. In some other\n cases, these service providers aren’t strictly necessary for\n us to provide the Services, but help us make it better, like by helping\n us conduct research into how we could better serve our users.\n In these latter cases, we have a legitimate interest in working with service\n providers to make our Services better.",
        },
        {
            name: 'Business reorganisation',
            description: "In some cases, Broccoly may choose to buy or sell assets. Such transactions may\n be necessary and in our legitimate interests, particularly our interest in\n making decisions that enable our business to develop over the long term.In these types\n of transactions (such as a sale, merger, liquidation, receivership, or transfer\n of all or substantially all of broccoly assets), customer information is\n typically one of the business assets that is transferred. If Broccoly\n intends to transfer information about you, broccoly will notify you by email or\n by putting a prominent notice on the Website and the App, and you will be\n afforded an opportunity to opt out before information about you becomes\n subject to a different privacy policy",
        },
        {
            name: 'Third parties',
            description: "Third-party plug-ins also may collect information about your use of the\n Website. For example, when you load a page on Broccoly that has a social plug-in from\n a third-party website or service, such as a “Like” or “Send” button, youare also\n loading content from that third-party website. That website may request cookies\n directly from your browser. These interactions are subject to the privacy policy\n of the third-party website. In addition, certain cookies and other similar\n technologies on the Website are used by third parties for targeted\n online marketing and other purposes. These technologies allow a partner to \nrecognise your computer or mobile device each time you use the Services. \nPlease be aware that when you use third-party websites or services, their own\n terms and privacy policies will govern your use of those websites\n or services. Broccoly chooses and manages these third-party technologies\n placed on its Websites and Apps. However, these are third-party\n technologies, and they are subject to that third party's privacy policy.\n We rely on your consent to drop and read non-technically necessary cookies.\n We can speak only for ourselves; this policy does not apply\n to the practices of third parties that Broccoly does not own\n or control or individuals that Broccoly does not employ or manage.\n If you provide your information to others, different practices\n may apply to the use or disclosure of the information that you provide\n to them. broccoly does not control the privacy policies of third parties.\n Broccoly is not responsible for the privacy or security practices of other\n websites on the Internet, even those linked to or from the Services. We encourage\n you to read the privacy policies and ask questions of third\n parties before you disclose your personal information to them",
        },
        {
            name: 'Necessary for the performance of the contract between us',
            description: "Broccoly provides a voluntary service; you can choose whether or not you want\n to use the Services. However, if you want to use the Services, you need to agree\n to our Terms and Conditions, which set out the contract between Broccoly and its\n customers.",
        },
        {
            name: 'Retention of information',
            description: "Broccoly will retain your information only for as long as is necessary for the\n purposes set out in this policy, for as long as your account is active (i.e., for the\n lifetime of your Broccoly account), as described in this policy, or as needed\n to provide the Services to you. If you no longer want Broccoly to use your\n information to provide the Services to you, you may close your account.\n Broccoly will retain and use your information to the extent necessary to comply\n with our legal obligations (for example, if we are required to\n retain your information to comply with applicable tax/revenue\n laws), resolve disputes, enforce our agreements, and as otherwise described\n in this policy. We also retain log files for internal analysis\n purposes. These log files are generally retained for a brief period\n of time, except in cases where they are used for website safety and\n security, to improve website functionality, or we are legally obligated\n to retain them for longer time periods.",
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
                  <h2 className='texting'>Privacy and Personal Data Policy</h2>
                    <p className='texting'> Text is overlaid on <br />the background image, adding informative<br /> or decorative content <br />that complements the image.</p>
                    
                </div>
            </div>
            <div className="row">
            <div className='col-lg-1'></div>
                
                <div className="content-table1  col-md-7">
                    
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
               
                <div className=" rev-iew col-md-3">
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

export default Privacy;




