import Broccoli from './../images/icon-vegetables-broccoli.png';
import Bread from './../images/icon-bread-baguette.png';
import SoftDrink from './../images/icon-soft-drinks-bottle.png';
import WineItem from './../images/icon-wine-glass-bottle.png';
import MeatProduct from './../images/icon-animal-products-drumsticks.png';
import BakeryItem from './../images/icon-bread-herb-flour.png';
import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export let CategorySlider = () => {
    useEffect(() => {
        new Swiper(".category-carousel", {
            modules: [Navigation],
            slidesPerView: 6,
            spaceBetween: 30,
            speed: 500,
            breakpoints: {
                0: {
                    slidesPerView: 2,
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
            navigation: {
                nextEl: ".category-carousel-next",
                prevEl: ".category-carousel-prev",
            },
        });
    }, []);

    const categories = [
        { img: Bread, title: "Breads & Sweets" },
        { img: Broccoli, title: "Fruits & Veges" },
        { img: Bread, title: "Breads & Sweets" },
        { img: SoftDrink, title: "Soft Drinks" },
        { img: BakeryItem, title: "Bakery Items" },
        { img: Bread, title: "Breads & Sweets" },
        { img: MeatProduct, title: "Meat & Poultry" },
        { img: Bread, title: "Breads & Sweets" },
        { img: WineItem, title: "Wine & Beverages" },
        { img: BakeryItem, title: "Bakery Items" },
        { img: WineItem, title: "Wine & Beverages" },
        { img: BakeryItem, title: "Bakery Items" },
    ];

    return (
        <section className="py-5 overflow-hidden">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header d-flex flex-wrap justify-content-between mb-5">
                            <h2 className="section-title">Category</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none ">
                                    View All Categories →
                                </a>
                                <div className="swiper-buttons d-flex flex-row gap-1">
                                    <button type="button" className="category-carousel-prev swiper-prev btn btn-yellow">
                                        ❮
                                    </button>
                                    <button type="button" className="category-carousel-next swiper-next btn btn-yellow">
                                        ❯
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="category-carousel swiper">
                            <div className="swiper-wrapper">
                                {categories.map((category, index) => (
                                    <a
                                        key={index}
                                        href="index.html"
                                        className="nav-link category-item swiper-slide"
                                    >
                                        <img src={category.img} alt="Category Thumbnail" />
                                        <h3 className="category-title">{category.title}</h3>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};