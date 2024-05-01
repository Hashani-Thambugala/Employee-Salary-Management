
import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'jquery/dist/jquery.min.js';
// import 'popper.js/dist/umd/popper.min.js';
// import 'bootstrap/dist/js/bootstrap.min.js';
// import 'animate.css/animate.min.css';
// import 'owl.carousel/dist/assets/owl.carousel.min.css';
// import 'owl.carousel/dist/assets/owl.theme.default.min.css';
// import 'magnific-popup/dist/magnific-popup.css';
// import 'aos/dist/aos.css';
// import 'bootstrap-datepicker/dist/css/bootstrap-datepicker.css';
// import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js';
// import 'jquery.timepicker/jquery.timepicker.min.js';
// import 'flaticon/fonts/flaticon.css';
// import 'ionicons/dist/css/ionicons.min.css';
// import 'font-awesome/css/font-awesome.min.css';


const Home = () => {

  return(
      
    
  <div>
	  <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
	    <div className="container">
	      <a className="navbar-brand" href="index.html"><span className="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare</a>
	      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
	        <span className="oi oi-menu"></span> Menu
	      </button>

	      <div className="collapse navbar-collapse" id="ftco-nav">
	        <ul className="navbar-nav ml-auto">
	        	<li className="nav-item active"><a href="index.html" className="nav-link">Home</a></li>
	        	<li className="nav-item"><a href="services.html" className="nav-link">Services</a></li>
	        	<li className="nav-item"><a href="gallery.html" className="nav-link">Gallery</a></li>
	        	<li className="nav-item"><a href="about.html" className="nav-link">About</a></li>
	        	<li className="nav-item"><a href="blog.html" className="nav-link">Blog</a></li>
	          <li className="nav-item"><a href="contact.html" className="nav-link">Contact</a></li>
	        </ul>
	      </div>
	    </div>
	  </nav>
    {/* <!-- END nav --> */}

    <section className="hero-wrap js-fullheight" style={{backgroundImage: 'url(images/bg-2.jpg)'}} data-stellar-background-ratio="0.5">
      <div className="overlay"></div>
      <div className="container">
        <div className="row no-gutters slider-text js-fullheight justify-content-center align-items-center">
          <div className="col-lg-12 ftco-animate d-flex align-items-center">
          	<div className="text text-center">
          		<span className="subheading">Welcome to Haircare</span>
		  				<h1 className="mb-4">We are professional care for your hair</h1>
		  				<p><a href="#" className="btn btn-primary btn-outline-primary px-4 py-2">Book now</a></p>
							</div>
            </div>
          </div>
        </div>
      
    </section>
		
		<section className="ftco-section ftco-no-pt ftco-no-pb">
			<div className="container-fluid px-0">
				<div className="row no-gutters">
					<div className="col-md text-center d-flex align-items-stretch">
						<div className="services-wrap d-flex align-items-center img" style={{backgroundImage: 'url(images/formen.jpg)'}}>
							<div className="text">
								<h3>For Men</h3>
								<p><a href="#" className="btn-custom">See pricing <span className="ion-ios-arrow-round-forward"></span></a></p>
							</div>
						</div>
					</div>
					<div className="col-md-3 text-center d-flex align-items-stretch">
						<div className="text-about py-5 px-4">
							<h1 className="logo">
								<a href="#"><span className="flaticon-scissors-in-a-hair-salon-badge"></span>Haircare</a>
							</h1>
							<h2>Welcome to our Salon</h2>
							<p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
							<p className="mt-3"><a href="#" className="btn btn-primary btn-outline-primary">Read more</a></p>
						</div>
					</div>
					<div className="col-md text-center d-flex align-items-stretch">
						<div className="services-wrap d-flex align-items-center img" style={{backgroundImage: 'url(images/forwomen.jpg)'}}>
							<div className="text">
								<h3>For Women</h3>
								<p><a href="#" className="btn-custom">See pricing <span className="ion-ios-arrow-round-forward"></span></a></p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    
    <section className="services-section ftco-section">
      <div className="container">
      	<div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<span className="subheading">Services</span>
            <h2 className="mb-4">Services Menu</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row no-gutters d-flex">
          <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block text-center">
              <div className="icon"><span className="flaticon-male-hair-of-head-and-face-shapes"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Haircut &amp; Styling</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>    
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block text-center">
              <div className="icon"><span className="flaticon-beard"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Beard</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block text-center">
              <div className="icon"><span className="flaticon-beauty-products"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Makeup</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
          <div className="col-md-6 col-lg-3 d-flex align-self-stretch ftco-animate">
            <div className="media block-6 services d-block text-center">
              <div className="icon"><span className="flaticon-healthy-lifestyle-logo"></span></div>
              <div className="media-body">
                <h3 className="heading mb-3">Body Treatment</h3>
                <p>A small river named Duden flows by their place and supplies.</p>
              </div>
            </div>      
          </div>
        </div>
      </div>
    </section>

    <section className="ftco-section ftco-booking bg-light">
    	<div className="container ftco-relative">
    		<div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<span className="subheading">Booking</span>
            <h2 className="mb-4">Make an Appointment</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <h3 className="vr">Call Us: 012-3456-7890</h3>
    		<div className="row justify-content-center">
    			<div className="col-md-10 ftco-animate">
    				<form action="#" className="appointment-form">
	            <div className="row">
	              <div className="col-sm-6">
	                <div className="form-group">
			              <input type="text" className="form-control" id="appointment_name" placeholder="Name"></input>
			            </div>
	              </div>
	              <div className="col-sm-6">
	                <div className="form-group">
			              <input type="text" className="form-control" id="appointment_email" placeholder="Email"></input>
			            </div>
	              </div>
	              <div className="col-sm-6">
	                <div className="form-group">
	                  <input type="text" className="form-control appointment_date" placeholder="Date"></input>
	                </div>    
	              </div>
	              <div className="col-sm-6">
	                <div className="form-group">
	                  <input type="text" className="form-control appointment_time" placeholder="Time"></input>
	                </div>
	              </div>
	              <div className="col-sm-6">
	                <div className="form-group">
			              <div className="select-wrap">
                      <div className="icon"><span className="ion-ios-arrow-down"></span></div>
                      <select name="" id="" className="form-control">
                      	<option value="">Professional Makeup</option>
                        <option value="">Manicure Pedicure</option>
                        <option value="">Body Treatment</option>
                        <option value="">Haircut &amp; Coloring</option>
                      </select>
                    </div>
			            </div>
	              </div>
	              <div className="col-sm-6">
	                <div className="form-group">
	                  <input type="text" className="form-control" id="phone" placeholder="Phone"></input>
	                </div>
	              </div>
	              <div className="col-md-12">
	              	<div className="form-group">
		                <textarea name="" id="" cols="30" rows="7" className="form-control" placeholder="Message"></textarea>
		              </div>
	              </div>
		          </div>
		          <div className="form-group">
	              <input type="submit" value="Make an Appointment" className="btn btn-primary"></input>
	            </div>
	          </form>
    			</div>
    		</div>
    	</div>
    </section>


    <section className="ftco-section ftco-team">
    	<div className="container-fluid px-md-5">
    		<div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<span className="subheading">Artistic Director</span>
            <h2 className="mb-4">Makeup Artist</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-12 ftco-animate">
        		<div className="carousel-team owl-carousel">
        			<div className="item">
		        		<a href="#" className="team text-center">
		        			<div className="img" style={{backgroundImage: 'url(images/stylist-1.jpg)'}}></div>
		        			<h2>Danica Lewis</h2>
		        			<span className="position">Hair Stylist</span>
		        		</a>
        			</div>
        			<div className="item">
	        			<a href="#" className="team text-center">
		        			<div className="img" style={{backgroundImage: 'url(images/stylist-2.jpg)'}}></div>
		        			<h2>Nicole Simon</h2>
		        			<span className="position">Nail Master</span>
		        		</a>
	        		</div>
	        		<div className="item">
	        			<a href="#" className="team text-center">
		        			<div className="img" style={{backgroundImage: 'url(images/stylist-3.jpg)'}}></div>
		        			<h2>Cloe Meyer</h2>
		        			<span className="position">Director</span>
		        		</a>
	        		</div>
	        		<div className="item">
	        			<a href="#" className="team text-center">
		        			<div className="img" style={{backgroundImage: 'url(images/stylist-4.jpg)'}}></div>
		        			<h2>Rachel Clinton</h2>
		        			<span className="position">Hair Stylist</span>
		        		</a>
	        		</div>
	        		<div className="item">
	        			<a href="#" className="team text-center">
		        			<div className="img" style={{backgroundImage: 'url(images/stylist-5.jpg)'}}></div>
		        			<h2>Dave Buff</h2>
		        			<span className="position">Barber</span>
		        		</a>
	        		</div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section ftco-no-pt ftco-no-pb">
    	<div className="container">
    		<div className="row no-gutters justify-content-center mb-5 pb-2">
          <div className="col-md-6 text-center heading-section ftco-animate">
          	<span className="subheading">Gallery</span>
            <h2 className="mb-4">Our gallery</h2>
            <p>Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
          </div>
        </div>
    	</div>
			<div className="container-fluid p-0">
    		<div className="row no-gutters">
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-1.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Stylist</span>
	    					<h3><a href="project.html">Beard</a></h3>
	    				</div>
	    				<a href="images/work-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-2.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Haircut</a></h3>
	    				</div>
	    				<a href="images/work-2.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-3.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Hairstylist</a></h3>
	    				</div>
	    				<a href="images/work-3.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-4.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Haircut</a></h3>
	    				</div>
	    				<a href="images/work-4.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-5.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Makeup</a></h3>
	    				</div>
	    				<a href="images/work-5.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-6.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Fashion</span>
	    					<h3><a href="project.html">Model</a></h3>
	    				</div>
	    				<a href="images/work-6.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-7.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Makeup</a></h3>
	    				</div>
	    				<a href="images/work-7.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    			<div className="col-md-6 col-lg-3 ftco-animate">
    				<div className="project">
	    				<img src="images/work-8.jpg" className="img-fluid" alt="Colorlib Template"></img>
	    				<div className="text">
	    					<span>Beauty</span>
	    					<h3><a href="project.html">Makeup</a></h3>
	    				</div>
	    				<a href="images/work-8.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
	    					<span className="icon-expand"></span>
	    				</a>
    				</div>
    			</div>
    		</div>
    	</div>
		</section>
		
		<section className="ftco-section ftco-pricing">
			<div className="container">
				<div className="row justify-content-center pb-3">
          <div className="col-md-10 heading-section text-center ftco-animate">
          	<span className="subheading">Pricing</span>
            <h2 className="mb-4">Our Prices</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-3 ftco-animate">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Hair Style</h3>
	        			<p><span className="price">$50.00</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Hair Dryer</li>
								<li>Hair Coloring</li>
								<li>Hair Cut</li>
								<li>Hair Dresser</li>
								<li>Hair Spa</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3 ftco-animate">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Manicure Pedicure</h3>
	        			<p><span className="price">$34.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Manicure</li>
								<li>Pedicure</li>
								<li>Coloring</li>
								<li>Nails</li>
								<li>Nail Cut</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3 ftco-animate">
        		<div className="pricing-entry active pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Makeup</h3>
	        			<p><span className="price">$54.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Makeup</li>
								<li>Professional Makeup</li>
								<li>Blush On</li>
								<li>Facial Massage</li>
								<li>Facial Spa</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        	<div className="col-md-3 ftco-animate">
        		<div className="pricing-entry pb-5 text-center">
        			<div>
	        			<h3 className="mb-4">Body Treatment</h3>
	        			<p><span className="price">$89.50</span> <span className="per">/ session</span></p>
	        		</div>
        			<ul>
        				<li>Massage</li>
								<li>Spa</li>
								<li>Foot Spa</li>
								<li>Body Spa</li>
								<li>Relaxing</li>
        			</ul>
        			<p className="button text-center"><a href="#" className="btn btn-primary px-4 py-3">Get Offer</a></p>
        		</div>
        	</div>
        </div>
			</div>
		</section>

		<section className="testimony-section bg-light">
      <div className="container">
        <div className="row ftco-animate justify-content-center">
        	<div className="col-md-6 col-lg-5 d-flex">
        		<div className="testimony-img" style={{backgroundImage: 'url(images/testimony-img.jpg)'}}></div>
        	</div>
          <div className="col-md-6 col-lg-7 py-5 pl-md-5">
          	<div className="py-md-5">
	          	<div className="heading-section ftco-animate">
	          		<span className="subheading">Testimony</span>
			          <h2 className="mb-0">Happy Customer</h2>
			        </div>
	            <div className="carousel-testimony owl-carousel ftco-animate">
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: 'url(images/stylist-1.jpg)'}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Jeff Nucci</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: 'url(images/stylist-2.jpg)'}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Jeff Nucci</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: 'url(images/stylist-3.jpg)'}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Jeff Nucci</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: 'url(images/stylist-4.jpg)'}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Jeff Nucci</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	              <div className="item">
	                <div className="testimony-wrap pb-4">
	                  <div className="text">
	                    <p className="mb-4">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
	                  </div>
	                  <div className="d-flex">
		                  <div className="user-img" style={{backgroundImage: 'url(images/stylist-5.jpg)'}}>
		                  </div>
		                  <div className="pos ml-3">
		                  	<p className="name">Jeff Nucci</p>
		                    <span className="position">Businessman</span>
		                  </div>
		                </div>
	                </div>
	              </div>
	            </div>
	          </div>
          </div>
        </div>
      </div>
    </section>

    <footer className="ftco-footer ftco-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2 logo">Haircare</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
                <li className="ftco-animate"><a href="#"><span className="icon-twitter"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-facebook"></span></a></li>
                <li className="ftco-animate"><a href="#"><span className="icon-instagram"></span></a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4 ml-md-5">
              <h2 className="ftco-heading-2">Information</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">FAQs</a></li>
                <li><a href="#" className="py-2 d-block">Privacy</a></li>
                <li><a href="#" className="py-2 d-block">Terms Condition</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
             <div className="ftco-footer-widget mb-4">
              <h2 className="ftco-heading-2">Links</h2>
              <ul className="list-unstyled">
                <li><a href="#" className="py-2 d-block">Home</a></li>
                <li><a href="#" className="py-2 d-block">About</a></li>
                <li><a href="#" className="py-2 d-block">Services</a></li>
                <li><a href="#" className="py-2 d-block">Work</a></li>
                <li><a href="#" className="py-2 d-block">Blog</a></li>
                <li><a href="#" className="py-2 d-block">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md">
            <div className="ftco-footer-widget mb-4">
            	<h2 className="ftco-heading-2">Have a Questions?</h2>
            	<div className="block-23 mb-3">
	              <ul>
	                <li><span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain View, San Francisco, California, USA</span></li>
	                <li><a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929 210</span></a></li>
	                <li><a href="#"><span className="icon icon-envelope"></span><span className="text">info@yourdomain.com</span></a></li>
	              </ul>
	            </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 text-center">

             <p>{/*<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart color-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
  {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->*/}</p> 
          </div>
        </div>
      </div>
    </footer>
    
  

  {/* <!-- loader --> */}
  <div id="ftco-loader" className="show fullscreen"><svg className="circular" width="48px" height="48px"><circle className="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"/><circle className="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10" stroke="#F96D00"/></svg></div>


  <script src="js/jquery.min.js"></script>
  <script src="js/jquery-migrate-3.0.1.min.js"></script>
  <script src="js/popper.min.js"></script>
  <script src="js/bootstrap.min.js"></script>
  <script src="js/jquery.easing.1.3.js"></script>
  <script src="js/jquery.waypoints.min.js"></script>
  <script src="js/jquery.stellar.min.js"></script>
  <script src="js/owl.carousel.min.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/aos.js"></script>
  <script src="js/jquery.animateNumber.min.js"></script>
  <script src="js/bootstrap-datepicker.js"></script>
  <script src="js/jquery.timepicker.min.js"></script>
  <script src="js/scrollax.min.js"></script>
  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBVWaKrjvy3MaE7SQ74_uJiULgl1JY0H2s&sensor=false"></script>
  <script src="js/google-map.js"></script>
  <script src="js/main.js"></script>
    
 </div>



  )







}

export default Home;