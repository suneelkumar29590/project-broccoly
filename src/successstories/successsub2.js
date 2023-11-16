import { Link,useNavigate } from "react-router-dom";
import './successstory.css'
import Header from "../header/navbar";
import Footer from "../footer/footer";
import Header2 from "../header2/header2";
import { useEffect, useState } from 'react';


const Success2=()=>{
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
                        <h2 className="successh2">2st to 3st lost</h2>
                        <p className="mt-5">See how easy losing weight with Diet Chef can be – Megan lost 23lbs, Holly lost 26lbs and thousands more have lost the weight they have been trying to lose for years – all with help of our delicious diet food and healthy portion sizes. Weight loss results may vary and are different for each individual.</p>
                    </div>
                    <div className="col-12 col-md-5">
                        <img src="https://thumbs.dreamstime.com/b/young-woman-29482789.jpg" className="successimg"/>   
                    </div>
                    <div className="col-12 col-md-1">
                        <h5 className="lost66">Lost <br/>28lbs*</h5>
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
                        <button className="col-md-2 mx-1 btndiv1" onClick={Successbtn2}>2st to 3st lost</button>
                        <button className="col-md-3 mx-1 btndiv" onClick={Successbtn3}>More than 3st lost</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn4}>Male weight loss</button>
                        <button className="col-md-2 mx-1 btndiv" onClick={Successbtn5}>Couples</button>
                    </div>
                </div>
               
                <div className="row p-5">
                   
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" The compliments are flowing for my new figure!<br/>It all seemed so effortless. "</p>
                            <img src="https://st3.depositphotos.com/1049680/32017/i/450/depositphotos_320176396-stock-photo-young-handsome-business-man-wearing.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>42lbs*</h5>
                            <button className="readbtn">Read Kelli's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"I look 10 years younger! <br/>It all seemed so effortless.<br/> Good all"</p>
                            <img src="https://thumbs.dreamstime.com/b/business-casual-woman-standing-isolated-white-background-portrait-78143411.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>42lbs*</h5>
                            <button className="readbtn">Read Susan's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" From day one I found the meals tasty and satisfying.<br/>It all so effortless."</p>
                            <img src="https://media.istockphoto.com/id/516008884/photo/woman-with-plait-in-blue-and-green-checked-shirt-smiling.jpg?s=612x612&w=is&k=20&c=IjreIFMDcQ1dxtnIdMl4pDEjjE0fvmjKp7JjzNE-o-0=" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>41lbs*</h5>
                            <button className="readbtn">Read Caro's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I never once felt like I was on a diet or being deprived. The food is so tasty and surprisingly filling. "</p>
                            <img src="https://thumbs.dreamstime.com/b/young-woman-29482789.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>36lbs*</h5>
                            <button className="readbtn">Read Megan's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                </div>
                <div className="row p-5">
                    
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"I looked online and it seemed perfect for me. Picking out what I wanted to eat for each meal was marvellous."</p>
                            <img src="https://media.istockphoto.com/id/484191807/photo/enjoying-life-with-a-broad-smile.jpg?s=612x612&w=is&k=20&c=4xJ8bKKQ8ezDCBoBzrdZpIH_Uj3Ni6Jp1OLyFITF-DM=" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>42lbs*</h5>
                            <button className="readbtn">Read Barbara's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>"It made me realise a smaller portion is enough to completely fill me up.<br/>It all seemed so effortless."</p>
                            <img src="https://media.istockphoto.com/id/512824594/photo/business-young-woman.jpg?s=612x612&w=is&k=20&c=tAuLvedmvsvzexqkJawwclEcsb4sjQDGu9zgH1wFrS0=" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>38lbs*</h5>
                            <button className="readbtn">Read Johanna's Story <i class="fa-solid fa-arrow-right"></i></button>
                        </div>   
                    </div>
                    <div className="col-12 col-sm-6 col-md-3">
                        <div className="card p-3 multicard">
                            <p>" I am so much more confident, happy, energetic and I am now the role model that I wanted to be for my little girl."</p>
                            <img src="https://img.freepik.com/premium-photo/portrait-smiling-young-man_171337-38369.jpg" className="imgmulti"/>
                            <h5 className="lost661">Lost <br/>35lbs*</h5>
                            <button className="readbtn">Read Nicole's Story <i class="fa-solid fa-arrow-right"></i></button>
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
export default Success2;