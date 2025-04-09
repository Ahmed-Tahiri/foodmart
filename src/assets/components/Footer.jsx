import CompnayLogo from './../images/logo.png';
import FbLogo from './../images/socialSVGs/facebookSVG.svg';
import InstaLogo from './../images/socialSVGs/instaSVG.svg';
import AmazonLogo from './../images/socialSVGs/amzongSVG.svg';
import YtLogo from './../images/socialSVGs/youtubeSVG.svg';
import XLogo from './../images/socialSVGs/twitterSVG.svg';
export let Footer = () => {
    let menuItems1 = [
        "About us",
        "Conditions",
        "Our Journals",
        "Careers",
        "Affiliate Programme",
        "Ultras Press"
    ];

    let menuItems2 = [
        "FAQ",
        "Contact",
        "Privacy Policy",
        "Returns & Refunds",
        "Cookie Guidelines",
        "Delivery Information"
    ];
    let socialLogo = [FbLogo, InstaLogo, AmazonLogo, YtLogo, XLogo,];
    return (
        <footer className="py-5">
            <div className="container-fluid">
                <div className="row">

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-menu">
                            <img src={CompnayLogo} alt="logo" />
                            <div className="support-box text-start d-none d-xl-flex flex-row align-items-center justify-content-start mt-2 gap-1">
                                <span className="fs-6 text-muted">For Support?</span>
                                <h5 className="mb-0">+980-34984089</h5>
                            </div>
                            <div className="social-links mt-5">
                                <ul className="d-flex list-unstyled gap-2">
                                    {socialLogo.map((logo, index) => <li key={`Logo${index + 1}`}>
                                        <a href="#" className="btn btn-outline-light">
                                            <img src={logo} />
                                        </a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-2 col-sm-6">
                        <div className="footer-menu">
                            <h5 className="widget-title">Ultras</h5>
                            <ul className="menu-list list-unstyled">
                                {menuItems1.map((linkName, index) => <li className="menu-item" key={index + 1}> <a href="#" className="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-menu">
                            <h5 className="widget-title">Customer Service</h5>
                            <ul className="menu-list list-unstyled">
                                {menuItems2.map((linkName, index) => <li className="menu-item" key={index + 1}> <a href="#" className="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-menu">
                            <h5 className="widget-title">Customer Service</h5>
                            <ul className="menu-list list-unstyled">
                                {menuItems2.map((linkName, index) => <li className="menu-item" key={index + 1}> <a href="#" className="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="footer-menu">
                            <h5 className="widget-title">Subscribe Us</h5>
                            <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                            <form className="d-flex mt-3 gap-0" role="newsletter">
                                <input className="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address"
                                    aria-label="Email Address" />
                                <button className="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};





