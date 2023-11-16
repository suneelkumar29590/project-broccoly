import { Link } from "react-router-dom";
import React, { useState } from 'react';
import Header from "../header/navbar";
import Footer from "../footer/footer";
import './home.css'
import Section4 from "./section4";
import Header2 from "../header2/header2";
const Homeeight = () => {

    
    const [heightFt, setHeightFt] = useState('1');
    const [heightIn, setHeightIn] = useState('5');
    const [weightSt, setWeightSt] = useState('1');
    const [weightLbs, setWeightLbs] = useState('10');
    const [gender, setGender] = useState('male');
    const [age, setAge] = useState('25');
    const [activityLevel, setActivityLevel] = useState('lessthan 18.5');
    const [email, setEmail] = useState('');
    const [sendTips, setSendTips] = useState('yes');
    const [bmi, setBMI] = useState(null);
  
    const calculateBMI = () => {
      const heightInches = (parseInt(heightFt) * 12) + parseInt(heightIn);
      const weightPounds = (parseInt(weightSt) * 14) + parseInt(weightLbs);
      const calculatedBMI = (weightPounds / (heightInches * heightInches)) * 703;
  
      setBMI(calculatedBMI.toFixed(2));
    };



    return (
        <div>
            <Header/>
            <Header2/>

            <div class="banner">
                <div class="left-side">
                    <button className="btn btn-warning">Get Started Now <i class="fa-solid fa-arrow-right"></i></button>
                    <h1>Delicious diet<br /> plans delivered<br /> direct to you</h1>
                    <p>Join over 250,000 people who've chosen broccoly to help<br /> them lose weight we send 28 days of chef-prepared<br /> meals and snacks straight to your door,making losing<br /> wieght simple and tasty.</p>
                </div>
                <div class="right-side">
                    <div class="card">
                        <div class="leaf-container">
                          <h2>THANK YOU</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container8">

<div className="container7">
    <div className="row">
        <div className="col-12 col-md-6">

            <div id="demo" class="carousel slide" data-bs-ride="carousel">


                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                </div>


                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQj1sWSgL_JoxlGV4uwcMVy9sqc3SR6QGHKMswMPLWQr_Qm9LWZUFwpWdst9fCRy_cnYE8&usqp=CAU" className="carouselimg"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/premium-photo/headshot-successful-smiling-cheerful-african-american-businessman-executive-stylish-company-leader_1258-3831.jpg?w=360" className="carouselimg"/>
                    </div>
                    <div class="carousel-item">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQo_gk4Q75nB0rrVXThnAoLmTq07u_VfULB0tQs8C9HYT_GBMFqERD_vJKKLF30Ar284&usqp=CAU" className="carouselimg"/>
                    </div>
                </div>


                <button class="carousel-control-prev" type="button" data-bs-target="#demo" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon"></span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#demo" data-bs-slide="next">
                    <span class="carousel-control-next-icon"></span>
                </button>
            </div>

        </div>
    
         
                    
                   
                    <div className="col-12 col-md-6 bmidown">
                        <div className="">
                            <center><img src='data:image/png;base64,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' style={{ width: '100px' }} /></center>
                            <h4 className="text-center bmiheading" style={{ padding: '4px', padding: '10px', color:'black' }}>FREE<span>  BMI Calculator</span></h4>
                            <div className="row mt-4 ">
                                <div className="col-md-2"></div>
                                <div className="col-md-4">
                                    <label>Height</label>
                                    <select className="ageinput w-25" value={heightFt} onChange={(e) => setHeightFt(e.target.value)}>
                                        <option>ft</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6</option>
                                    </select>
                                    <select className="ageinput w-25 mx-2" value={heightIn} onChange={(e) => setHeightIn(e.target.value)}>
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
                                    <select className="ageinput w-25" value={weightSt} onChange={(e) => setWeightSt(e.target.value)}>
                                        <option>st</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                    </select>

                                    <select className="ageinput w-25 mx-2" value={weightLbs} onChange={(e) => setWeightLbs(e.target.value)}>
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
                                    <input type="radio" name="type" />Male
                                </div>
                                <div className="col-md-2">
                                    <input type="radio" name="type" />Female
                                </div>

                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Age</label>
                                <select className="col-md-5 ageinput">
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
                                <select className="col-md-5 ageinput">
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
                                <input type="text" className="col-md-5 ageinput" />



                            </div>
                            <div className="row mt-2">
                                <div className="col-md-2"></div>
                                <label className="col-md-3">Send me diet tips & offers</label>
                                <div className="col-md-2">
                                    <input type="radio" name="type" />yes
                                </div>
                                <div className="col-md-2">
                                    <input type="radio" name="type" />no
                                </div>

                            </div>
                            <div className="row mb-3 mt-3">
                                <div className="col-md-4"></div>
                                <button className="col-md-4 bmibutton" onClick={calculateBMI} data-toggle="modal" data-target="#imageModal">Show my results</button>


                                <h2>    {bmi !== null && <p className="text-center">Your BMI Result: {bmi}</p>}</h2>
                            </div>





                        </div>

                    </div>
                </div>
            </div>
  </div>
    

  <div className="container2 ">
                <div className="row">
                    <div className="col-12 col-md-6 p-5 foodleft">
                        <h3 className="foodpara">Lose weight ahile eating<br/> the food you love...</h3>
                        <p className="foodpara1"><i class="fa-solid fa-check foodpara1icon"></i>  Expertly chef-prepared dishes from breakfast to dinner</p>
                        <p className="foodpara1"><i class="fa-solid fa-check foodpara1icon"></i>  Over 55 meals and snacks to choose from</p>
                        <p className="foodpara1"><i class="fa-solid fa-check foodpara1icon"></i>  No counting points or calories-we do the numbers for you</p>
                        <p className="foodpara1"><i class="fa-solid fa-check foodpara1icon"></i>  Your food for the month delivered to your door for free!</p>
                        <p className="foodpara1"><i class="fa-solid fa-check foodpara1icon"></i>  See what our customers think from over 9500 independent reviews on Trustpilot</p>
                        <button className="foodparabtn">View our menu <i class="fa-solid fa-arrow-right"></i></button>

                    </div>
                    <div className="col-12 col-md-6 foodright">


                    </div>
                </div>
            </div>
{/* 
            <div className="container3 ">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="text-center">What our customers say</h1>

                    </div>
                    <div className="col-12 col-md-3">
                        <h5 className="text-center">Average</h5>
                        <p className="text-center"><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star"></i><i class="fa-regular fa-star"></i></p>
                        <p className="text-center nbrpara">Based on <span className="nbrdata">10,974 reviews</span></p>
                        <p className="text-center googleword"><span className="text-primary">G</span><span className="text-danger">o</span><span className="text-warning">o</span><span className="text-primary">g</span><span className="text-primary">l</span><span className="text-danger">e</span></p>
                        <p className="text-center nbrpara">Reviews<i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i><i class="fa-regular fa-star yellowstar"></i></p>


                    </div>
                    

                    <div className="col-12 col-md-8">
                        <div id="slider">
                            <input type="radio" name="slider" id="slide1" checked />
                            <input type="radio" name="slider" id="slide2" />
                            <input type="radio" name="slider" id="slide3" />
                            <input type="radio" name="slider" id="slide4" />
                            <div id="slides">
                                <div id="overflow">
                                    <div class="inner">
                                        <div class="slide slide_1">
                                            <div class="slide-content row">
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>I had been on broccolly a few years ag...</h5>
                                                    <p>I had been on broccolly a few years ago with success so when i started having we...Janice Shepherd.7 August Showing our 4 & 5 star reviews</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>The best meals</h5>
                                                    <p>The best meals Missy Moham, 31 July</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>Excellent Customer Service</h5>
                                                    <p>I want to take the time give a<br /> "5 star Review" Joanne, 18 May</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide slide_2">
                                            <div class="slide-content row">
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>I had been on broccolly a few years ag...</h5>
                                                    <p>I had been on broccolly a few years ago with success so when i started having we...Janice Shepherd.7 August Showing our 4 & 5 star reviews</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>The best meals</h5>
                                                    <p>The best meals Missy Moham, 31 July</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>Excellent Customer Service</h5>
                                                    <p>I want to take the time give a<br /> "5 star Review" Joanne, 18 May</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide slide_3">
                                            <div class="slide-content row">
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>I had been on broccolly a few years ag...</h5>
                                                    <p>I had been on broccolly a few years ago with success so when i started having we...Janice Shepherd.7 August Showing our 4 & 5 star reviews</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>The best meals</h5>
                                                    <p>The best meals Missy Moham, 31 July</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>Excellent Customer Service</h5>
                                                    <p>I want to take the time give a<br /> "5 star Review" Joanne, 18 May</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="slide slide_4">
                                            <div class="slide-content row">
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>I had been on broccolly a few years ag...</h5>
                                                    <p>I had been on broccolly a few years ago with success so when i started having we...Janice Shepherd.7 August Showing our 4 & 5 star reviews</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>The best meals</h5>
                                                    <p>The best meals Missy Moham, 31 July</p>

                                                </div>
                                                <div className="col-12 col-md-4">
                                                    <p className="">Reviews<i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i><i class="fa-regular fa-star greenstar"></i></p>
                                                    <h5>Excellent Customer Service</h5>
                                                    <p>I want to take the time give a<br /> "5 star Review" Joanne, 18 May</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="controls">
                                <label for="slide1"></label>
                                <label for="slide2"></label>
                                <label for="slide3"></label>
                                <label for="slide4"></label>
                            </div>
                            <div id="bullets">
                                <label for="slide1"></label>
                                <label for="slide2"></label>
                                <label for="slide3"></label>
                                <label for="slide4"></label>
                            </div>
                        </div>

                    </div>
                </div>
            </div> */}


<Section4/>


<div className="container4">

    <div className=" pb-5">
        <div className="row">
            <h2 className="text-center mt-5 mb-5">How Diet Chef works</h2>
            <div className="col-md-1"></div>
            <div class="col-12 col-md-3">
                <img class="" src="https://www.dietchef.co.uk/static/img/home/process1.png" alt="Image 1"  />
                <h5 className="">1.Choose your plan</h5>
                <p className="">and ckeckout securely</p>
            </div>
            <div class="arrow-mark col-md-1">
                &rarr;
            </div>
            <div class="col-12 col-md-3">
                <img class="" src="	https://www.dietchef.co.uk/static/img/home/process2.png" alt="Image 2"/>
                <h5 className="">2. Receive your food<br /> the next working day</h5>
                <p className="">with FREE standard delivery</p>
                <div className="mt-5">
                    <button className="recivebtn">Get started now <i class="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
            <div class="arrow-mark col-md-1">
                &rarr;
            </div>
            <div class="col-12 col-md-3">
                <img class="" src="https://www.dietchef.co.uk/static/img/home/process3.png" alt="Image 3"  />
                <h5 className="text-center">3.Enjoy your meals &<br /> feel graet!</h5>
                <p className="text-center">just heat and eat</p>

            </div>

        </div>
    </div>
</div>


<div className="container5 pb-5">
    <div className="row">
        <h2 className="text-center mt-5 mb-5">What the press say</h2>
        <div className="col-md-1"></div>
        <div className="col-12 col-md-2 text-center">
            <img src="https://qph.cf2.quoracdn.net/main-qimg-e8c859c99be12149e07160b4eb9c051a-lq" width={200} height={100} />
            <p className="mt-3 h-5">"Good value,great food.I got to choose my own meals.And i can honestly say there was not one thing i tried i didn't like..."</p>
            <p className="paperlink">Read more {">"}</p>
        </div>
        <div className="col-12 col-md-2 text-center mx-2">
            <img src="data:image/png;base64,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" width={200} height={100} />
            <p className="mt-3">"The thing i like about broccolly was it takes all the hassle out calorie counting..."</p>
            <p className="mt-4 paperlink">Read more {">"}</p>
        </div>
        <div className="col-12 col-md-2 text-center mx-2">
            <img src="data:image/png;base64,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" width={200} height={100} />
            <p className="mt-3 ">"Karren Brady says broccolly helped her drop a dress size in preparation for her Christmas..."</p>
            <p className="mt-4 paperlink">Read more {">"}</p>
        </div>
        <div className="col-12 col-md-2 text-center mx-2">
            <img src="data:image/png;base64,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" width={200} height={100} />
            <p className="mt-3">"I dropped 3 sizes with broccolly it was a real education..."</p>
            <p className="mt-5  paperlink">Read more {">"}</p>
        </div>
        <div className="col-12 col-md-2 text-center mx-2">
            <img src="data:image/jpeg;base64,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" width={200} height={100} />
            <p className="mt-3">"I was dropping a dress size every six weeks and within 3 months i had lost over 42lbs..."</p>
            <p className="mt-4  paperlink ">Read more {">"}</p>
        </div>
    </div>
</div>


          <Footer/>


           






        </div>
    )
}

export default Homeeight;