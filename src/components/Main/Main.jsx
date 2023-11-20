import React, { useState } from "react";
import ConnectForm from "../form/form";
import ConnectFormEasyEcom from "../form/easyEcomForm";
import './Main.css'

export const Main = () => {
  const [isFormOpen, setFormOpen] = useState(false);
  const [isFormEasyEcom, setFormEasyEcom] = useState(false);
  const [zohoStatus, setZohoStatus] = useState("InActive");
  const [easyEcomStatus, setEasyEcomStatus] = useState("InActive");

  const openForm = () => {
    setFormOpen(true);
  };

  const closeForm = () => {
    setFormOpen(false);
  };

  const openForm1 = () => {
    setFormEasyEcom(true);
  };

  const closeForm1 = () => {
    setFormEasyEcom(false);
  };

  const connect = (selectedOrganization) => {
    console.log(selectedOrganization);
    setZohoStatus("Active");
  };

  const connectData = (values) => {
    console.log(values);
    if(values){
      setEasyEcomStatus("Active");
    }else{
      setEasyEcomStatus("InActive");
    }
    
  };

  return (
    <div style={{ marginTop: "30px" }}>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="../src/assets/image.png"
              class="img-fluid rounded-start"
              alt="..."
              style={{ width: "200px", marginLeft: "20px", marginTop: "30px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-row justify-content-between des">
            <div className="card-body ">
              <p className="card-text" style={{ fontSize: "18px" }}>
                Zoho Books is online accounting software that manages your
                finances, automates business workflows
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button
              className="btn btn-success lg:mt-0 lg:ml-auto mt-4 res"
              onClick={openForm}
              style={{
                height: "40px",
                fontFamily: "sans-serif",
                position: "relative",
                left: "150px",
                top: "17px",
              }}
            >
              {zohoStatus === 'Active' ? 'RECONNECT' : 'CONNECT'}
            </button>
            <button className="zohostatus" style={{ marginLeft: "10px", height:'30px', background:`${zohoStatus==='Active' ? 'green': 'red'}`,color:`${zohoStatus==='Active' ? 'white': 'black'}`, border:`2px solid ${zohoStatus==='Active' ? 'green': 'red'}` }}>{zohoStatus}</button>
            {isFormOpen && (
              <ConnectForm
                show={isFormOpen}
                onClose={closeForm}
                onConnect={connect}
              />
            )}
          </div>
        </div>
      </div>
      <div className="card mb-3" style={{ maxWidth: "100%" }}>
        <div className="row g-0">
          <div className="col-md-3">
            <img
              src="../src/assets/image2.png"
              class="img-fluid rounded-start"
              alt="..."
              style={{ width: "250px", marginTop: "30px", marginLeft: "20px" }}
            />
          </div>
          <div className="col-md-8 d-flex flex-row justify-content-between des">
            <div className="card-body">
              <p className="card-text" style={{ fontSize: "18px" }}>
                EasyEcom is an eCommerce operating system offering a unified
                dashboard that lets you handle everything in eCommerce
              </p>
              <p className="card-text">
                <small className="text-muted">Last updated 3 mins ago</small>
              </p>
            </div>
            <button
              className="btn btn-success lg:mt-0 lg:ml-auto mt-5 lg:ml-20 res"
              onClick={openForm1}
              style={{
                height: "40px",
                fontFamily: "sans-serif",
                position: "relative",
                left: "150px",
                bottom:'5px'
              }}
            >
              {easyEcomStatus === 'Active' ? 'RECONNECT' : 'CONNECT'}
            </button>
            <button className="easyecom-status" style={{ marginLeft: "10px",height:'30px', background:`${easyEcomStatus==='Active' ? 'green': 'red'}`,color:`${zohoStatus==='Active' ? 'white': 'black'}`, border:`2px solid ${zohoStatus==='Active' ? 'green': 'red'}` }}>{easyEcomStatus}</button>
            {isFormEasyEcom && (
              <ConnectFormEasyEcom
                show={isFormEasyEcom}
                onClose={closeForm1}
                onConnect={connectData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
