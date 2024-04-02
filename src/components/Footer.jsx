import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <div className="App">


      <footer>
        <div className="foot-panel1">
          Back to Top
        </div>

        <div className="foot-panel2">
          <ul>
            <p class>Get to Know Us </p>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">About Apna Grocery app</a></li>
            <li><a href="#">Investor Relations</a></li>
          </ul>

          <ul>
            <li><p>Connect with Us</p></li>
            <a href="https://www.facebook.com/govindjha.govind.52"><span class="fa fa-facebook"></span>Facebook</a> <br/>
              
            <a href="https://www.linkedin.com/in/govind-jha-b88562245"><span class="fa fa-linkedin"></span>Linkd.</a> <br />
              
            <a href="https://www.instagram.com/govindjha.52"><span class="fa fa-instagram"></span>Instagram.</a> <br />
            <a href="https://github.com/Govindjha52"><span class=" fa fa-github"></span>Github.</a> <br />
          </ul>

          <ul>
            <li><p> Make Money with Us</p></li>
            <li><a href="#">Sell under our Accelerator</a></li>
            <li><a href="#">Protect and Build Your Brand</a></li>
            <li><a href="#">Grocery Selling</a></li>
            <li><a href="#">Become an Affiliate</a></li>
            <li><a href="#">Advertise Your Products</a></li>
            <li><a href="#">Sell on Apna Grocery</a></li>
          </ul>

          <ul>
            <li><p>Let Us Help You</p></li>
            <li><a href="#">Your Account</a></li>
            <li><a href="#">Returns Centre</a></li>
            <li><a href="#">100% Purchase Protection</a></li>
            <li><a href="#">Apna Grocery App Download</a></li>
            <li><a href="#">Help</a></li>
          </ul>
        </div>


        <div className="foot-panel3">
        <div className="contact-info">
            <p>Contact Us: +91 9508779910</p>
            <a href="mailto:apnagroceryapp@gmail.com">Email Us: apnagroceryapp@gmail.com</a>
            {/* Additional content */}
            <p>Visit us at:</p>
            <address>
              123 Example Street<br />
              City, State, ZIP<br />
              Country
            </address>
          </div>
        </div>


        <div className="foot-panel4">
          <div className="pages">
            <a href="#">Condition of Use & sale</a>
            <span><a href="#">Privacy Notice</a></span>
            <a href="#">Interest-Based Ads</a>
          </div>
          <div className="copyright">
            &copy;2024. Apna Grocery.com, Inc. or its affiliates.
          </div>
        </div>
      </footer>




    </div>
  );
}

export default Footer;
