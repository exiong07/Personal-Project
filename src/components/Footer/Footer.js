import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h1>Fish Spotter</h1>
            <ui className="list-unstyled">
              <li>Home</li>
              <li>Products</li>
            </ui>
          </div>
          {/* Column2 */}
          <div className="col">
            <h1>CONTACT US</h1>
            <ui className="list-unstyled">
              <li>Help/Support</li>
              <li>About</li>
              <li>Team</li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4>Spot fish with Fish Spotter®</h4>
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Fish Spotter | All rights reserved
            | Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
