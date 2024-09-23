import React from "react";

const Footer = () => {
   return (
      <div className="footer_section layout_padding">
         <br />
         <div className="container">
            <div className="row">
               <div className="col-lg-3 col-sm-6">
                  <h3 className="adderss_text">Contact Us</h3>
                  {/* <div className="map_icon"><i className="fa-solid fa-location-dot"></i><span className="paddlin_left_0">E-19 Sector 22 ,Noida</span></div> */}
                  <div className="map_icon"><i className="fa-solid fa-phone-volume"></i><span className="paddlin_left_0">+91 9984261451</span></div>
                  <div className="map_icon"><i className="fa-solid fa-envelope"></i><span className="paddlin_left_0">parmaarth52@gmail.com</span></div>
               </div>
               <div className="col-lg-6 col-sm-6">
                
               </div>
               <div className="col-lg-3 col-sm-6">
                  <div className="social_icon">
                     <ul className="social_ul d-flex">
                        <li className="social"><a href="#"><i className="fa-brands fa-facebook"></i></a></li>
                        <li className="social"><a href="#"><i className="fa-brands fa-instagram"></i></a></li>
                        <li className="social"><a href="#"><i className="fa-brands fa-twitter"></i></a></li>
                        <li className="social"><a href="#"><i className="fa-brands fa-linkedin"></i></a></li>
                     </ul>
                  </div>
               </div>
            </div>
           
         </div>
         <hr />
            <div className="copy_right d-flex">
               <p>Copyright © parmaarth.in all rights reserved.</p> ||
               <p>Devloped by Abhishek</p>

            </div>
      </div>
   );
};

export default Footer;
