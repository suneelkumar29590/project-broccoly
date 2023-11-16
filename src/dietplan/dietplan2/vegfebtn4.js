import Footer from '../../footer/footer';
import Header from '../../header/navbar';
import Header2 from '../../header2/header2';
import './vegetarian.css';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';

const Vegetarianfemale4 = () => {
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

            <div className='container13'>
                <div className='row'>
                    <div className='col-12'>
                        <h1 className='text-center mb-5 dietplan2h1'>Vegetarian Plan</h1>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-12 col-md-5'>
                        <img src="https://www.healthkart.com/connect/wp-content/uploads/2016/05/banner-6.jpg" className='vegimg' />
                        <p className='mt-5'>Tailor make your Diet Chef plan from over 50 delicious vegetarian meals and snacks. From curries to Italian favourites – nothing is off the menu! We’ve done all the calorie counting for you so you don’t have to. Just heat and eat in 3 minutes. Enjoy your tasty Diet Chef meals and lose up to a healthy 1-2lbs per week! *</p>
                    </div>
                    <div className='col-12 col-md-5 vegright'>
                        <h3 className='mb-3 dietplan2h1'>Make it yours...</h3>
                        <p>Who is the order for?what's included</p>
                        <Link to="/veg"><button className='vegfemalebtn'>Male</button></Link>
                        <button className='vegmalebtn'>Female</button>
                        <h4 className='mb-5 mt-5 dietplan2h1'>Choose a meal plan</h4>
                        <div className='row'>
                        <Link className='col-sm-4 col-md-4' to="/vegfemale"><button className=' vegbutton1'>
                                <p>Lose2-3 stone</p>
                                <p>24 week<br />$349.00<br />/ 4 weeks</p>
                                <p>Save $90 per month</p>
                            </button></Link>
                            <Link className='col-sm-4 col-md-4' to="/vegfebtn2"><button className='vegbutton1'>
                                <p>Lose1-2 stone</p>
                                <p>24 week<br />$369.00<br />/ 4 weeks</p>
                                <p>Save $70 per month</p>
                            </button></Link>
                            <Link className='col-sm-4 col-md-4' to="/vegfebtn3"><button className=' vegbutton1'>
                                <p>Lose11-13 stone</p>
                                <p>24 week<br />$389.00<br />/ 4 weeks</p>
                                <p>Save $50 per month</p>
                            </button></Link>
                            <Link className='col-sm-4 col-md-4 mt-5' to="/vegfebtn4"><button className=' vegbutton'>
                                <p>Lose6-9 stone</p>
                                <p>24 week<br />$419.00<br />/ 4 weeks</p>
                                <p>Save $20 per month</p>
                            </button></Link>
                            <Link className='col-sm-4 col-md-4 mt-5' to="/vegfebtn5"><button className='vegbutton1'>
                                <p>Lose2-4 stone</p>
                                <p>24 week<br />$439.00<br />/ 4 weeks</p>
                                <p>Save $10 per month</p>
                            </button></Link>

                        </div>

                        <div className='row'>
                            <hr />
                            <h6 className='col-md-3'>Standard Delivery</h6>
                            <p className='col-md-6'></p>
                            <h6 className='col-md-3'>FREE</h6>
                            <hr />
                            <h6 className='col-md-3'>First hamper</h6>
                            <p className='col-md-6'></p>
                            <h6 className='col-md-3'>$349.00</h6>
                            <hr />
                            <h6 className='col-md-3'>Following hampers</h6>
                            <p className='col-md-6'></p>
                            <h6 className='col-md-3'>$349.00<br />(every 4 weeks)</h6>
                            <Link to="/breakfast"><button className='vegchoose w-100'>Choose meals</button></Link>

                        </div>
                    </div>
                </div>
            </div>

            <div className='container14'>
                <div className='row'>
                    <div className='col-12'>
                        <h4 className='text-center mt-5 mb-5 dietplan2h1'>What will  your menu be like on the Vegetarian Plan?</h4>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-12 col-md-2'>
                        <h5>Breakfast</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsfmQGhrtgVl6Bp6oD53rO9TzYDJ_kZRxZ0mzm1EA&s" className='lunchimg' />
                        <p className='vegpara'>How do you like your pancakes in the morning? At just 152kcal per serving, you’re free to get creative with your toppings. Add your favourite fresh fruit and a dollop of low fat yoghurt for a tasty breakfast!</p>
                    </div>
                    <div className='col-12 col-md-2'>
                        <h5>Lunch</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUuIxizQsy9u-_cBwWhwrU8mezvtwYt5LC3SIGfG5N&s" className='lunchimg' />
                        <p>You can never go wrong with a warm and filling bowl of soup for lunch. Our cream of tomato soup has just over 230kcal! Enjoy with a light crisp bread to dip in or beside a fresh salad.</p>
                    </div>
                    <div className='col-12 col-md-2 '>
                        <h5>Dinner</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIx8KF4O2hKeNEYaTrHW_r0jgwqbMAxG2wNoXjhZaEeLh65ffEt9wFPNzp_AOMKVr1F7M&usqp=CAU" className='lunchimg' />
                        <p>Enjoy tasty vegetarian versions of your favourite dishes. Our vegetable korma has just 216kcal! Enjoy with a side of rice or some steamed broccoli and mange tout.</p>
                    </div>
                    <div className='col-12 col-md-2'>
                        <h5>Snack</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6FvvFdqmaCCey-86M02FrMSzV0KvGKOgHm2O1B-qC&s" className='lunchimg' />
                        <p>Our range of oat biscuits are all under 95kcal per serving! Available in a selection of tasty flavours: chocolate chip, fruit & spice, mixed berries and ginger.

                            Great to enjoy in the evening or to dunk into an afternoon cup of tea.</p>
                    </div>
                </div>
                <div className='row'>
                   
                    <div className='col-12 mt-5'>
                        <hr/>
                        <h3 className='text-center dietplan2h1'>Other plans you may like</h3>
                    </div>
                    <div className='col-md-2'></div>
                    <div className='col-md-4 coreplanveg'>
                        <h4 className='dietplan2h1'>Core Plan</h4>
                        <p>Choose from over 70 delicious portion and calorie controlled meals – our best-selling plan!</p>
                        <Link to="/core"><button className='vegcorebtn'>Plan details  <i class="fa-solid fa-arrow-right"></i></button></Link>
                    </div>

                </div>
                <div className='row mt-5'>
                    <hr/>
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
export default Vegetarianfemale4;