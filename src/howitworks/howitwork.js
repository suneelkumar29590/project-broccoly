import { Link } from 'react-router-dom';
import Footer from '../footer/footer';
import Header from '../header/navbar';
import './howitworks.css'
import Header2 from '../header2/header2';
import { useEffect, useState } from 'react';

const Howitwork = () => {
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
    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header />
            <Header2 />

            <div className="container23 pb-5">
                <div className="row">
                    <div className='col-12'>
                        <h1 className='text-center mt-5 mb-5 howith2'>What is Diet Chef?</h1>

                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className='card11 howcard'>
                            <div className='howbackground'>
                                <h3 className='text-center howith2'>it's easy</h3>
                                <p className='howpara'>"Diet Chef is simple<br /> to follow, just heat in<br /> the microwave and<br /> you’re ready to eat.<br /> There’s so much variety<br /> that I’m never bored"</p>
                                <p>Read Tara's story </p>
                            </div>
                            <div className='card12 howcard2'>
                                <p><i class="fa-solid fa-check howiconworks"></i> No counting calories, no measuring ingredients, no prepping meals</p>
                                <p><i class="fa-solid fa-check howiconworks"></i> All calorie counting and portion control is done for you</p>
                                <p><i class="fa-solid fa-check howiconworks"></i>Just heat and eat</p>

                            </div>

                        </div>


                    </div>
                    <div className="col-12 col-sm-6 col-md-4">
                        <div className='card11 howcard'>
                            <div className='howbackground1'>
                                <h3 className='text-center howith2'>it's easy</h3>
                                <p className='howpara'>"Diet Chef is simple<br /> to follow, just heat in<br /> the microwave and<br /> you’re ready to eat.<br /> There’s so much variety<br /> that I’m never bored"</p>
                                <p>Read Tara's story </p>
                            </div>
                            <div className='card12 howcard2'>
                                <p><i class="fa-solid fa-check howiconworks"></i> No counting calories, no measuring ingredients, no prepping meals</p>
                                <p><i class="fa-solid fa-check howiconworks"></i> All calorie counting and portion control is done for you</p>
                                <p><i class="fa-solid fa-check howiconworks"></i>Just heat and eat</p>

                            </div>

                        </div>


                    </div>

                    <div className="col-12 col-sm-6 col-md-4">
                        <div className='card11 howcard'>
                            <div className='howbackground2'>
                                <h3 className='text-center howith2'>it's easy</h3>
                                <p className='howpara'>"Diet Chef is simple<br /> to follow, just heat in<br /> the microwave and<br /> you’re ready to eat.<br /> There’s so much variety<br /> that I’m never bored"</p>
                                <p>Read Tara's story </p>
                            </div>
                            <div className='card12 howcard2'>
                                <p><i class="fa-solid fa-check howiconworks"></i> No counting calories, no measuring ingredients, no prepping meals</p>
                                <p><i class="fa-solid fa-check howiconworks"></i> All calorie counting and portion control is done for you</p>
                                <p><i class="fa-solid fa-check howiconworks"></i>Just heat and eat</p>

                            </div>

                        </div>


                    </div>


                </div>
            </div>

           

            <div className="container4">

                <div className=" pb-5">
                    <div className="row">
                        <h2 className="text-center mt-5 mb-5 howith2">How Diet Chef works</h2>
                        <div className="col-md-1"></div>
                        <div class="col-12 col-md-3">
                            <img class="" src="https://www.dietchef.co.uk/static/img/home/process1.png" alt="Image 1" />
                            <h5 className="howith2">1.Choose your plan</h5>
                            <div className='row'>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11">Tailor-make your diet plan; choose only the foods you love</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11">Choose from our extensive range of chef-prepared meals</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-10">Just add dairy, fresh fruit and vegetables to complete your meals</p>
                            </div>
                        </div>
                        <div class="arrow-mark col-md-1">
                            &rarr;
                        </div>
                        <div class="col-12 col-md-3">
                            <img class="" src="	https://www.dietchef.co.uk/static/img/home/process2.png" alt="Image 2" />
                            <h5 className="howith2">2. Receive your food<br /> the next working day</h5>
                            <div className='row'>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11"> Receive your large, unbranded box the next working day**</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11"> Delivered straight to your home or office</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-10">You’ll always have a nutritious, calorie controlled meal to hand.</p>
                            </div>
                            <div className="mt-5">
                                <button className="recivebtn">Get started now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        </div>
                        <div class="arrow-mark col-md-1">
                            &rarr;
                        </div>
                        <div class="col-12 col-md-3">
                            <img class="" src="https://www.dietchef.co.uk/static/img/home/process3.png" alt="Image 3" />
                            <h5 className=" howith2">3.Enjoy your meals &<br /> feel graet!</h5>
                            <div className='row'>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11"> Wide choice of meals makes slimming easier than you ever thought possible!</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-11">Lose up to 2lbs per week *</p>
                                <i class="fa-solid fa-check col-md-1 mt-3 howiconworks"></i>
                                <p className="col-md-10">Join over 250,000 other Diet Chef dieters</p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className="container2">
                <div className="row">
                    <div className="col-12 col-md-6 p-5 howleft">
                        <h3 className='howith2'>Find out more</h3>
                        <p>In a clinical study a Diet Chef delivered meal plan was shown to be 3 times more likely to be successful than a self-devised plan. To see the results of the study or our information for Health Professionals use the links below.</p>
                        <h4 className='howith2'><i class="fa-solid fa-download"></i>  Diet Guide</h4>
                        <h4 className='howith2'><i class="fa-solid fa-download"></i>  Info for health professionals</h4>
                        <h4 className='howith2'><i class="fa-solid fa-download"></i>  Clinical Study</h4>
                        <p>If you are looking for any other info please contact us.</p>
                        <p>
                            ** Order by 3.30p.m Monday – Thursday and receive your food the next day. Saturday delivery is also available for an extra fee.</p>



                    </div>
                    <div className="col-12 col-md-6 foodright">


                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}
export default Howitwork;



