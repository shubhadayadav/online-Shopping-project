import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <div className="container-fluid   ">
        <div className="fullscreen2 "></div>
        <section className="contact-header  ">
          <span className=" ">Contact Us </span>
        </section>

        <div className="container-fluid  ">
          <section className="contact-content">
            <h3 className="why-content">why choose us</h3>
          </section>
          <div className="container  ">
            <div class="col-xl-4">
              <div class="p-3 border">
                <div class="address mb-3">
                  <h5 class="mb-0 fw-bold">Address</h5>
                  <p class="mb-0 font-12">123 Street Name, City, Australia</p>
                </div>

                <div class="phone mb-3">
                  <h5 class="mb-0 fw-bold">Phone</h5>
                  <p class="mb-0 font-13">Toll Free (123) 472-796</p>
                  <p class="mb-0 font-13">Mobile : +91-9910XXXX</p>
                </div>

                <div class="email mb-3">
                  <h5 class="mb-0 fw-bold">Email</h5>
                  <p class="mb-0 font-13">mail@example.com</p>
                </div>

                <div class="working-days mb-0">
                  <h5 class="mb-0 fw-bold">Working Days</h5>
                  <p class="mb-0 font-13">Mon - FRI / 9:30 AM - 6:30 PM</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-4 shop-contact">
            <div className="col-xl-8">
              <div className="p-4 border">
                <form>
                  <div className="form-body">
                    <h4 className="mb-0 fw-bold">Drop Us a Line</h4>
                    <div className="my-3 border-bottom"></div>
                    <div className="mb-3">
                      <label className="form-label">Enter Your Name</label>
                      <input
                        type="text"
                        className="form-control  contact-form-style rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label ">Enter Email</label>
                      <input
                        type="text"
                        className="form-control contact-form-style  rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label ">Phone Number</label>
                      <input
                        type="text"
                        className="form-control contact-form-style  rounded-0"
                      />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-control contact-form-style rounded-0"
                        rows="4"
                        cols="4"
                      ></textarea>
                    </div>
                    <div className="mb-0">
                      <a
                        href="thank-you.html"
                        className="btn btn-dark btn-ecomm"
                      >
                        Send Message
                      </a>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
