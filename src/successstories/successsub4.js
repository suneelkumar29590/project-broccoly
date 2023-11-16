import { Link,useNavigate } from "react-router-dom";
import './successstory.css'
import Header from "../header/navbar";
import Footer from "../footer/footer";
import Header2 from "../header2/header2";
import { useEffect, useState } from 'react';


const Success4=()=>{
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
    
  let navigate = useNavigate();

  const Successbtn1=()=>{
    navigate("/success_2stlost")
}
const Successbtn2=()=>{
    navigate("/success_2to3lost")
}
const Successbtn3=()=>{
    navigate("/success_3stlost")
}
const Successbtn4=()=>{
    navigate("/success_weightlost")
}
const Successbtn5=()=>{
    navigate("/success_couples")
}

    return(
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>

           <Header2/>

            <div className="container18">
                <div className="row px-5">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5 mt-5">
                        <h2 className="successh2">Male weight loss</h2>
                        <p className="mt-5">See how easy losing weight with Diet Chef can be – Simon lost 70lbs, Scott lost 28lbs and thousands more have lost the weight they have been trying to lose for years – all with help of our delicious diet food and healthy portion sizes. Weight loss results may vary and are different for each individual.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3W-rH3WmnOC1Il3qUhJwGlAeaT_yGNyIa1GNXxPNzxHJW4Z2hmnFiCSK6-STff7y-kew&usqp=CAU" className="successimg"/>   
                    </div>
                    <div className="col-12 col-md-1">
                        <h5 className="lost66">Lost <br/>38lbs*</h5>
                    </div>
                </div>
            </div>

            <div className="container19">
                <div className="row">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3 mt-4">
                        <h5 className="successh2">Display these stories: </h5>
                    </div>
                    <div className="col-12 col-md-8 buttonsdiv row">
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn1}>Less than 2st lost</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn2}>2st to 3st lost</button>
                        <button className="col-md-3 mx-1 btndiv" onClick={Successbtn3}>More than 3st lost</button>
                        <button className="col-md-2 mx-1 btndiv1" onClick={Successbtn4}>Male weight loss</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn5}>Couples</button>
                    </div>
                </div>
               
                <div className="row p-5">
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" In my mind I was 'Fat James', I just wanted to be 'James'.<br/>It all seemed so effortless. "</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3W-rH3WmnOC1Il3qUhJwGlAeaT_yGNyIa1GNXxPNzxHJW4Z2hmnFiCSK6-STff7y-kew&usqp=CAU" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>91lbs*</h5>
                            <button className="readbtn">Read James's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"It's real food and it's varied, I was never hungry. It has changed the way I eat.good"</p>
                            <img src="https://img.freepik.com/premium-photo/young-handsome-blonde-man-isolated-white-background-looking-up_1368-428002.jpg?w=2000" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>28lbs*</h5>
                            <button className="readbtn">Read Sarah's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I'm now healthy, happy and looking so much better. I've had no  with my health and my back doesn't ache. "</p>
                            <img src="https://thumbs.dreamstime.com/z/old-senior-man-suffering-eye-disease-surfer-s-eye-looking-up-pterygium-poor-eyesight-56603307.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>49lbs*</h5>
                            <button className="readbtn">Read Simon's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"I really enjoy the curries, I don’t feel I’m missing out on my usual takeaway. Good all"</p>
                            <img src="https://img.freepik.com/premium-photo/portrait-handsome-smiling-young-man-with-folded-arms-isolated-joyful-cheerful-casual-businessman_777271-13881.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>48lbs*</h5>
                            <button className="readbtn">Read Machele's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    
                </div>
                <div className="row p-5">
                <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"Diet Chef had not only helped me lose weight but had also educated me in healthier choices and smaller portions."</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF8f5LdB2h2jvVxYS9tPCVw1CIo8AePk0sEQJT8uVL&s" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>38lbs*</h5>
                            <button className="readbtn">Read Royacce's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"I tried to diet but never managed to stick to it, then I discovered Diet Chef.good ."</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIuFYH3f4Bb9CDp1bUm2GmffCioGHvuEXSsyVpLfZb&s" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>70lbs*</h5>
                            <button className="readbtn">Read Soe's Story <i class="fa-solid fa-arrow-right"></i></button>
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
                    {/* <div className="col-12 col-md-8">
                        <div className="row">
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
                                <p>I want to take the time give a "5 star Review" Joanne, 18 May</p>

                            </div>

                        </div>










                    </div> */}

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
            </div>

           <Footer/>

        </div>
    )
}
export default Success4;