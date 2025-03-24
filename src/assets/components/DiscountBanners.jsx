import AdImage3 from './../images/ad-image-3.png';
import AdImage4 from './../images/ad-image-4.png';

export const DiscountBanners = () => {
    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <div
                            className="banner-ad bg-danger mb-3"
                            style={{
                                backgroundImage: `url(${AdImage3})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right bottom'
                            }}
                        >
                            <div className="banner-content p-5">
                                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                <h3 className="banner-title">Luxa Dark Chocolate</h3>
                                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                <a href="#" className="btn btn-dark text-uppercase">Shop Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div
                            className="banner-ad bg-info"
                            style={{
                                backgroundImage: `url(${AdImage4})`,
                                backgroundRepeat: 'no-repeat',
                                backgroundPosition: 'right bottom'
                            }}
                        >
                            <div className="banner-content p-5">
                                <div className="categories text-primary fs-3 fw-bold">Upto 25% Off</div>
                                <h3 className="banner-title">Creamy Muffins</h3>
                                <p>Very tasty & creamy vanilla flavour creamy muffins.</p>
                                <a href="#" className="btn btn-dark text-uppercase">Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
