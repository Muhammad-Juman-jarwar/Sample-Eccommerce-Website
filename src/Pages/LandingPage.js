import React from 'react';
import FeaturedProduct from '../components/FeaturedProduct';
import ImageGallery from '../components/ImageGallery';
import Navbar from '../components/Navbar';

const LandingPage = () => {
  return (
    <React.Fragment>
      <div className='colorrr'>
  {/* <nav className="navbar navbar-default navbar-fixed-top navbar-fixed-top navigation-clean-button">
    <div className="container">
      <div className="navbar-header"><a className="navbar-brand" href="#"><span><img src="assets/img/logo.png" />Creativarian </span> </a><button data-toggle="collapse" className="navbar-toggle collapsed" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div>
      <div className="collapse navbar-collapse" id="navcol-1">
        <ul className="nav navbar-nav nav-right">
          <li className="active"><a href="index.html">home </a></li>
          <li className="dropdown"><a className="dropdown-toggle" aria-expanded="false" data-toggle="dropdown" href="#">Products&nbsp;<span className="caret" /></a>
            <ul className="dropdown-menu">
              <li><a href="services.html">Sweat Shirts</a></li>
              <li><a href="#">Shoes</a></li>
              <li><a href="#">Shaals</a></li>
            </ul>
          </li>
          <li><a href="#">order now</a></li>
          <li><a href="about.html">about </a></li>
          <li><a href="faq.html">faq </a></li>
          <li><a href="contact.html">contact </a></li>
        </ul>
        <p className="navbar-text navbar-right actions"><a className="login" href="login.html">Log In</a> <a className="btn btn-default action-button" role="button" href="signup.html">Sign Up</a></p>
      </div>
    </div>
  </nav> */}
  {/* <Navbar /> */}
  <header className="header-blue">
    <nav className="navbar navbar-default navigation-clean-search">
      <div className="container">
        {/* <div className="navbar-header"><a className="navbar-brand" href="#">Company Name</a><button data-toggle="collapse" className="navbar-toggle collapsed" data-target="#navcol-2"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button></div> */}
        <div className="collapse navbar-collapse" id="navcol-2">
          <ul className="nav navbar-nav">
            <li className="active"><a href="#">Link</a></li>
            <li className="dropdown"><a className="dropdown-toggle" aria-expanded="false" data-toggle="dropdown" href="#">Dropdown <span className="caret" /></a>
              <ul className="dropdown-menu">
                <li><a href="#">First Item</a></li>
                <li><a href="#">Second Item</a></li>
                <li><a href="#">Third Item</a></li>
              </ul>
            </li>
          </ul>
          <form className="navbar-form navbar-left" target="_self">
            <div className="form-group"><label className="control-label" htmlFor="search-field"><i className="glyphicon glyphicon-search" /></label><input className="form-control search-field" type="search" id="search-field-1" name="search" /></div>
          </form>
          <p className="navbar-text navbar-right"><a className="login" href="#">Log In</a> <a className="btn btn-default action-button" role="button" href="#">Sign Up</a></p>
        </div>
      </div>
    </nav>
    <div className="container hero">
      <div className="row">
        <div className="col-lg-5 col-lg-offset-1 col-md-6 col-md-offset-0">
          <h1>The revolution is here.</h1>
          <p>Mauris egestas tellus non ex condimentum, ac ullamcorper sapien dictum. Nam consequat neque quis sapien viverra convallis. In non tempus lorem. </p><button className="btn btn-default btn-lg action-button" type="button">Learn More</button>
        </div>
        <div className="col-lg-5 col-lg-offset-0 col-md-5 col-md-offset-1 hidden-xs hidden-sm phone-holder">
          <div className="iphone-mockup"><img className="device" src="assets/img/phone.svg" />
            <div className="screen" />
          </div>
        </div>
      </div>
    </div>
  </header>
  <section> 
    {/* <FeaturedProduct /> */}
    <ImageGallery />
  </section>
  {/* <section className="photo-gallery">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Lightbox Gallery</h2>
        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
      </div> */}
      {/* <div className="row photos">
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/desk.jpg"><img className="img-responsive" src="assets/img/desk.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/desk.jpg"><img className="img-responsive" src="assets/img/desk.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/building.jpg"><img className="img-responsive" src="assets/img/building.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/loft.jpg"><img className="img-responsive" src="assets/img/loft.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/building.jpg"><img className="img-responsive" src="assets/img/building.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/loft.jpg"><img className="img-responsive" src="assets/img/loft.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/desk.jpg"><img className="img-responsive" src="assets/img/desk.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/building.jpg"><img className="img-responsive" src="assets/img/building.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/loft.jpg"><img className="img-responsive" src="assets/img/loft.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/building.jpg"><img className="img-responsive" src="assets/img/building.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/loft.jpg"><img className="img-responsive" src="assets/img/loft.jpg" /></a></div>
        <div className="col-lg-3 col-md-4 col-sm-6 item"><a data-lightbox="photos" href="assets/img/desk.jpg"><img className="img-responsive" src="assets/img/desk.jpg" /></a></div>
      </div> */}
    {/* </div>
  </section> */}
  <section className="features-boxed">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Features </h2>
        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
      </div>
      <div className="row features">
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-map-marker icon" />
            <h3 className="name">Works everywhere</h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-time icon" />
            <h3 className="name">Always available</h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-list-alt icon" />
            <h3 className="name">Customizable </h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-leaf icon" />
            <h3 className="name">Organic </h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-plane icon" />
            <h3 className="name">Fast </h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box"><i className="glyphicon glyphicon-phone icon" />
            <h3 className="name">Mobile-first</h3>
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p><a className="learn-more" href="#">Learn more »</a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="newsletter-subscribe">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Subscribe for our Newsletter</h2>
        <p className="text-center">Nunc luctus in metus eget fringilla. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae. </p>
      </div>
      <form className="form-inline" method="post">
        <div className="form-group"><input className="form-control" type="email" name="email" placeholder="Your Email" /></div>
        <div className="form-group"><button className="btn btn-primary" type="submit">Subscribe </button></div>
      </form>
    </div>
  </section>
  <section className="testimonials-clean">
    <div className="container">
      <div className="intro">
        <h2 className="text-center">Testimonials </h2>
        <p className="text-center">Our customers love us! Read what they have to say below. Aliquam sed justo ligula. Vestibulum nibh erat, pellentesque ut laoreet vitae.</p>
      </div>
      <div className="row people">
        <div className="col-md-4 col-sm-6 item">
          <div className="box">
            <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
          </div>
          <div className="author"><img className="img-circle" src="assets/img/1.jpg" />
            <h5 className="name">Ben Johnson</h5>
            <p className="title">CEO of Company Inc.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box">
            <p className="description">Praesent aliquam in tellus eu gravida. Aliquam varius finibus est, et interdum justo suscipit id.</p>
          </div>
          <div className="author"><img className="img-circle" src="assets/img/3.jpg" />
            <h5 className="name">Carl Kent</h5>
            <p className="title">Founder of Style Co.</p>
          </div>
        </div>
        <div className="col-md-4 col-sm-6 item">
          <div className="box">
            <p className="description">Aliquam varius finibus est, et interdum justo suscipit. Vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu.</p>
          </div>
          <div className="author"><img className="img-circle" src="assets/img/2.jpg" />
            <h5 className="name">Emily Clark</h5>
            <p className="title">Owner of Creative Ltd.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer-clean">
    <div className="container">
      <div className="row">
        <div className="col-md-3 col-sm-4 item">
          <h3>Services</h3>
          <ul>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Development</a></li>
            <li><a href="#">Hosting</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-4 item">
          <h3>About</h3>
          <ul>
            <li><a href="#">Company</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Legacy</a></li>
          </ul>
        </div>
        <div className="col-md-3 col-sm-4 item">
          <h3>Careers</h3>
          <ul>
            <li><a href="#">Job openings</a></li>
            <li><a href="#">Employee success</a></li>
            <li><a href="#">Benefits</a></li>
          </ul>
        </div>
        <div className="col-md-3 item social"><a href="#"><i className="ion-social-facebook" /></a><a href="#"><i className="ion-social-twitter" /></a><a href="#"><i className="ion-social-snapchat" /></a><a href="#"><i className="ion-social-instagram" /></a>
          <p className="copyright">Muhammad Juman © 2022</p>
        </div>
      </div>
    </div>
  </footer>
</div>
    </React.Fragment>
  );
};
export default LandingPage;