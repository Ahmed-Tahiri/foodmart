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
import { useEffect, useState } from "react";


export let Home = () => {
    let [products, setProducts] = useState([]);

    let fetchAPI = async () => {
        try {
            let res = await axios.get('https://dummyjson.com/products');
            setProducts(res.data.products);
        } catch (error) {
            console.log(error.message);
        }
    };


    useEffect(() => {

        fetchAPI();
    }, [])

    return (
        <>
            <Cart />
            <Header />
            <Banners />
            <CategorySlider />
            <NewArrival />
            <TrendingProducts products={products} />
            <DiscountBanners />
            <BestSellingProducts products={products} />
            <Subscription />
            <MostPpularProducts products={products} />
            <NewProducts products={products} />
            <Blogs />
            <AppAd />
            <Keywords />
            <Services />
            <Footer />
            <Copyright />
        </>
    );
}