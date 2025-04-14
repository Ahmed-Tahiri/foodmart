import React, { useContext, useEffect, useRef, useState } from 'react';
import { FaStarHalf, FaStar } from "react-icons/fa6";
import Swiper from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { CartData } from './pages/Home';
import './../css/modal.css';
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/styles.min.css'


export let Modal = () => {
    let { modalData, isOpen, setIsOpen } = useContext(CartData);
    const modalReviewSwiper = useRef(null);
    const modalImgSwiper = useRef(null);
    let [zoomImg, setZoomImg] = useState('');
    let getImage = (src) => { setZoomImg(src) }
    useEffect(() => {
        if (isOpen && modalReviewSwiper.current) {
            new Swiper(modalReviewSwiper.current, {
                modules: [Navigation],
                spaceBetween: 30,
                slidesPerView: 2,
                speed: 500,
                navigation: {
                    nextEl: ".review-carousel-next",
                    prevEl: ".review-carousel-prev",
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1
                    },
                    768: {
                        slidesPerView: 2
                    }
                }
            });
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && modalImgSwiper.current) {
            new Swiper(modalImgSwiper.current, {
                modules: [Navigation],
                spaceBetween: 100,
                direction: 'vertical',
                slidesPerView: 5,
                speed: 500,
                navigation: {
                    nextEl: ".img-carousel-next",
                    prevEl: ".img-carousel-prev",
                },
                breakpoints: {
                    576: {
                        spaceBetween: 50
                    },
                    768: {
                        spaceBetween: 60
                    },
                    998: {
                        spaceBetween: 70
                    },
                    1200: {
                        spaceBetween: 80
                    },
                    1400: {
                        spaceBetween: 90
                    },
                    1500: {
                        spaceBetween: 120
                    },
                }
            });

        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen && modalData.length > 0 && modalData[0].images?.length > 0) {
            setZoomImg(modalData[0].images[0]);
        }
    }, [isOpen]);
    let closeBtnHandler = () => {
        setIsOpen(false);
        setZoomImg(null);
    }

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<FaStar key={`star-full-${i}`} className="ratingStar" />);
        }

        if (hasHalfStar) {
            stars.push(<FaStarHalf key="star-half" className="ratingStar" />);
        }

        return stars;
    };

    return (
        <>
            {modalData.map((prod) => <div
                className={`modal modalMain ${isOpen ? 'd-block' : 'd-none'} position-fixed start-50 translate-middle overflow-hidden`}
                tabIndex="-1"
                key={prod.productId}>
                <div className="modal-dialog">
                    <div className="modal-content rounded-4 shadow">
                        <div className="modal-header p-5 pb-4 border-bottom-0">
                            <h1 className="fw-bold mb-0 fs-2">Product Details</h1>
                            <button
                                onClick={closeBtnHandler}
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="modalTextContent modal-body p-sm-2 p-md-5 pt-0 d-flex flex-column gap-0 overflow-y-scroll">
                            <div className='productImages d-flex flex-column'>
                                <div className='imagesTop d-flex flex-row justify-content-between'>
                                    <h4>Images</h4>
                                    <div className='imagesBtns d-flex flex-row gap-2'>
                                        <button className="swiper-prev img-carousel-prev btn btn-yellow">❮</button>
                                        <button className="swiper-next img-carousel-next btn btn-yellow">❯</button>
                                    </div>
                                </div>
                                <div className='d-flex flex-row w-100'>
                                    <div className='swiper-container prodImgsContainer d-flex flex-row gap-1 overflow-hidden' ref={modalImgSwiper}>
                                        <div className='swiper-wrapper'>
                                            {prod.images.map((img, index) => (
                                                <div className='swiper-slide' key={`image-${index + 1}`}>
                                                    <img onClick={() => getImage(img)} src={img} width='100px' height='100px' />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    <InnerImageZoom src={zoomImg} width={440} zoomType="hover" zoomPreload={true} zoomScale={0.4} className='ms-5' />
                                </div>

                            </div>
                            <p className="productName">{prod.title ?? 'No Information'}</p>
                            <p className="productDescription text-dark">Description: {prod.description ?? 'No Information'}</p>
                            <p className="productDescription text-dark">Brand: {prod.brand ?? 'No Information'}</p>
                            <p className="productDescription text-dark">Category: {prod.category ?? 'No Information'}</p>
                            <p className='productDescription text-dark'>
                                {`Dimensions (WxDxH): ${prod.dimensions.width}x${prod.dimensions.depth}x${prod.dimensions.height}` ?? 'No Information'}
                            </p>
                            <p className="productDescription text-dark">Warranty Information: {prod.warrantyInformation ?? 'No Information'}</p>
                            <p className="productDescription text-dark">Shipping Information: {prod.shippingInformation ?? 'No Information'}</p>
                            <p className="productDescription text-dark">Return Policy: {prod.returnPolicy ?? 'No Information'}</p>
                            <p className='tags d-flex flex-row gap-2'>
                                {prod.tags && prod.tags.length > 0 ? prod.tags.map((tag, index) => (<span className='prodTag' key={`prodTag${index + 1}`}>#{tag}</span>)) : 'No Information'}
                            </p>
                            <div className='reviewsMainContainer d-flex flex-column'>
                                <div className='reviewTop d-flex flex-row justify-content-between'>
                                    <h4>Reviews</h4>
                                    <div className='reviewBtns d-flex flex-row gap-2'>
                                        <button className="swiper-prev review-carousel-prev btn btn-yellow">❮</button>
                                        <button className="swiper-next review-carousel-next btn btn-yellow">❯</button>
                                    </div>
                                </div>
                                <div className='swiper-container reviewsContainer d-flex flex-row gap-1 overflow-x-hidden' ref={modalReviewSwiper}>
                                    <div className='swiper-wrapper'>
                                        {prod.reviews.map((review, indx) => (
                                            <div className='swiper-slide' key={`review-${indx}`}>
                                                <div className='reviewCard mt-2 border border-dark border-1 p-1 rounded-3'>
                                                    <div className='userDetails d-flex flex-column'>
                                                        <p className='reviewerName'>{review.reviewerName}</p>
                                                        <p className='reviewerEmail'>{review.reviewerEmail}</p>
                                                    </div>
                                                    <p className='text-dark userComment'>{review.comment}</p>
                                                    <p className='text-dark'>{renderStars(review.rating)}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            )}
        </>
    );
};
