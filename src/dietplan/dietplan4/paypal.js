

// import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Paypal = () => {

//     let navigate = useNavigate();

//     const [show, setshow] = useState(false)
//     const [success, setsuccess] = useState(false)
//     const [errmessage, seterrmessage] = useState('')
//     const [orderid, setorderid] = useState(false)
//     const [showModal, setShowModal] = useState(false);

//     const createOrder = (data, actions) => {
//         return actions.order.create({
//             purchase_units: [
//                 {
//                     description: 'Book',
//                     amount: {
//                         currency_code: 'USD',
//                         value: 20
//                     },
//                 },
//             ],
//             application_context: {
//                 shipping_preference: 'NO_SHIPPING'
//             }
//         })
//             .then((orderid) => {
//                 setorderid(orderid)
//                 return orderid
//             })

//     }
//     const onApprove = (data, actions) => {
//         return actions.order.capture().then(function (details) {
//             const { payer } = details
//             setsuccess(true)
//             toast.success("Payment successful! Thank you for your purchase.", {
//                 position: "top-right",
//                 autoClose: 5000,
//                 hideProgressBar: false,
//                 closeOnClick: true,
//                 pauseOnHover: true,
//                 draggable: true,
//                 progress: undefined,
//                 theme: "colored",
//             });

//             setTimeout(function () {
//                 setShowModal(false);
//                 navigate('/order')
//             }, 3000)
//         })

//     }

//     const onError = (data, actions) => {
//         seterrmessage("an error occured with your payment")
//         toast.error('An error occurred with your payment');
//         setTimeout(() => {
//             setShowModal(false);
//         }, 3000);
//     }

  
    

//     return (
//         <div>
//             {/* <div className="container-fluid chooselastcontainer fixed-bottom">
//                 <div className="row">
//                     <div className="col-12 col-md-3">
//                         <h2 className="text-end">Subtotal:$349.00</h2>
//                     </div>
//                     <div className="col-12 col-md-6">
//                         <input type="text" placeholder="Enter discount code" className="chooseinput" />
//                         <button className="chooselastbtn shadow">Applycode</button>
//                     </div>
//                     <div className="col-12 col-md-3">
                        
//                         <PayPalScriptProvider
//                             options={{
//                                 'client-id': 'AYDGDvRnto2z6n1UTRoBbWNsDAc40Z2dQxjDIAb_p6m0TEJ4cU47glHiAmcuFQHF74Wm01sHDHRy1qDd',
//                             }}
//                         >
//                             <button type='button' onClick={() => setshow(true)} className='chooselastbtn1' data-toggle="modal" data-target="#imageModal20">
//                                 Order this plan
//                             </button>

//                             <div class="modal fade" id="imageModal20" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div class="modal-dialog modal-lg" role="document">
//                                     <div class="modal-content">
//                                         <div class="modal-body">
//                                             <div className="row">
//                                                 <div className="col-12 col-md-6">
//                                                     {show ? (
//                                                         <PayPalButtons style={{ layout: 'vertical' }} createOrder={createOrder} onApprove={onApprove} onError={onError} />
//                                                     ) : null}

//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div class="modal-footer">
//                                             <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </PayPalScriptProvider>
//                         <ToastContainer />
//                     </div>
//                 </div>
//             </div>  */}

// <div>
//             <div className="container-fluid chooselastcontainer fixed-bottom">
//                 <div className="row">
//                     <div className="col-12 col-md-3">
//                         <h2 className="text-end">Subtotal:$349.00</h2>
//                     </div>
//                     <div className="col-12 col-md-6">
//                         <input type="text" placeholder="Enter discount code" className="chooseinput" />
//                         <button className="chooselastbtn shadow">Apply code</button>
//                     </div>
//                     <div className="col-12 col-md-3">
//                         <button
//                             type='button'
//                             onClick={() => setShowModal(true)}
//                             className='chooselastbtn1'
                            
//                         >
//                             Order this plan
//                         </button>

//                         {/* Modal */}
//                         {showModal && (
//                             <div className="modal fade" id="imageModal20" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                                 <div className="modal-dialog modal-lg" role="document">
//                                     <div className="modal-content">
//                                         <div className="modal-body">
//                                             <div className="row">
//                                                 <div className="col-12 col-md-6">
//                                                     <PayPalScriptProvider
//                                                         options={{
//                                                             'client-id': 'AYDGDvRnto2z6n1UTRoBbWNsDAc40Z2dQxjDIAb_p6m0TEJ4cU47glHiAmcuFQHF74Wm01sHDHRy1qDd',
//                                                         }}
//                                                     >
//                                                         <PayPalButtons
//                                                             style={{ layout: 'vertical' }}
//                                                             createOrder={createOrder}
//                                                             onApprove={onApprove}
//                                                             onError={onError}
//                                                         />
//                                                     </PayPalScriptProvider>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                         <div className="modal-footer">
//                                             <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}

//                         <ToastContainer />
//                     </div>
//                 </div>
//             </div>
//         </div>

//         </div>
//     )
// }

// export default Paypal;


import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Paypal = () => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const [success, setSuccess] = useState(false);

    const createOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    description: 'Book',
                    amount: {
                        currency_code: 'USD',
                        value: 20
                    },
                },
            ],
            application_context: {
                shipping_preference: 'NO_SHIPPING'
            }
        })
        .then((orderId) => orderId);
    };

    const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
            const { payer } = details;
            setSuccess(true);
            toast.success("Payment successful! Thank you for your purchase.", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });

            // Close the modal and navigate after 3 seconds
            setTimeout(() => {
                setShowModal(false);
                navigate('/order');
            }, 3000);
        });
    }

    const onError = (data, actions) => {
        toast.error('An error occurred with your payment');

        // Close the modal after 3 seconds
        setTimeout(() => {
            setShowModal(false);
        }, 3000);
    }

    return (
        <div>
            <div className="container-fluid chooselastcontainer fixed-bottom">
                <div className="row">
                    <div className="col-12 col-md-3">
                        <h2 className="text-end">Subtotal:$349.00</h2>
                    </div>
                    <div className="col-12 col-md-6">
                        <input type="text" placeholder="Enter discount code" className="chooseinput" />
                        <button className="chooselastbtn shadow">Apply code</button>
                    </div>
                    <div className="col-12 col-md-3">
                        <button
                            type='button'
                            onClick={() => setShowModal(true)}
                            className='chooselastbtn1'
                        >
                            Order this plan
                        </button>

                        {/* Modal */}
                        <div className={`modal fade ${showModal ? 'show' : ''}`} id="imageModal20" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ display: showModal ? 'block' : 'none' }}>
                            <div className="modal-dialog modal-lg" role="document">
                                <div className="modal-content">
                                    <div className="modal-body w-50" style={{marginLeft:'200px'}}>
                                        
                                            
                                                <PayPalScriptProvider
                                                    options={{
                                                        'client-id': 'AYDGDvRnto2z6n1UTRoBbWNsDAc40Z2dQxjDIAb_p6m0TEJ4cU47glHiAmcuFQHF74Wm01sHDHRy1qDd',
                                                    }}
                                            
                                                >
                                                    <PayPalButtons
                                                        style={{ layout: 'vertical'}}
                                                        createOrder={createOrder}
                                                        onApprove={onApprove}
                                                        onError={onError}
                                                    />
                                                </PayPalScriptProvider>
                                           
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Paypal;
