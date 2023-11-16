import { Link,useNavigate } from "react-router-dom";
import './choosebreakfast.css';
import React, { useState,useEffect } from 'react';
import Header from "../../header/navbar";
import Footer from "../../footer/footer";
import Orderbtn from "./orderbtn";
import Counter from "./count";
import axios, { Axios } from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header2 from "../../header2/header2";



const Lunch = () => {
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


    const [type_of_food,settype_of_food]=useState("lunch");
    const [selected_item,setselected_item]=useState([])
    const [data, setdata] = useState([]);
    
    let navigate = useNavigate();

    const handleButtonClick = (type_of_food) => {
        settype_of_food(type_of_food);
      };
      const handleButtonClick1 = (selected_item) => {
        setselected_item((prevSelectedItems) => [...prevSelectedItems, selected_item]);
      };  

      const removeSelectedItem = (selected_item) => {
        // Remove the selected item from the array
        setselected_item((prevSelectedItems) => prevSelectedItems.filter(item => item !== selected_item));
      };
      
    const usersData={
        type_of_food:type_of_food,
        selected_item: selected_item.join(', '),
       
    };
    const onSubmitForm=(e)=>{
        e.preventDefault();

        if(
            type_of_food && selected_item.length > 0 
        ){
            axios.post("http://localhost:3001/orderplan/",usersData)
            .then((response)=>{
                console.log(response.data);
                setdata(response.data);
                console.log(response.data);
                if (response.status === 200) {
                    toast.success("Registration Successful", {
                      position: "top-right",
                      autoClose: 1000,
                      hideProgressBar: false,
                      closeOnClick: true,
                      pauseOnHover: true,
                      draggable: true,
                      progress: undefined,
                      theme: "colored",
                    });
                    setTimeout(function () {
                        navigate("/order");
                      }, 3000);
                    }
            })
            .catch((error) => {
                toast.error("Email already exists: please enter a valid email", {
                  position: "top-right",
                  autoClose: 1000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "colored",
                });
                console.log(error);
              });
          } else {
            toast.warning("Enter the Required Details");
      
          }
    };

    console.log(type_of_food)
    console.log(selected_item)
    console.log(usersData)




    return (
        <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
            <Header/>
            <Header2/>

            <div className="container15" id="backtotop">
                <div className="row">
                    <div className="col-md-1">

                    </div>
                    <div className="col-12 col-md-3">
                        <h2 className="chooseh2">Women's Vegetarian 24 Week Plan</h2>
                        <p className="mt-3 mb-3">We've filled your plan with our most popular meals.
                            You can edit this below to tailor your menu.</p>
                    </div>
                    <div className="col-md-1">

                    </div>

                    <div className="col-12 col-sm-12 col-md-6 numbersline">
                        <div className="numbers row">
                            <p className="col-1 col-md-1 numberone">1</p>
                            <p className="col-2 col-md-2"></p>
                            <p className="col-1 col-md-1 numberone">2</p>
                            <p className="col-3 col-md-3"></p>
                            <p className="col-1 col-md-1 numbertwo">3</p>
                            <p className="col-3 col-md-3"></p>
                            <p className="col-1 col-md-1 numbertwo">4</p>
                        </div>
                        <div className="line"></div>
                        <div className="row mt-3">
                            <p className="col-3 col-md-3">Choose your plan</p>
                            <p className="col-4 col-md-4">Choose your meals</p>
                            <p className="col-3 col-md-3">Delivery</p>
                            <p className="col-1 col-md-1"></p>
                            <p className="col-1 col-md-1">Payment</p>

                        </div>


                    </div>
                    <div className="row">
                        <p className="col-md-2"></p>
                        <Link to="/breakfast" className="col-12 col-sm-6 col-md-2 "><button className="breakbtn mx-1 "  onClick={() => handleButtonClick('breakfast')}>Breakfast 28/28</button></Link>
                        <Link to="/lunch" className="col-12 col-sm-6 col-md-2 "><button className="breakbtn mx-1 bg-white"  onClick={() => handleButtonClick('lunch')}>Lunch 28/28</button></Link>
                        <Link to="/dinner" className="col-12 col-sm-6 col-md-2 "><button className="breakbtn mx-1"  onClick={() => handleButtonClick('dinner')}>Dinner 28/28</button></Link>
                        <Link to="/snack" className="col-12 col-sm-6 col-md-2 "><button className="breakbtn mx-1"  onClick={() => handleButtonClick('snacks')}>Snacks 28/28</button></Link>
                    </div>
                </div>
            </div>
            <ToastContainer
                  position="top-right"
                  autoClose={5000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                  theme="light"
                />
                {/* Same as */}
                <ToastContainer />

                <form className="container16" onSubmit={onSubmitForm}>
                <div className="row">
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2"  onClick={() => handleButtonClick1('Luxury Mueslli')}>Luxury Mueslli</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal" className="breakfastimage"/>


                        <div class="modal fade" id="imageModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                        <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>This perfect blend of different ingredients really lends itself to a different texture and flavour combination in each spoonful. Wheat flakes, malted wheat flakes, oats and bran sticks perfectly mixed with naturally sweet dates, sultanas and a scattering of dry roasted peanuts for crunch.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">This perfect blend of different ingredients<br/> really lends itself to a different texture and<br/> flavour combination in each spoonful...</p>

                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       <Counter/>


                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Pecan Grnnola')}>Pecan Grnnola</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqxCaKQOfKAjSTwDZgWOBDrrSeTHnzzZH13UJeKp7tVHUIG1cK3bi49DaUc-Ly6uQzT0&usqp=CAU" alt="Image" data-toggle="modal" data-target="#imageModal2" className="breakfastimage"/>
                        
                        <div class="modal fade" id="imageModal2" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>An amazing flavour combination of rolled oats, coconut and pecan nuts, bound with rich black treacle, with the addition of golden linseeds, pumpkin and sunflower seeds... toasted to perfection in the oven for a truly enjoyable breakfast.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">An amazing flavour combination of rolled<br/> oats, coconut and pecan nuts, bound with<br/> rich black treacle, with the addition....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                       



                    </div>
                     <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Original Granola')}>Original Granola</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsTDsBIL5sU_kHM2E9_a6t5yWgYvDKhIvxq_Bj7UcLbowmATLe04yc1yAW8PIRahdHig&usqp=CAU" alt="Image" data-toggle="modal" data-target="#imageModal3" className="breakfastimage"/>
                        
                        <div class="modal fade" id="imageModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>The perfect Granola for adding your own twist and flavours. Jumbo rolled oats, desiccated coconut, with a blend of nuts and seeds bound together with a hint of black treacle, baked in the oven to create a crunchy taste option</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">The perfect Granola for adding your own<br/> twist and flavours. Jumbo rolled oats,<br/> desiccated coconut, with a blend of nuts...</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Banana Porridge')}>Banana Porridge</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal4" className="breakfastimage"/>
                       
                        <div class="modal fade" id="imageModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>This is our favourite porridge flavour combination! Rolled oats lightly flavoured with banana flakes and a hint of vanilla.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">This is our favourite porridge flavour<br/> combination! Rolled oats lightly flavoured<br/> with banana flakes and a hint of vanilla....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Crunchy Bran Muesli')}>Crunchy Bran Muesli</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal5" className="breakfastimage"/>
                       
                        <div class="modal fade" id="imageModal5" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>Another great mix of ingredients of honey oats, malted wheat flakes and bran flakes, with natural sweetness from sultanas and raisins and finished with crunchy hazelnuts.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">Another great mix of ingredients of honey<br/> oats, malted wheat flakes and bran flakes,<br/> with natural sweetness from sultanas and raisins....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Gluten Oats Muesli')}>Gluten Oats Muesli</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNqxCaKQOfKAjSTwDZgWOBDrrSeTHnzzZH13UJeKp7tVHUIG1cK3bi49DaUc-Ly6uQzT0&usqp=CAU" alt="Image" data-toggle="modal" data-target="#imageModal6" className="breakfastimage"/>
                        
                        <div class="modal fade" id="imageModal6" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>Gluten free pure wholegrain oats, blended with natural sweet dates, apricots, sultanas, flame raisins with sunflower seeds and golden linseed.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">Gluten free pure wholegrain oats, blended<br/> with natural sweet dates, apricots, sultanas,<br/> flame raisins with sunflower seeds and....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Gluten Porridge Oats')}>Gluten Porridge Oats</h5>
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStsTDsBIL5sU_kHM2E9_a6t5yWgYvDKhIvxq_Bj7UcLbowmATLe04yc1yAW8PIRahdHig&usqp=CAU" alt="Image" data-toggle="modal" data-target="#imageModal7" className="breakfastimage"/>
                        
                        <div class="modal fade" id="imageModal7" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>Quickly becoming a big hit with our customers. Just simply gluten free flakes, perfect for your addition of your own favourite flavours. Simply add semi skimmed milk and microwave.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">Quickly becoming a big hit with our customers<br/>. Just simply gluten free flakes, perfect for your addition of your own favourite flavours....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Chocolate Porridge')}>Chocolate Porridge</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal8" className="breakfastimage"/>
                       
                        <div class="modal fade" id="imageModal8" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>A filling portion of wholesome oats with the double boost of cocoa and real dark chocolate pieces for a true chocolate indulgence at breakfast-time. Simply mix with milk or water and follow the easy instructions to create this amazingly wicked porridge.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">A filling portion of wholesome oats with the<br/> double boost of cocoa and real dark chocolate<br/> pieces for a true chocolate indulgence at....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Original Porridge Oats')}>Original Porridge Oats</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal9" className="breakfastimage"/>
                    
                        <div class="modal fade" id="imageModal9" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>Simple, wholesome and delicious. Make up with milk or water, heat according to the easy instructions and enjoy, or use as a base to create your own flavour combos.</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">Simple, wholesome and delicious. Make up<br/> with milk or water, heat according to the easy instructions and enjoy, or use as a base to create....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 choosecard">
                        <h5 className="chooseh2" onClick={() => handleButtonClick1('Spiced Sultana Porridge')}>Spiced Sultana Porridge</h5>
                        <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" alt="Image" data-toggle="modal" data-target="#imageModal10" className="breakfastimage"/>
                        
                        <div class="modal fade" id="imageModal10" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-body">
                                    <div className="row">
                                            <div className="col-12 col-md-6">
                                                <img src="https://previews.123rf.com/images/urfingus/urfingus1603/urfingus160300205/53903929-fruit-salad-in-white-bowl-isolated-on-white-background.jpg" width={400}/>

                                            </div>
                                            <div className="col-12 col-md-6 mt-5">
                                                <p>Hearty oats, blended with sultanas and a perfect spice mix of cinnamon, ginger and nutmeg and a pinch for sugar for sweetness..</p>

                                            </div>

                                        </div>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="choosemodalpara">Hearty oats, blended with sultanas and a perfect spice mix of cinnamon, ginger and nutmeg and a pinch for sugar for sweetness....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        <Counter/>
                    </div> 
                    <div className="text-center mt-5 row">
                        <p className="col-md-5"></p>
                        <a href="#backtotop" style={{textDecoration:'none'}}  className="col-12 col-md-3"><p className="breaklastbtn">Back to top <i class="fa-solid fa-arrow-up"></i></p></a>
                    </div>

                </div>
                <Orderbtn/>
            </form>

           <Footer/>
           <div className="p-3"></div>
           
           



        </div>

    )
}

export default Lunch;