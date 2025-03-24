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
        <footer class="py-5">
            <div class="container-fluid">
                <div class="row">

                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-menu">
                            <img src={CompnayLogo} alt="logo" />
                            <div class="social-links mt-5">
                                <ul class="d-flex list-unstyled gap-2">
                                    {socialLogo.map((logo, index) => <li key={`Logo${index + 1}`}>
                                        <a href="#" class="btn btn-outline-light">
                                            <img src={logo} />
                                        </a>
                                    </li>)}
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-2 col-sm-6">
                        <div class="footer-menu">
                            <h5 class="widget-title">Ultras</h5>
                            <ul class="menu-list list-unstyled">
                                {menuItems1.map((linkName, index) => <li class="menu-item" key={index + 1}> <a href="#" class="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-menu">
                            <h5 class="widget-title">Customer Service</h5>
                            <ul class="menu-list list-unstyled">
                                {menuItems2.map((linkName, index) => <li class="menu-item" key={index + 1}> <a href="#" class="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-menu">
                            <h5 class="widget-title">Customer Service</h5>
                            <ul class="menu-list list-unstyled">
                                {menuItems2.map((linkName, index) => <li class="menu-item" key={index + 1}> <a href="#" class="nav-link">{linkName}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 col-sm-6">
                        <div class="footer-menu">
                            <h5 class="widget-title">Subscribe Us</h5>
                            <p>Subscribe to our newsletter to get updates about our grand offers.</p>
                            <form class="d-flex mt-3 gap-0" role="newsletter">
                                <input class="form-control rounded-start rounded-0 bg-light" type="email" placeholder="Email Address"
                                    aria-label="Email Address" />
                                <button class="btn btn-dark rounded-end rounded-0" type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};





