import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { ProductCard } from './ProductCard';

export let MostPpularProducts = ({ products }) => {

    useEffect(() => {
        new Swiper(".popular-products-carousel", {
            modules: [Navigation],
            navigation: {
                nextEl: ".pop-products-carousel-next",
                prevEl: ".pop-products-carousel-prev",
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 3,
                },
                991: {
                    slidesPerView: 4,
                },
                1500: {
                    slidesPerView: 6,
                },
            },
            slidesPerView: 6,
            spaceBetween: 20,
            speed: 500
        });
    }, []);

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between my-5">
                            <h2 className="section-title">Most Poular Products</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons d-flex gap-1">
                                    <button className="swiper-prev products-carousel-prev pop-products-carousel-prev btn btn-primary">❮</button>
                                    <button className="swiper-next products-carousel-next pop-products-carousel-next btn btn-primary">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="products-carousel popular-products-carousel swiper">
                            <div className="swiper-wrapper">
                                {products.map((product, index) => {
                                    return <div className="swiper-slide">
                                        <ProductCard {...product} key={`MostPopularProduct${product.id}`} />
                                    </div>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
