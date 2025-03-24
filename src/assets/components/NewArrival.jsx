import BrandThumb11 from './../images/product-thumb-11.jpg';
import BrandThumb12 from './../images/product-thumb-12.jpg';
import BrandThumb13 from './../images/product-thumb-13.jpg';
import BrandThumb14 from './../images/product-thumb-14.jpg';
import { useEffect, useRef } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export const NewArrival = () => {
    const swiperRef = useRef(null);

    useEffect(() => {
        if (swiperRef.current) {
            new Swiper(swiperRef.current, {
                modules: [Navigation],
                spaceBetween: 30,
                slidesPerView: 4,
                navigation: {
                    nextEl: ".brand-carousel-next",
                    prevEl: ".brand-carousel-prev",
                },
            });
        }
    }, []);

    const products = [

        { id: 1, img: BrandThumb11, title: "Honey best nectar you wish to get" },
        { id: 2, img: BrandThumb12, title: "Honey best nectar you wish to get" },
        { id: 3, img: BrandThumb13, title: "Honey best nectar you wish to get" },
        { id: 4, img: BrandThumb14, title: "Honey best nectar you wish to get" },
        { id: 5, img: BrandThumb11, title: "Honey best nectar you wish to get" },
        { id: 6, img: BrandThumb12, title: "Honey best nectar you wish to get" },
    ];

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Newly Arrived Brands</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Brands →</a>
                                <div className="swiper-buttons d-flex gap-1">
                                    <button className="swiper-prev brand-carousel-prev btn btn-yellow">❮</button>
                                    <button className="swiper-next brand-carousel-next btn btn-yellow">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="brand-carousel swiper" ref={swiperRef}>
                            <div className="swiper-wrapper">
                                {products.map((product) => (
                                    <div className="swiper-slide" key={product.id}>
                                        <div className="card mb-3 p-3 rounded-4 shadow border-0">
                                            <div className="row g-0">
                                                <div className="col-md-4">
                                                    <img src={product.img} className="img-fluid rounded" alt={product.title} />
                                                </div>
                                                <div className="col-md-8">
                                                    <div className="card-body py-0">
                                                        <p className="text-muted mb-0">Amber Jar</p>
                                                        <h5 className="card-title">{product.title}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

