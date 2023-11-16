



import { Link } from "react-router-dom";
import './mealbreak.css'
import Footer from "../footer/footer";
import Header from "../header/navbar";
import Header2 from "../header2/header2";
import { useEffect, useState } from 'react';

const Meallunch = () => {
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
      <Header2/>
      <div class="banner">
        <div class="left-side">

          <h1>Dieting never tasted so good</h1>
          <p className="mt-5">With Diet Chef, you can still enjoy the food you love. We teach you about portion control, key to maintaining a healthy weight. Our chef-prepared meals are calorie counted and portion controlled. With over 55 nutritionally balanced diet meals to choose from, you can create your own menu to include only the foods you love.</p>
          <p className="mt-5 mb-3">Perfectly portioned, full of flavour and ready in minutes, you'll always have a delicious and nutritious meal to hand. No chopping, no cooking, no prepping meals. You just need to heat and eat!</p>
          <a href="#mealspage"><button className="dietbreakbutton w-50">view Meals <i class="fa-solid fa-arrow-down"></i></button></a>
        </div>

      </div>

      <div className="container41 mt-5">
      <div className="row">
                <p className="col-12 col-md-2"></p>
                <div className="col-12 col-sm-6  col-md-2 text-center">
                  <Link to="/mealbreakfast"><button className="dietmealbreakbtn1">Breakfast</button></Link>
                </div>
                <div className="col-12 col-sm-6  col-md-2 text-center">
                <Link to="/meallunch"><button className="dietmealbreakbtn">Lunch</button></Link>
                </div>
                <div className="col-12 col-sm-6  col-md-2 text-center">
                <Link to="/mealdinner"><button className="dietmealbreakbtn1">Dinner</button></Link>
                </div>
                <div className="col-12 col-sm-6  col-md-2 text-center">
                <Link to="/mealsnack"><button className="dietmealbreakbtn1">Snacks</button></Link>
                </div>

              </div>

      </div>
      <div className="container42">
        <div className="row">
          <div className="col-12 col-md-6">
            <h2 className="dietbreakh2">Lunch</h2>
            <p className="mt-3">Our satisfying lunches keep those hunger pangs at bay. Choose from our range of convenient soups or pasta pots – ready in minutes. Need something instant? Try our milkshakes or protein bars as a filling meal when you’re out and about.</p>
          </div>
          <div className="col-md-3"></div>
          <div className="col-12 col-md-3 mt-5">
          <Link to="/dietplan"><button className="dietbreakgetbtn">View our meal plans  <i class="fa-solid fa-arrow-right"></i></button></Link>

          </div>
        </div>
        <div className="row mt-5" id="mealspage">
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Luxury Mueslli</h5>
                        <p>This perfect blend of different ingredients really lends itself to a different texture and flavour combination in each spoonful...</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Pecan Grnnola</h5>
                        <p>An amazing flavour combination of rolled oats, coconut and pecan nuts, bound with rich black treacle, with the addition....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       



                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Original Granola</h5>
                        <p>The perfect Granola for adding your own twist and flavours. Jumbo rolled oats, desiccated coconut, with a blend of nuts...</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                       
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
                        <h5 className="dietbreakh2">Banana Porridge</h5>
                        <p>This is our favourite porridge flavour combination! Rolled oats lightly flavoured with banana flakes and a hint of vanilla....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                       
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
                        <h5 className="dietbreakh2">Crunchy Bran Muesli</h5>
                        <p>Another great mix of ingredients of honey oats, malted wheat flakes and bran flakes, with natural sweetness from sultanas and raisins and....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Gluten Oats Muesli</h5>
                        <p>Gluten free pure wholegrain oats, blended with natural sweet dates, apricots, sultanas, flame raisins with sunflower seeds and golden linseed....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Gluten Porridge Oats</h5>
                        <p>Quickly becoming a big hit with our customers. Just simply gluten free flakes, perfect for your addition of your own favourite flavours....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                       
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
                        <h5 className="dietbreakh2">Chocolate Porridge</h5>
                        <p>A filling portion of wholesome oats with the double boost of cocoa and real dark chocolate pieces for a true chocolate indulgence at breakfast-time. Simply ....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Original Porridge Oats</h5>
                        <p>Simple, wholesome and delicious. Make up with milk or water, heat according to the easy instructions and enjoy, or use as a base to create your own flavour combos....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       
                    </div>
                    <div className="col-12 col-sm-6 col-md-3 mt-5 dietmealcard">
                        
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
                        <h5 className="dietbreakh2">Spiced Porridge</h5>
                        <p>Hearty oats, blended with sultanas and a perfect spice mix of cinnamon, ginger and nutmeg and a pinch for sugar for sweetness of good....</p>
                        <div className="row letterdiv">
                            <div class="circle">
                                <div class="letter">V</div>
                            </div>
                            <div class="circle1">
                                <div class="letter1">N</div>
                            </div>
                        </div>
                       
                    </div>
                   

                </div>

      </div>
      <Footer />



    </div>
  )
}
export default Meallunch;
