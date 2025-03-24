import { useEffect } from "react";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import BananaThumb from './../images/thumb-bananas.png';
import BiscuitsThumb from './../images/thumb-biscuits.png';
import AvocadeThumb from './../images/thumb-avocado.png';
import CucumberThumb from './../images/thumb-cucumber.png';
import HerbThumb from './../images/thumb-herb.jpg';
import HoneyThumb from './../images/thumb-honey.jpg';
import MilkThumb from './../images/thumb-milk.png';
import TomatoesThumb from './../images/thumb-tomatoes.png';
import TomatoeKetchupThumb from './../images/thumb-tomatoketchup.png';
import OrangeJuiceThumb from './../images/thumb-orange-juice.png';
import RaspberriesThumb from './../images/thumb-raspberries.png';
import TunaThumb from './../images/thumb-tuna.jpg';
import { ProductCard } from './ProductCard';

export let BestSellingProducts = () => {


    let products = [
        {
            id: 1,
            name: 'Sunstar Fresh Melon Juice',
            rating: '4.5',
            price: '$18.00',
            img: BananaThumb,
            discount: '-30%',
            unit: '1 Unit'
        },

        {
            id: 2,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 3,
            name: 'Crunchy Cookies',
            rating: '4.9',
            price: '$24.00',
            img: BiscuitsThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 4,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 5,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 6,
            name: 'Sunstar Fresh Melon Juice',
            rating: '4.5',
            price: '$18.00',
            img: BananaThumb,
            discount: '-30%',
            unit: '1 Unit'
        },

        {
            id: 7,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 8,
            name: 'Crunchy Cookies',
            rating: '4.9',
            price: '$24.00',
            img: BiscuitsThumb,
            discount: '',
            unit: '1 Unit'
        },
        {
            id: 9,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 10,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },
    ];
    useEffect(() => {
        new Swiper(".best-products-carousel", {
            modules: [Navigation],
            navigation: {
                nextEl: ".best-products-carousel-next",
                prevEl: ".best-products-carousel-prev",
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
                            <h2 className="section-title">Best Selling Products</h2>
                            <div className="d-flex align-items-center">
                                <a href="#" className="btn-link text-decoration-none">View All Categories →</a>
                                <div className="swiper-buttons">
                                    <button className="swiper-prev products-carousel-prev best-products-carousel-prev btn btn-primary">❮</button>
                                    <button className="swiper-next products-carousel-next best-products-carousel-next btn btn-primary">❯</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="products-carousel best-products-carousel swiper">
                            <div className="swiper-wrapper">
                                {products.map((product, index) => {
                                    return <div className="swiper-slide">
                                        <ProductCard {...product} key={product.id} />
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
