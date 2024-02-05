import React from 'react';
import "./dash.css";

export default function Dashboard() {
  return (
    <>
      <div className="padding">
        <div className="col-md-8">
          <div className="card">
            <img className="card-img-top" src="https://i.pinimg.com/originals/9a/68/71/9a68716efc331fcc84e3a4ce5f23d18d.png" alt="Card image cap"/>
            <div className="card-body little-profile text-center">

              <h3 className="m-b-0">Shreya Sharma</h3>
              <p >Gfg rank :1676</p>
              <p>Leetcode rank :60000</p>
               <p>Language : Java</p>
               <p>Connections : 5</p>

              <div className="row text-center m-t-20">
                <div className="col-lg-4 col-md-4 m-t-20">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

