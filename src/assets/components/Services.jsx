import SecureSVG from './../images/secureSVG.svg';
import GiftsSVG from './../images/offers.svg';
import CartSVG from './../images/foodmartSVG.svg';
import QualitySVG from './../images/qualitySVG.svg';
import SavingsSVG from './../images/savings.svg'

export let Services = () => {

    let servicesData = [
        {
            title: "Free delivery",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            icon: CartSVG
        },
        {
            title: "100% secure payment",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            icon: SecureSVG
        },
        {
            title: "Quality guarantee",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            icon: QualitySVG
        },
        {
            title: "Guaranteed savings",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            icon: SavingsSVG
        },
        {
            title: "Daily offers",
            description: "Lorem ipsum dolor sit amet, consectetur adipi elit.",
            icon: GiftsSVG
        }
    ];


    return (
        <section className="py-5">
            <div className="container-fluid">
                <div className="row row-cols-1 row-cols-sm-3 row-cols-lg-5">
                    {servicesData.map((service, index) => (
                        <div className="col" key={index}>
                            <div className="card mb-3 border-0">
                                <div className="row">
                                    <div className="col-md-2 text-dark">
                                        <img src={service.icon} alt='Serivces Icon' />
                                    </div>
                                    <div className="col-md-10">
                                        <div className="card-body p-0">
                                            <h5>{service.title}</h5>
                                            <p className="card-text">{service.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
