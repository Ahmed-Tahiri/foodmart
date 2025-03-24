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


export let Home = () => {

    return (
        <>
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
        </>
    );
}