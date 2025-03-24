import { Banners } from "../Banner";
import { Header } from "../Header"
import { CategorySlider } from "../Category";
import { NewArrival } from "../NewArrival";
import { TrendingProducts } from "../TrendingProducts";
import { DiscountBanners } from "../DiscountBanners";


export let Home = () => {

    return (
        <>
            <Header />
            <Banners />
            <CategorySlider />
            <NewArrival />
            <TrendingProducts />
            <DiscountBanners />
        </>
    );
}