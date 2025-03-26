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
import { useEffect } from "react";


export let Home = () => {


    let fetchAPI = () => { };


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
        </>
    );
}