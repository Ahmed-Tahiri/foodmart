import PhoneImg from './../images/phone.png';
import bgPattern2 from './../images/bg-pattern-2.png';
import AppStoreLogo from './../images/app-store.jpg';
import GooglePlayLogo from './../images/google-play.jpg';
export let AppAd = () => {
    return (
        <section className="py-5 my-5">
            <div className="container-fluid">
                <div
                    className="bg-warning py-5 rounded-5"
                    style={{ backgroundImage: `${bgPattern2}`, backgroundRepeat: "no-repeat" }}
                >
                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={PhoneImg} alt="phone" className="image-float img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <h2 className="my-5">Shop faster with Foodmart App</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis sed ptibus libero lectus non et
                                    psryroin. Amet sed lorem posuere sit iaculis amet, ac urna. Adipiscing fames semper erat ac in
                                    suspendisse iaculis. Amet blandit tortor praesent ante vitae. A, enim pretium mi senectus magna.
                                    Sagittis sed ptibus libero lectus non et psryroin.
                                </p>
                                <div className="d-flex gap-2 flex-wrap">
                                    <img src={AppStoreLogo} alt="app-store" />
                                    <img src={GooglePlayLogo} alt="google-play" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
