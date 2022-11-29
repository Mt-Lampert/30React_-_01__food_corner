import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import "./Footer.scss";

function Footer(props) {
  // const iconSize = '3rem'
  return (
    <footer className="footer" data-testid="footer-container">
      <div className="social-media content" data-testid="socialMedia-container">
        <p className="has-text-centered">
          <TwitterIcon></TwitterIcon>
          <InstagramIcon></InstagramIcon>
          <FacebookIcon></FacebookIcon>
          <LinkedInIcon></LinkedInIcon>
        </p>
      </div>
      <div className="copyright container" data-testid="copyright-container">
        <p className="has-text-light has-text-centered">&copy; Food Corner 2020. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
