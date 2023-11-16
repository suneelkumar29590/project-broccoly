import './dietplan.css';
import { Link } from 'react-router-dom';
import Header from '../../header/navbar';
import Footer from '../../footer/footer';
import Header2 from '../../header2/header2';
import { useState,useEffect } from 'react';

const Dietplan = () => {
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
            <Header/>

            <Header2/>

            <div className='container10'>
                <div className='row'>
                    <div className='col-12 text-center mt-5'>
                        <h1>Take the first step to losing weight today!</h1>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-12 col-md-5 mt-5'>
                        <div className='dietcard'>
                            <h2 className='text-center mt-3 mb-3 pt-3'>Vegetarian Plan</h2>
                            <img src='https://thumbs.dreamstime.com/b/fruits-vegetables-15528773.jpg' className='dietimg' height={300} />
                            <div className='p-5'>
                                <p className='text-center'>A selection of delicious vegetarian meals and snacks</p>
                                <p className='text-center'>From $319 / 4 weeks</p>
                                <div className='text-center'>
                                    <Link to="/veg"><button className='w-100 dietbutton'>Plan details <i class="fa-solid fa-arrow-right"></i></button></Link>
                                </div>
                                <hr />
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  50 vegetarian friendly meals and snacks to choose from</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  includes your breakfast,lunch,dinner and snacks for each day</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Select either a 4,8,12,16 or 24-weel plan</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Pause whwn you want**</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  FREE standard delivery</p>
                            </div>

                        </div>

                    </div>
                    <div className='col-12 col-md-5 mt-5'>
                        <div className='dietcard shadow'>
                            <h2 className='text-center mt-3 mb-3 pt-3'>Core Plan</h2>
                            <img src='https://www.lalpathlabs.com/blog/wp-content/uploads/2019/01/Fruits-and-Vegetables.jpg' className='dietimg' height={300} />
                            <div className='p-5'>
                                <p className='text-center'>Tailor your diet plan from over 70 meals and snacks</p>
                                <p className='text-center'>From $319 / 4 weeks</p>
                                <div className='text-center'>
                                    <Link to="/core"><button className='w-100 dietbutton'>Plan details <i class="fa-solid fa-arrow-right"></i></button></Link>
                                </div>
                                <hr />
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Choice of over 70 potrion and calorie controlled meals and snacks</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Get your breakfast,kunch,dinner and snacks for each day</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Select either a 4,8,12,16 or 24-weel plan</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  Pause whwn you want**</p>
                                <p><i class="fa-solid fa-check dietpara1icon"></i>  FREE standard delivery</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

            <div className='container11'>
                <div className='row'>
                    <div className='col-12 col-md-6 dietplanleftside'>
                        <h1>Included in all Diet Chef plans :</h1>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  28 days of breakfasts,lunches,dinners and snacks,delivered to your door</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  Just add your own fresh fruit and vegetables</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  Personalise your hamper with your choice of portion and calorie controlled meals</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  Renews automatically**</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  FREE standard delivery</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  14 day money back guarantee</p>
                        <p><i class="fa-solid fa-check dietpara1icon"></i>  FREE 'All you Need to know' diet guide</p>

                    </div>
                    <div className='col-12 col-md-6 dietbackground'>


                    </div>
                </div>
            </div>

            <div className='container12'>
                <div className='row'>
                    <div className='col-md-1'></div>
                    <div className='col-12 col-md-5'>
                        <p>** Please note that all Diet Chef meal plans are an auto-renewing subscription service.
                            To make your continued weight loss journey as easy as possible, once your minimum commitment is finished,
                            you’ll be placed on an ongoing subscription, receiving a hamper every 4 weeks charged at the standard plan fee. If you don’t wish to receive further deliveries contact Customer Services to cancel. An adjustment fee applies if you cancel before the end of your minimum plan term. Pause your diet plan for up to 1 month at any time by contacting Customer Services. Please see terms and conditions for full details.</p>

                    </div>
                    <div className='col-12 col-md-5'>
                        <p>*** If you are not totally satisfied with your first order contact our Customer Service team within the first 14 days and return the remaining food for a full refund. No more than 7 days food may be consumed to be eligible for a full refund, available on first order only, limit one per customer.</p>

                    </div>
                </div>
            </div>

           <Footer/>

        </div>
    )
}

export default Dietplan;