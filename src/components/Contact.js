import React from 'react'
import "../Css/Contact.css"



function Contact() {
  return (
    
    <section id="contact" class="ftco-section">
    <div class="container">      
        <div class="row justify-content-center">
            <div class="col-lg-10">
                <div class="wrapper">
                    <div class="row no-gutters">
                        <div class="col-md-6 d-flex align-items-stretch">
                            <div class="contact-wrap w-100 p-md-5 p-4 py-5">
                                <h3 class="mb-4">Write To Me</h3>
                               
                          <div id="form-message-success" class="mb-4">
                                    Your message was sent, thank you!
                          </div>
                                <form  method='post' id="contactForm" name="contactForm" class="contactForm" data-netlify="true">
                                   <input type="hidden" name="form-name" value="contactForm"></input>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="name" id="name" placeholder="Name"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12"> 
                                            <div class="form-group">
                                                <input type="email" class="form-control" name="email" id="email" placeholder="Email"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject"/>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-group">
                                                <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Message"></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-12">
                                            <div class="form-grouco">
                                                <input type="submit" value="Send Message" class="btn btn-primary"/>
                                                <div class="submitting"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

  )
}

export default Contact