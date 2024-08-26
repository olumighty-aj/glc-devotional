import "bootstrap/dist/css/bootstrap.min.css";
import "./devotion.css";


export const Footer = () => {
	return (
        <footer className="footer-m text-center text-lg-start">
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-8 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase global">Global Light Church</h5>
              <p className="global-p">
                Bringing light to the world through faith and community.
              </p>
            </div>
            <div className="col-lg-4 col-md-6 mb-4 mb-md-0 text-lg-right text-md-center">
                <h4 className="icon">Follow us</h4>
              <a href="https://www.facebook.com" className="me-4 text-reset ">
                <i className="fab fa-facebook-f footer-icon"></i>
              </a>
              <a href="https://www.twitter.com" className="me-4 text-reset ">
                <i className="fab fa-twitter footer-icon"></i>
              </a>
              <a href="https://www.instagram.com" className="me-4 text-reset ">
                <i className="fab fa-instagram footer-icon"></i>
              </a>
              <a href="https://www.linkedin.com" className="me-4 text-reset ">
                <i className="fab fa-linkedin footer-icon"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center p-3 footer-m">
          <p className="date">
            © {new Date().getFullYear()} Global Light Church. All rights reserved.
          </p>
        </div>
      </footer>
	);
};
