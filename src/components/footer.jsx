import React from "react";

function Footer(){
    return(
        <footer className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <img src="images/logo.png" alt="logo" className="foot-img" />
          <p>
          <i class="fa-brands fa-twitter font"></i>
          <i class="fa-brands fa-facebook font"></i>
          <i class="fa-brands fa-instagram font"></i>
          </p>
          <p class="d-flex" role="search">Copywright 2020 Bella Onojie.com</p>
        </div>
        </footer>
    );
}

export default Footer;


