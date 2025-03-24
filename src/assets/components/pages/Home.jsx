import { Banners } from "../Banner";
import { Header } from "../Header"
import { CategorySlider } from "../Category";
import { NewArrival } from "../NewArrival";


export let Home = () => {

    return (
        <>
            <Header />
            <Banners />
            <CategorySlider />
            <NewArrival />
        </>
    );
}