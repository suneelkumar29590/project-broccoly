import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom'; 
import Home from './home/home';
import Homeone from './home/homeone';
import Hometwo from './home/hometwo';
import Homethree from './home/homethree';
import Homefour from './home/homefour';
import Homefive from './home/homefive';
import Homesix from './home/homesix';
import Homeseven from './home/homeseven';
import Homeeight from './home/homeeight';
import Dietplan from './dietplan/dietplan1/dietplan';
import Vegetarian from './dietplan/dietplan2/vegetarianplan';
import Vegetarianfemale from './dietplan/dietplan2/vegplanfemale';
import Vegetarianbtn2 from './dietplan/dietplan2/vegplanbtn2';
import Vegetarianbtn3 from './dietplan/dietplan2/vegplanbtn3';
import Vegetarianbtn4 from './dietplan/dietplan2/vegplanbtn4';
import Vegetarianbtn5 from './dietplan/dietplan2/vegplanbtn5';
import Vegetarianfemale2 from './dietplan/dietplan2/vegfebtn2';
import Vegetarianfemale3 from './dietplan/dietplan2/vegfebtn3';
import Vegetarianfemale4 from './dietplan/dietplan2/vegfebtn4';
import Vegetarianfemale5 from './dietplan/dietplan2/vegfebtn5';
import Core from './dietplan/dietplan2/coreplan';
import Core2 from './dietplan/dietplan2/coreplanbtn2';
import Core3 from './dietplan/dietplan2/coreplanbtn3';
import Core4 from './dietplan/dietplan2/coreplanbtn4';
import Core5 from './dietplan/dietplan2/coreplanbtn5';
import Corefemale from './dietplan/dietplan2/coreplanfemale';
import Corefemale2 from './dietplan/dietplan2/corefebtn2';
import Corefemale3 from './dietplan/dietplan2/corefebtn3';
import Corefemale4 from './dietplan/dietplan2/corefebtn4';
import Corefemale5 from './dietplan/dietplan2/corefebtn5';
import Breakfast from './dietplan/choosemeal/choosebreakfast';
import Lunch from './dietplan/choosemeal/chooselunch';
import Dinner from './dietplan/choosemeal/choosedinner';
import Snack from './dietplan/choosemeal/choosesnack';
import Success from './successstories/successstory';
import Success1 from './successstories/successsub1';
import Success2 from './successstories/successsub2';
import Success3 from './successstories/successsub3';
import Success4 from './successstories/successsub4';
import Success5 from './successstories/successsub5';
 import Mealbreak from './dietmeals.js/mealbreakfast';
import Mealdinner from './dietmeals.js/mealdinner';
import Meallunch from './dietmeals.js/meallunch';
import Mealsnacks from './dietmeals.js/mealsnack';
import Header from './header/navbar';
import Footer from './footer/footer';
import Howitwork from './howitworks/howitwork';
import AboutBroccoly from './footer/aboutbroccoly';
import Terms from './footer/terms';
import Privacy from './footer/privacy';
import Cookies from './footer/cookies';
import ContactUs from './footer/contactus';
import Security from './footer/security';
import BMI from './footer/faqbmi';
import Genaral from './footer/faqgenaral';
import Delivery from './footer/faqdelivary';
import DeliveryAndRet from './footer/delivery&return';
import Bmicalculator from './bmicalculator/bmicalculator';
import Dietorder from './dietplan/dietplan4/order';
import Header2 from './header2/header2';
import Section4 from './home/section4';
import Orderbtn from './dietplan/choosemeal/orderbtn';
import Paypal from './dietplan/dietplan4/paypal';
import Counter from './dietplan/choosemeal/count';
import Overflow from './dietplan/overflow';




