import { useState, useEffect } from "react";
import Header from "../header/navbar";
import Footer from "../footer/footer";
import Header2 from "../header2/header2";
import { Link } from "react-router-dom";
import './bmicalculator.css'
import Overflow from "../dietplan/overflow";




const Bmicalculator = () => {
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
  
    

    const [heightFt, setHeightFt] = useState('ft');
    const [heightIn, setHeightIn] = useState('in');
    const [weightSt, setWeightSt] = useState('st');
    const [weightLbs, setWeightLbs] = useState('lbs');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('Age');
    const [activityLevel, setActivityLevel] = useState('Activity level');
    const [email, setEmail] = useState('');
    const [sendTipsAndOffers, setSendTipsAndOffers] = useState('yes');
    const [bmi, setBMI] = useState(null);
    const [needleRotation, setNeedleRotation] = useState(0);

    // BMI calculation function
    const calculateBMI = () => {
        // Perform the BMI calculation based on the user's input
        const heightInMeters = (parseFloat(heightFt) * 0.3048) + (parseFloat(heightIn) * 0.0254);
        const weightInKg = (parseFloat(weightSt) * 6.35029) + (parseFloat(weightLbs) * 0.453592);
        const bmiValue = (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);

        // Set the calculated BMI
        setBMI(bmiValue);
        setNeedleRotation(bmi);
    };

    useEffect(() => {
        const maxRotation = 180;
        const newRotation = Math.min(Math.max(bmi, 0), maxRotation);
        setNeedleRotation(newRotation);

    }, [bmi]);





    return (
        
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            

            <Header />
            <Header2 />



            <div className="container7 mt-5 card1 pb-5">
                <div className="row">
                    <div className="col-md-2"></div>


                    <div className="col-12 col-md-8 shadow">
                        <div className="">
                            <center><img src='data:image/png;base64,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' style={{ width: '100px' }} /></center>
                            <h4 className="text-center bmiheading" style={{ padding: '7px', padding: '30px', color: 'black' }}>FREE<span>  BMI Calculator</span></h4>
                            <div className="row mt-4">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <label>Height</label>
                                    <select className="w-25 mx-2 bmiinputfield" value={heightFt} onChange={(e) => setHeightFt(e.target.value)}>
                                        <option>ft</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    <select className="w-25 bmiinputfield" value={heightIn} onChange={(e) => setHeightIn(e.target.value)}>
                                        <option >in</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                        <option value="7">7</option>
                                        <option value="8">8</option>
                                        <option value="9">9</option>
                                        <option value="10">10</option>
                                    </select>
                                </div>
                                <div className="col-md-1"></div>
                                <div className="col-md-4">
                                    <label>Weight</label>
                                    <select className="w-25 mx-2 bmiinputfield" value={weightSt} onChange={(e) => setWeightSt(e.target.value)}>
                                        <option>st</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>

                                    <select className="w-25 bmiinputfield" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)}>
                                        <option>lbs</option>
                                        <option value="10">10</option>
                                        <option value="11">11</option>
                                        <option value="12">12</option>
                                        <option value="13">13</option>
                                        <option value="14">14</option>
                                    </select>
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Gender</label>
                                <div className="col-md-2">
                                    <input type="radio" /> Male
                                </div>
                                <div className="col-md-2">
                                    <input type="radio" /> Female
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Age</label>
                                <select className="col-md-5 bmiinputfield">
                                    <option>Age</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                </select>



                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Activity level</label>
                                <select className="col-md-5 bmiinputfield">
                                    <option>Activity level</option>
                                    <option value="lessthan 18.5">lessthan 18.5</option>
                                    <option value="greaterthan 18.5">greaterthan 18.5</option>
                                    <option value="equal 25">equal 25</option>
                                    <option value="morethan 30">morethan 30</option>
                                </select>



                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Email Address</label>
                                <input type="text" className="col-md-5 bmiinputfield" />



                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Send me diet tips & offers</label>
                                <div className="col-md-2">
                                    <input type="radio" /> yes
                                </div>
                                <div className="col-md-2">
                                    <input type="radio" /> no
                                </div>

                            </div>
                            <div className="row mb-3 mt-3">
                                <div className="col-md-4"></div>
                                <button className="col-md-4 bmibutton" onClick={calculateBMI} data-toggle="modal" data-target="#imageModal">Show my results</button>


                                <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                    <div class="modal-dialog modal-lg" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <h2>    {bmi !== null && <p className="text-center">Your BMI Result: {bmi}</p>}</h2>
                                                <div className="container75">


                                                    <div className='row'>
                                                        <div className=" col mb-3 mt-left-cart">
                                                        <h1>Speedometer</h1>
                                                                <div className="speedometer">
                                                                    <div className="needle" style={{ transform: `rotate(${needleRotation}deg)` }} />
                                                                </div>
                                                            
                                                        </div>
                                                        <div className=' col-lg-7'>
                                                            <div className='right-cart'>
                                                                <h5>Your BMI is 21.52 BMI of 18-25 is considered healthy.</h5>
                                                                <p>You are within the normal weight range for your height. A healthy weight for you is between 9 st 3 lbs and 12 st 7 lbs. You should consider carefully whether you need to diet.</p>
                                                                <div>
                                                                    <h5>Daily Calorie requirements</h5>
                                                                    <p>Based on your height, weight, age, and level of exercise we estimate that you will burn 2086 calories (Kcal) per day. For a healthy weight loss of 1-2 lbs per week you should eat around 1500 calories per day.</p>
                                                                </div>
                                                                <div>
                                                                    <h5>Following the Diet Chef Plan</h5>
                                                                    <p>Once you add your daily milk, fresh fruit, vegetables, and carbohydrates to your Diet Chef meal plan, you'll be consuming around 1500 calories per day. Based on your BMI you should add an extra 0 calories per day to reach your target calorie intake to ensure a steady and sustainable weight loss.</p>
                                                                    <p>If you're looking to lose weight or maintain your healthy BMI, our lower-calorie meal plans can help.</p>
                                                                </div>
                                                                <button style={{ backgroundColor: 'rgb(82, 11, 16)',marginBottom:'20px',borderRadius:"5px" }}>
                                                                    <Link to="/dietplan"><p style={{ color: 'white', width: '95px' }}>Buy now</p></Link>
                                                                </button>
                                                                <div>
                                                                    <button style={{ backgroundColor: 'rgb(82, 11, 16)' }}>
                                                                        <p style={{ color: 'white', width: '200px' }}>Get a Personal quote</p>
                                                                    </button>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <div class="modal-footer">
                                                Good health
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>

                    </div>
                </div>
            </div>

            <div className="container20">
                <div className="row">
                    <div className="col-md-2">

                    </div>
                    <div className="col-md-6 text-center">
                        <h5 className="singlehead">Join over 250,000 people who chose Diet Chef</h5>
                    </div>
                    <div className="col-md-4">
                        <Link to="/dietplan"><button className="singlebtn">View diet plans <i class="fa-solid fa-arrow-right"></i></button></Link>
                    </div>
                </div>
            </div>

            <Footer />


        </div>





    )
}
export default Bmicalculator;





















