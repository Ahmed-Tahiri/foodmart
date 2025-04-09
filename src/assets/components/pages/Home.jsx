import axios from "axios";
import { Banners } from "../Banner";
import { Header } from "../Header"
import { CategorySlider } from "../Category";
import { NewArrival } from "../NewArrival";
import { TrendingProducts } from "../TrendingProducts";
import { DiscountBanners } from "../DiscountBanners";
import { BestSellingProducts } from "../BestSellingProducts";
import { Subscription } from "../Subscription";
import { MostPpularProducts } from "../mostPopularProducts";
import { NewProducts } from "../NewProducts";
import { Blogs } from "../Blogs";
import { AppAd } from "../AppAd";
import { Keywords } from "../Keywords";
import { Services } from "../Services";
import { Footer } from "../Footer";
import { Copyright } from "../CopyrightText";
import { Cart } from "../Cart";
import { createContext, useContext, useEffect, useState } from "react";
import { Modal } from "../modal";

export const CartData = createContext();
export let CartProvider = ({ children }) => {
    let [products, setProducts] = useState([]);
    let [cartProducts, setCartProducts] = useState([]);
    let [isOpen, setIsOpen] = useState(false);
    let [modalData, setModalData] = useState([]);

    let fetchAPI = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products');
            let newProducts = res.data.products.map((prod) => ({
                ...prod,
                productId: `prod${Math.floor(Math.random() * 9999999) + 1}`,
            }));
            setProducts(newProducts);
        } catch (error) {
            console.log('Error Message: ' + error.message);
        }
    };
    useEffect(() => {
        fetchAPI();
    }, []);


    return <CartData.Provider value={{ products, cartProducts, setCartProducts, isOpen, setIsOpen, modalData, setModalData }}>{children}</CartData.Provider>;

};
export let Home = () => {


    return (
        <>
            <CartProvider>
                <Cart />
                <Header />
                <Banners />
                <CategorySlider />
                <NewArrival />
                <Modal />
                <TrendingProducts />
                <DiscountBanners />
                <BestSellingProducts />
                <Subscription />
                <MostPpularProducts />
                <NewProducts />
                <Blogs />
                <AppAd />
                <Keywords />
                <Services />
                <Footer />
                <Copyright />
            </CartProvider>
        </>
    );
}