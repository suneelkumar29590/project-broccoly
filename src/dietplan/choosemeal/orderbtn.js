import { Link } from "react-router-dom";

const Orderbtn =()=>{
    return(
        <div>
             <div className="container-fluid chooselastcontainer fixed-bottom">
            <div className="row">
                <div className="col-12 col-md-3">
                    <h2 className="text-end">Subtotal:$349.00</h2>
                </div>
                <div className="col-12 col-md-6">
                    <input type="text" placeholder="Enter discount code" className="chooseinput"/>
                    <button className="chooselastbtn shadow">Applycode</button>
                </div>
                <div className="col-12 col-md-3">
                    <button className="chooselastbtn1">Order this plan</button>
                </div>
            </div>
           </div>


        </div>
    )
}

export default Orderbtn;