function App() {
  return (
    <div className="App">
     <Routes>
     <Route exact path = "/" element ={<Home />}/>
     <Route exact path = "/banner_sectionman" element ={<Homeone />}/>
     <Route exact path = "/banner_sectionage" element ={<Hometwo/>}/>
     <Route exact path = "/banner_sectionweight" element ={<Homethree/>}/>
     <Route exact path = "/banner_sectionname" element ={<Homefour/>}/>
     <Route exact path = "/banner_sectionsurname" element ={<Homefive/>}/>
     <Route exact path = "/banner_sectionemail" element ={<Homesix/>}/>
     <Route exact path = "/banner_sectionphone" element ={<Homeseven/>}/>
     <Route exact path = "/banner_sectionthankyou" element ={<Homeeight/>}/>
     <Route exact path = "/section4" element ={<Section4/>}/>
     <Route exact path = "/dietplan" element ={<Dietplan/>}/>
     <Route exact path = "/veg" element ={<Vegetarian/>}/>
     <Route exact path = "/vegfemale" element ={<Vegetarianfemale/>}/>
     <Route exact path = "/vegbtn2" element ={<Vegetarianbtn2/>}/>
     <Route exact path = "/vegbtn3" element ={<Vegetarianbtn3/>}/>
     <Route exact path = "/vegbtn4" element ={<Vegetarianbtn4/>}/>
     <Route exact path = "/vegbtn5" element ={<Vegetarianbtn5/>}/>
     <Route exact path = "/vegfebtn2" element ={<Vegetarianfemale2/>}/>
     <Route exact path = "/vegfebtn3" element ={<Vegetarianfemale3/>}/>
     <Route exact path = "/vegfebtn4" element ={<Vegetarianfemale4/>}/>
     <Route exact path = "/vegfebtn5" element ={<Vegetarianfemale5/>}/>
     <Route exact path = "/core" element ={<Core/>}/>
     <Route exact path = "/corebtn2" element ={<Core2/>}/>
     <Route exact path = "/corebtn3" element ={<Core3/>}/>
     <Route exact path = "/corebtn4" element ={<Core4/>}/>
     <Route exact path = "/corebtn5" element ={<Core5/>}/>
     <Route exact path = "/corefemale" element ={<Corefemale/>}/>
     <Route exact path = "/corefebtn2" element ={<Corefemale2/>}/>
     <Route exact path = "/corefebtn3" element ={<Corefemale3/>}/>
     <Route exact path = "/corefebtn4" element ={<Corefemale4/>}/>
     <Route exact path = "/corefebtn5" element ={<Corefemale5/>}/>
     <Route exact path = "/breakfast" element ={<Breakfast/>}/>
     <Route exact path = "/lunch" element ={<Lunch/>}/>
     <Route exact path = "/dinner" element ={<Dinner/>}/>
     <Route exact path = "/snack" element ={<Snack/>}/>
     <Route exact path = "/successstories" element ={<Success/>}/>
     <Route exact path = "/success_2stlost" element ={<Success1/>}/>
     <Route exact path = "/success_2to3lost" element ={<Success2/>}/>
     <Route exact path = "/success_3stlost" element ={<Success3/>}/>
     <Route exact path = "/success_weightlost" element ={<Success4/>}/>
     <Route exact path = "/success_couples" element ={<Success5/>}/>
     <Route exact path = "/mealbreakfast" element ={<Mealbreak/>}/>
      <Route exact path = "/mealdinner" element ={<Mealdinner/>}/>
      <Route exact path = "/meallunch" element ={<Meallunch/>}/>
     <Route exact path = "/mealsnack" element ={<Mealsnacks/>}/>
   
     <Route exact path = "/navbar" element ={<Header/>}/>
     <Route exact path = "/footer" element ={<Footer/>}/>
     <Route exact path = "/howitworks" element ={<Howitwork/>}/>
     <Route exact path = "/about" element ={<AboutBroccoly/>}/>
     <Route exact path = "/terms" element ={<Terms/>}/>
     <Route exact path = "/privacy" element ={<Privacy/>}/>
     <Route exact path = "/cookies" element ={<Cookies/>}/>
     <Route exact path = "/contact" element ={<ContactUs/>}/>
     <Route exact path = "/security" element ={<Security/>}/>
     <Route exact path = "/bmi" element ={<BMI/>}/>
     <Route exact path = "/general" element ={<Genaral/>}/>
     <Route exact path = "/delivery" element ={<Delivery/>}/>
     <Route exact path = "/dandr" element ={<DeliveryAndRet/>}/>
     <Route exact path = "/bmicalculator" element ={<Bmicalculator/>}/>
     <Route exact path = "/order" element ={<Dietorder/>}/>
     <Route exact path = "/navbar2" element ={<Header2/>}/>
     <Route exact path = "/orderbtn" element ={<Orderbtn/>}/>
     <Route exact path = "/paypal" element ={<Paypal/>}/>
     <Route exact path = "/counter" element ={<Counter/>}/>
     <Route exact path = "/overflow" element ={<Overflow/>}/>
    
     
     
     
     </Routes>
    </div>
  );
}

export default App;
