import { Banners } from "../Banner";
import { Header } from "../Header"
import { CategorySlider } from "../Category";
import { NewArrival } from "../NewArrival";
import { TrendingProducts } from "../TrendingProducts";
import { DiscountBanners } from "../DiscountBanners";
import { BestSellingProducts } from "../BestSellingProducts";


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
        </>
    );
}