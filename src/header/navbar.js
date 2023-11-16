// import './navbar.css'
// import { Link } from 'react-router-dom';

// const Header = () => {
//     return (
//         <div>

//             {/* <div class="container">
//                 <div className='row'>
//                 <div class="left-side col-12 col-md-2">
                    
//                 </div>
//                 <div class="center-content col-12 col-md-8 mt-5">
//                     <div class="center-mobile-number">
//                         <p>Call for a quote: 0123456789</p>
//                     </div>
//                     <div class="center-menu">
//                         <ul className='row'>
//                             <Link to="/dietplan"><li><a href="#">Diet Plans</a></li></Link>
//                             <Link to="/mealb"><li><a href="#">Diet Meals</a></li></Link>
//                             <Link to="/how"><li><a href="#">How it Works</a></li></Link>
//                             <Link to="/success"><li><a href="#">Success Stories</a></li></Link>
//                             <Link to="/bmical"><li><a href="#">BMI Calculator</a></li></Link>
//                         </ul>
//                     </div>
//                 </div>
//                 <div class="right-icons col-12 col-md-2">
//                     <div class="icon d-flex flex-column text-center mt-4">
//                         <i class="fa-solid fa-user"></i>
//                         <p>My Account</p>
//                     </div>
//                     <div class="icon2 mt-4">

//                     </div>
//                     <div class="icon1 d-flex flex-column mt-4">
//                         <i class="fa-solid fa-basket-shopping backeticon"></i>
//                         <p>Basket (0)</p>
//                     </div>
//                 </div>

//                 </div>
              
//             </div> */}

// <nav class="navbar navbar-expand-lg navbar-dark header shadow">
//     <div class="container-fluid">
//         <img src="https://img.freepik.com/premium-vector/broccoli-logo-design-green-vegetable-vector-broccoli-wallpaper-vegetable-supermarket-illustration-garden-product-brand_638875-736.jpg" alt="Left Image" width="100" />

//         <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
//             <span class="navbar-toggler-icon bg-dark"></span>
//         </button>

//         <div class="d-flex flex-column align-items-center ml-auto" >
//             <div class="center-mobile-number">
//                 <p className='nbr'><span className='calquote'>Call for a quote:</span> 0123456789</p>
//             </div>

//             <div class="collapse navbar-collapse" id="collapsibleNavbar">
//                 <ul class="navbar-nav">
//                     <li class="nav-item">
//                         <a class="nav-link text-dark listitems" href="/dietplan">Diet Plans</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link text-dark listitems" href="/mealb">Diet Meals</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link text-dark listitems" href="/how">How it Works</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link text-dark listitems" href="/success">Success Stories</a>
//                     </li>
//                     <li class="nav-item">
//                         <a class="nav-link text-dark listitems" href="/bmical">BMI Calculator</a>
//                     </li>
//                 </ul>
//             </div>
//         </div>

//         <div class="d-flex flex-row ml-auto mainicon">
//             <div class="icon d-flex flex-column text-center">
//                 <i class="fa-solid fa-user originalicon"></i>
//                 <p>My Account</p>
//             </div>
//             <div class="icon2">

//                     </div>
//             <div class="icon1 d-flex flex-column ">
//                 <i class="fa-solid fa-basket-shopping originalicon"></i>
//                 <p>Basket (0)</p>
//             </div>
//         </div>
//     </div>
// </nav>



//         </div>
//     )
// }
// export default Header;



import { Link } from "react-router-dom";

import './navbar.css';

const Header = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark header shadow fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">
                        <img
                            src="https://img.freepik.com/premium-vector/broccoli-logo-design-green-vegetable-vector-broccoli-wallpaper-vegetable-supermarket-illustration-garden-product-brand_638875-736.jpg"
                            alt="Left Image"
                            width="100"
                        />
                    </Link>

                    <div className="d-flex flex-column align-items-center ml-auto">
                        <div className="center-mobile-number">
                            <p className="">
                                <span className="calquote">Call for a quote:</span> 0123456789
                            </p>
                        </div>

                        <button
                            style={{ color: 'white', backgroundColor: 'black' }}
                            className="navbar-toggler mt-3 mb-3"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavbar"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavbar">
                            <div className="d-flex flex-column align-items-center">
                                <ul className="navbar-nav mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link to="/dietplan" className="nav-link text-dark listitems">
                                            Diet Plans
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/mealbreakfast" className="nav-link text-dark listitems">
                                            Diet Meals
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/howitworks" className="nav-link text-dark listitems">
                                            How it Works
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/successstories" className="nav-link text-dark listitems">
                                            Success Stories
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/bmicalculator" className="nav-link text-dark listitems">
                                            BMI Calculator
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="d-flex flex-row mainicon ml-auto">
                        <div className="icon d-flex flex-column text-center">
                        <i class="fa-solid fa-user originalicon"></i>
                            <p className='listitems'>My Account</p>
                        </div>
                        <div className="icon1 d-flex flex-column">
                        <i class="fa-solid fa-basket-shopping originalicon"></i>
                            <p className='listitems'>Basket (0)</p>
                        </div>
                    </div>
                </div>
            </nav>
            
        </div>
    );
};

export default Header;

