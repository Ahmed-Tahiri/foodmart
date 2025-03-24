import ProductThumb1 from './../images/product-thumb-1.png';
import ProductThumb2 from './../images/product-thumb-2.png';
import AdImage1 from './../images/ad-image-1.png';
import AdImage2 from './../images/ad-image-2.png';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const Banners = () => {
    return (
        <section
            className="py-3"
            style={{
                backgroundImage: "url('images/background-pattern.jpg')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}
        >
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="banner-blocks">
                            {/* Swiper Banner */}
                            <div className="banner-ad large bg-info block-1">
                                <Swiper
                                    modules={[Pagination]}
                                    pagination={{ clickable: true }}
                                    loop={true}
                                    className="main-swiper"
                                >
                                    <SwiperSlide>
                                        <div className="row banner-content p-5">
                                            <div className="content-wrapper col-md-7">
                                                <div className="categories my-3">100% natural</div>
                                                <h3 className="display-4">Fresh Smoothie & Summer Juice</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1 px-4 py-3 mt-3">Shop Now</a>
                                            </div>
                                            <div className="img-wrapper col-md-5">
                                                <img src={ProductThumb1} className="img-fluid" alt="Product" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="row banner-content p-5">
                                            <div className="content-wrapper col-md-7">
                                                <div className="categories mb-3 pb-3">100% natural</div>
                                                <h3 className="banner-title">Fresh Smoothie & Summer Juice</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                                            </div>
                                            <div className="img-wrapper col-md-5">
                                                <img src={ProductThumb1} className="img-fluid" alt="Product" />
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="row banner-content p-5">
                                            <div className="content-wrapper col-md-7">
                                                <div className="categories mb-3 pb-3">100% natural</div>
                                                <h3 className="banner-title">Heinz Tomato Ketchup</h3>
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dignissim massa diam elementum.</p>
                                                <a href="#" className="btn btn-outline-dark btn-lg text-uppercase fs-6 rounded-1">Shop Collection</a>
                                            </div>
                                            <div className="img-wrapper col-md-5">
                                                <img src={ProductThumb2} className="img-fluid" alt="Product" />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                            </div>

                            {/* Ad Banners */}
                            <div
                                className="banner-ad bg-success-subtle block-2"
                                style={{ background: `url(${AdImage1}) no-repeat right bottom` }}
                            >
                                <div className="row banner-content p-5">
                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">20% off</div>
                                        <h3 className="banner-title">Fruits & Vegetables</h3>
                                        <a href="#" className="d-flex align-items-center nav-link">
                                            Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div
                                className="banner-ad bg-danger block-3"
                                style={{ background: `url(${AdImage2}) no-repeat right bottom` }}
                            >
                                <div className="row banner-content p-5">
                                    <div className="content-wrapper col-md-7">
                                        <div className="categories sale mb-3 pb-3">15% off</div>
                                        <h3 className="item-title">Baked Products</h3>
                                        <a href="#" className="d-flex align-items-center nav-link">
                                            Shop Collection <svg width="24" height="24"><use xlinkHref="#arrow-right"></use></svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
