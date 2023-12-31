import React from "react";
import { Card, Button } from "react-bootstrap";
const Footer = () => {
  return (
    <>
      <Card>
        <div style={{ display: "flex", height:'80px',alignItems:'center', backgroundColor:'#56CCF2' , color:'white'}}>
          <span style={{marginLeft:'15px', fontSize:'20px'}}>The Gererics</span>
          <div style={{ position: "absolute",right:'20px', gap: "30px", display: "flex" }}>
            <div>
              <i className="fa fa-youtube" aria-hidden="true" style={{fontSize:'36px'}}></i>
            </div>
            <div>
              <i className="fa fa-facebook" aria-hidden="true" style={{fontSize:'36px'}}></i>
            </div>
            <div>
              <i className="fa fa-spotify" aria-hidden="true" style={{fontSize:'36px'}}></i>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default Footer;
