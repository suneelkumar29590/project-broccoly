
import './order.css';
import { useState,useEffect } from 'react'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Header from '../../header/navbar';
import Footer from '../../footer/footer';

const Order = () => {

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



    const [gender, setgender] = useState('Mr.')
    const [firstName, setfirstName] = useState();
    const [SurName, setSurName] = useState();
    const [email, setemail] = useState();
    const [password, setpassword] = useState();

    const [Email, setemail1] = useState();
    const [Password, setpassword1] = useState();

    const Data = {
        gender: gender,
        FirstName: firstName,
        SurName: SurName,
        email: email,
        password: password
    }
    const Logindata = {
        email: Email,
        password: Password
    }

    const onsubmitform = (e) => {
        e.preventDefault();
        if (gender && firstName && SurName && email && password != '') {
            axios.post('http://localhost:3001/Register', Data)
                .then(response => {
                    //setData(response.data)
                    console.log("response:", response)
                    // if (response.status === 200) {
                    let jwtToken = response.data.token
                    if (jwtToken) {
                        console.log("reponse:", response)

                        localStorage.setItem('token', jwtToken)
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
              
                    }
                    else {
                        toast.warning(response.data, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",

                        });
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
                });
        }
        else {
            toast.warning('Please Enter Required Details', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }

    }
    const Loginsubmit = (e) => {
        e.preventDefault();
        if (Email && Password !== '') {
            axios.post('http://localhost:3001/Login', Logindata)
                .then(response => {
                    let normaltoken = response.data.token;
                    if (normaltoken) {
                        let jwtToken1 = response.data.token
                        console.log("response:", response)
                        localStorage.setItem("token", jwtToken1)
                        console.log("token", jwtToken1)
                        toast.success("login success", {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });

                        //   setTimeout(function () {
                        //     navigate('/RHome')
                        //   }, 3000)

                    } else {
                        toast.warning(response.data, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "colored",
                        });
                    }
                })
                .catch(error => {
                    console.log(error.response.data);
                    //window.alert(error.response.data)
                    toast.warning("Invalid username and password", {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                })
        }
        else {
            toast.warning('Please Enter Required Details', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

        }
       
    }


    return (
      <div style={{ overflowX: isOverflowHidden ? 'hidden' : 'auto' }}>
        <Header/>
 <div className='container-fluid ordercontainer'>
            
            
            <div className='row'>
              <div className='col-md-1'></div>
                <div className='col-12 col-md-5 '>
                <h3 style={{color:"silver"}} className='col-12 orderh3'>Welcome to Diet Chef</h3>
                    <div className='My-account-cards shadow'>
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
                theme="colored"
            />
                        <form className='' onSubmit={onsubmitform}>
                            <h4 className="customer-heading p-3">New to Diet Chef?</h4>
                            <div class="mb-3 ">
                                <div class="row">
                                    <div class="col-lg-2">
                                        <label htmlFor="name" class="form-label">Name:</label>
                                    </div>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <select class="form-select" onChange={(e) => setgender(e.target.value)} value={gender}>
                                            <option>Mr</option>
                                            <option>Ms</option>
                                            <option>Mrs</option>
                                        </select>
                                    </div>

                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <input type="text" class="form-control" id="firstName" placeholder="First Name" name="firstName" onChange={(e) => setfirstName(e.target.value)} value={firstName} />
                                    </div>
                                    <div class="col-lg-3 col-md-3 col-sm-12">
                                        <input type="text" class="form-control" id="lastName" placeholder="Last Name" name="lastName" onChange={(e) => setSurName(e.target.value)} value={SurName} />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-3">
                                <div className="row">
                                    <div class='col-lg-2 col-md-2 col-sm-12'>
                                        <label htmlFor="email" className="form-label">Email:</label>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" onChange={(e) => setemail(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div class='row'>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <label htmlFor="pwd" className="form-label">Choose a Password:</label>

                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter your password" name="password" onChange={(e) => setpassword(e.target.value)} />
                                    </div>
                                    
                                </div>
                                <div className="text-end orderbtn11">
                                        <button type="submit" className="orderbtn">Continue</button>
                                    </div>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="col-12 col-md-5  ">
                    <div className='My-account-cards mt-5 shadow'>
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
                theme="colored"
            />
                        <form className='' onSubmit={Loginsubmit}>
                            <h4 className="customer-heading p-3">Existing Customer?</h4>


                            <div className="mb-3">
                                <div className="row">
                                    <div class='col-lg-2 col-md-2 col-sm-12'>
                                        <label htmlFor="email" className="form-label">Email:</label>
                                    </div>
                                    <div class="col-lg-6  col-md-2 col-sm-12">
                                        <input type="email" className="form-control" id="email" placeholder="Enter your email" name="email" onChange={(e) => setemail1(e.target.value)} value={Email} />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <div class='row'>
                                    <div class="col-lg-2 col-md-2 col-sm-12">
                                        <label htmlFor="pwd" className="form-label">Password:</label>

                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-12">
                                        <input type="password" className="form-control" id="pwd" placeholder="Enter your password" name="password" onChange={(e) => setpassword1(e.target.value)} value={Password} />
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <div className='text-end'>
                                            <p className='forgot-btn' >Forgotten password?</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='text-end orderbtn11'>
                                <button type="submit" className="orderbtn1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
      </div>
       
    );
}

export default Order;
