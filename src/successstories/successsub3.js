import { Link,useNavigate } from "react-router-dom";
import './successstory.css'
import Header from "../header/navbar";
import Footer from "../footer/footer";
import Header2 from "../header2/header2";
import { useEffect, useState } from 'react';


const Success3 = () => {
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

    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>

            <Header2/>

            <div className="container18">
                <div className="row px-5">
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-5 mt-5">
                        <h2 className="successh2">Most than 3st lost</h2>
                        <p className="mt-5">Most than 3st lost
                            See how easy losing weight with Diet Chef can be – Suzanne lost 98lbs, Meinir lost 86lbs and thousands more have lost the weight they have been trying to lose for years – all with help of our delicious diet food and healthy portion sizes. Weight loss results may vary and are different for each individual.*</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src="https://img.freepik.com/premium-photo/young-man-shirt-isolated-white-background_185193-74626.jpg" className="successimg" />
                    </div>
                    <div className="col-12 col-md-1">
                        <h5 className="lost66">Lost <br />66lbs*</h5>
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
                        <button className="col-md-3 mx-1 btndiv1" onClick={Successbtn3}>More than 3st lost</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn4}>Male weight loss</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn5}>Couples</button>
                    </div>
                </div>



                <div className="row p-5">

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I'm the lightest I've been in a decade! <br />It all seemed so effortless."</p>
                            <img src="https://img.freepik.com/premium-photo/portrait-handsome-smiling-young-man-with-folded-arms-isolated-joyful-cheerful-casual-businessman_777271-13881.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />66lbs*</h5>
                            <button className="readbtn">Read Kezia's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" Before I started Diet Chef I hated my body and how I looked. "</p>
                            <img src="https://img.freepik.com/premium-photo/excited-young-business-man-celebrating-success-isolated-white-background_840989-3367.jpg?size=338&ext=jpg&ga=GA1.1.1413502914.1697068800&semt=ais" className="imgmulti" />
                            <h5 className="lost661">Lost <br />56lbs*</h5>
                            <button className="readbtn">Read Natalie's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"Strangers regularly insulted me on nights out, because of my size! "</p>
                            <img src="https://img.freepik.com/premium-photo/young-man-shirt-isolated-white-background_185193-74626.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />70lbs*</h5>
                            <button className="readbtn">Read Susan's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"Life is restarting at 60!<br />It all seemed so effortless. "</p>
                            <img src="https://img.freepik.com/premium-photo/young-man-shirt-isolated-white-background_185193-74627.jpg?w=360" className="imgmulti" />
                            <h5 className="lost661">Lost <br />63lbs*</h5>
                            <button className="readbtn">Read Maragrt's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row p-5">

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I've got my mojo back!<br />It all seemed so effortless.<br /> "</p>
                            <img src="https://img.freepik.com/premium-photo/handsome-hispanic-man-is-showing-nine-fingers-isolated-white-background_96943-1187.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />45lbs*</h5>
                            <button className="readbtn">Read Sue's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"A year ago I couldn’t have even imagined being this slim. I never even felt like I was on a diet."</p>
                            <img src="https://img.freepik.com/free-photo/you-got-this-join-us-smiling-assertive-woman-pointing-front-inviting-work-company-event-praising-good-job-well-done-gesture-standing-white-wall_176420-37967.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />86lbs*</h5>
                            <button className="readbtn">Read Mainer's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" It enables me to be strictly aware of portion sizes, that really is useful to me. "</p>
                            <img src="https://t4.ftcdn.net/jpg/00/76/41/17/360_F_76411771_jhj2weKam8XaQV5Usa6hnyLWDFxAqbQP.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />59lbs*</h5>
                            <button className="readbtn">Read Debby's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I was shocked how good the meals tasted, I never thought losing weight could be this easy."</p>
                            <img src="https://img.freepik.com/premium-photo/studio-portrait-corporate-woman-laugh-funny-real-estate-joke-comedy-property-developer-humour-profile-picture-realtor-happiness-laughing-expert-person-isolated-white-background_590464-200244.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />46lbs*</h5>
                            <button className="readbtn">Read Lizanne's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row p-5">

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I lost 5st 5lbs with Diet Chef.<br />It all seemed so effortless.<br />"</p>
                            <img src="https://img.freepik.com/premium-photo/happy-woman-smiling-isolated-white-background_470178-5489.jpg?w=360" className="imgmulti" />
                            <h5 className="lost661">Lost <br />77lbs*</h5>
                            <button className="readbtn">Read Vicky's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"I never once felt like i was on a diet or being deprived. I am now a size 8! I have lost a of 3st 6lbs in 35 weeks!"</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHOEL8rwgAa3JOKTsRQRO3FAjF09FTaY7eavQyu5JSM-POH98PBfhehJWRMQX1hSyGCUQ&usqp=CAU" className="imgmulti" />
                            <h5 className="lost661">Lost <br />50lbs*</h5>
                            <button className="readbtn">Read Sue's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" If I can do it, anyone can. It was very hard work at times, but the difference has been amazing. "</p>
                            <img src="https://img.freepik.com/free-photo/pretty-smiling-young-couple-isolated-white-background_231208-9364.jpg" className="imgmulti" />
                            <h5 className="lost661">Lost <br />98lbs*</h5>
                            <button className="readbtn">Read Suzzane's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"It’s so easy and it’s all the kind of food I’d eat anyway.<br />It all seemed so effortless.."</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqJonW7nTw_w42lFzQ5wiLiwRbcYih9dnwAlwXEYM83S3157vhPpsnWTP65ZHsM-bhHk&usqp=CAU" className="imgmulti" />
                            <h5 className="lost661">Lost <br />56lbs*</h5>
                            <button className="readbtn">Read Katy's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="row p-5">

                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" Diet Chef helped me change my eating habits for good.<br />It all seemed so effortless. "</p>
                            <img src="https://media.istockphoto.com/id/1081173266/photo/the-happy-man-and-a-woman-hug-on-the-white-background.jpg?s=612x612&w=0&k=20&c=wCZmVIRfGkiugoXRYyGoCDNBu6YUrhzH-jRszwRqeIA=" className="imgmulti" />
                            <h5 className="lost661">Lost <br />63lbs*</h5>
                            <button className="readbtn">Read Sheila's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I didn’t just lose weight, I changed my relationship with food and rebuilt my confidence."</p>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwEDl3pbjyRHGexm2mgA11sqpcbNFKe-EUAF743m8mf6zzin7yrbxLdWgQ_Bu-J4u54Gg&usqp=CAU" className="imgmulti" />
                            <h5 className="lost661">Lost <br />45lbs*</h5>
                            <button className="readbtn">Read Kerry's Story <i class="fa-solid fa-arrow-right"></i></button>
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
export default Success3;