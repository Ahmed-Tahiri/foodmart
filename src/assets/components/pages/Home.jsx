import { Banners } from "../Banner";
import { Header } from "../Header"
import { CategorySlider } from "../Category";


export let Home = () => {

    return (
        <>
            <Header />
            <Banners />
            <CategorySlider />
        </>
    );
}