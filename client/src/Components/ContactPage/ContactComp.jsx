import React from "react";
import "./ContactComp.css";

const ContactComp = () => {
  return (
    <div className="container my-4">
      <div className="con">
        <div className="card">
          <div className="card-header text-center" id="card-header">
            <h1>Add Delivery Address</h1>
          </div>
          <div className="card-body">
            <form>
              <div className="form-group">
                <label htmlFor="FullName">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="FullName"
                  placeholder="Enter your full name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="MobileNumber">Mobile Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="MobileNumber"
                  placeholder="Enter your mobile number"
                />
              </div>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="PinCode">Pincode</label>
                  <input
                    type="text"
                    className="form-control"
                    id="PinCode"
                    placeholder="Enter your pincode"
                  />
                </div>
                <div className="form-group col-md-6">
                  <label htmlFor="addressType">Address Type</label>
                  <select className="form-control" id="addressType">
                    <option>Home</option>
                    <option>Work</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  placeholder="Enter your address"
                />
              </div>
              <div className="form-group">
                <label htmlFor="locality">Locality</label>
                <input
                  type="text"
                  className="form-control"
                  id="locality"
                  placeholder="Enter your locality"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  placeholder="Enter your city"
                />
              </div>
              <div className="form-group">
                <label htmlFor="state">State</label>
                <input
                  type="text"
                  className="form-control"
                  id="state"
                  placeholder="Enter your state"
                />
              </div>
              <div className="form-group">
                <label htmlFor="landmark">Landmark (Optional)</label>
                <input
                  type="text"
                  className="form-control"
                  id="landmark"
                  placeholder="Enter a landmark (optional)"
                />
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="saveAddress"
                />
                <label className="form-check-label" htmlFor="saveAddress">
                  Save Address
                </label>
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-block"
                id="butn"
              >
                Save and Continue
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactComp;