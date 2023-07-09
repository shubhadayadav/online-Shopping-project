import React from "react";
import './Footer.css';
 


const Footer=()=>{
    return(
    <>
      
<div className="container-fluid footer-style mb-3 ">
     <footer className="py-5">
      <div className="row  ">
       <div className="col-6 col-md-2 mb-3">
       <h4 class="stext-201 fs-4  cl0 p-b-30 text-uppercase mb-3">Categories</h4>
        <ul className="nav flex-column text-secondary">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7 ">Women</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">Men</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">Shoes</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">Watches</a></li>
        </ul>
      </div>

      

      <div className="col-6 col-md-2 mb-3 section-style">
      <h4 className="stext-301 fs-4 cl0 p-b-30 text-uppercase mb-3">Help</h4>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7 ">Track Order</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">Returns</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">Shipping</a></li>
          <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-secondary fs-7">FAQs</a></li>
         </ul>
      </div>
  
      <div className="col-6 col-md-2 mb-3 p-b-80 getTouch-style ">
					<h4 className="stext-301 fs-4 cl0 mb-3 p-b-30">
						GET IN TOUCH
					</h4>

					<p className="stext-107 cl7 size-195 text-secondary ">
						Any questions? Let us know in store at Lorem ipsum dolor sit amet consectetur Or  call us on (+1) 96 716 6879
					</p>
    
                     {/* social-media icons */}
                  
                   <div className="p-t-27  d-flex  " >
						<a href="https://www.facebook.com" target="_blank"  >
                        <i className="bi bi-facebook "></i>
						</a>

						<a href="https://www.instagram.com" target="_blank"  >
                        <i className="bi bi-instagram "></i>
						</a>

						<a href="https://www.twitter.com" target="_blank"   >
                        <i className="bi bi-twitter"></i>
						</a>
				</div>

					
	   </div> 

               
              
      

      <div className="col-md-5 offset-md-1 mb-3 footer-email   ">
        <form>
          <h4 className="text-uppercase mb-3 ">Subscribe To Our Newsletter</h4>
          <p className="text-secondary ">Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row   gap-2">
            <label for="newsletter1" className="visually-hidden    ">Email address</label>
            <input id="newsletter1  " type="text" className="form-control " placeholder="Email address"/>
            <a href="#" className="btn btn-primary Subscribe "  type="button">Subscribe</a>
          </div>
        </form>
      </div>
    </div>

    <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top fs-8  ">
      <p className="stext-107 text-secondary  txt-center"> Copyright © 2023 Company, Inc. All rights reserved.</p>
      <ul className="list-unstyled d-flex">
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li className="ms-3"><a className="link-body-emphasis" href="#"><svg className="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li className="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>

    
  </footer>
</div>     
   </>
    );
};

export default Footer;