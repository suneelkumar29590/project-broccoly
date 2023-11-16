import { Link } from 'react-router-dom';
import './footer.css'

const Footer=()=>{
    return(
        <div>
             <div className="container6">
                <div className="row mt-5">
                    <div className="col-12 col-md-3"></div>
                    <div className="col-12 col-md-8">
                        <nav class="navbar navbar-expand-sm navbar-dark">
                            <div class="container-fluid">
                                <h5>Sign up to receive diet tips and exclusive offers</h5>
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mynavbar">
                                    <span class="navbar-toggler-icon"></span>
                                </button>
                                <div class="collapse navbar-collapse" id="mynavbar">

                                    <form class="d-flex flex-row">
                                        <input class="form-control footerinput w-100" type="text" placeholder="Enter your email address" />
                                        <button class="footerbtn" type="button">Submit</button>
                                    </form>
                                </div>
                            </div>
                        </nav>

                    </div>
                </div>
                <hr />
                <div className="row mt-5 mb-5">
                    <div className="col-12 col-md-1"></div>

                    <div className="col-12 col-sm-6 col-md-3">
                        <img src="https://img.freepik.com/premium-vector/broccoli-logo-design-green-vegetable-vector-broccoli-wallpaper-vegetable-supermarket-illustration-garden-product-brand_638875-736.jpg" alt="Left Image" width="200" />
                    </div>
                    <div className='col-12 col-sm-6 col-md-8 row'>
                    <div className="col-12 col-md-3">
                        <h6>Customer Service</h6>
                        <Link to="/contact" className='footernav'><p>Contact us</p></Link>
                        <p>My Account</p>
                        <p>Track an Order</p>

                    </div>
                    <div className="col-12 col-md-3">
                        <h6>About Us</h6>
                        <Link to="/about" className='footernav'><p>About Broccoly</p></Link>
                        <Link to="/terms" className='footernav'><p>Terms & Conditions</p></Link>
                        <Link to="/privacy" className='footernav'><p>Privacy Policy</p></Link>
                        <Link to="/cookies" className='footernav'><p>Cookie Policy</p></Link>

                    </div>
                    <div className="col-12 col-md-3">
                        <h6>Here to help</h6>
                        <Link to="/dandr" className='footernav'><p>Delivery & Returns</p></Link>
                        <Link to="/bmi" className='footernav'><p>FAQs</p></Link>
                        <Link to="/security" className='footernav'><p>Security</p></Link>

                    </div>
                    <div className="col-12 col-md-3">
                        <h6>Social</h6>
                        <i class="fa-brands fa-facebook m-2 text-danger"></i>
                        <i class="fa-brands fa-instagram m-2 text-warning"></i>
                        <i class="fa-brands fa-google m-2 text-success"></i>
                        <i class="fa-brands fa-youtube m-2 text-primary"></i>
                        <i class="fa-brands fa-twitter m-2 text-dark"></i>


                    </div>

                    </div>
                   

                </div>
            </div>

        </div>
    )
}

export default Footer;