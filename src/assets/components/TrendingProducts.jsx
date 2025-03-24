import BananaThumb from './../images/thumb-bananas.png';
import BiscuitsThumb from './../images/thumb-biscuits.png';
import AvocadeThumb from './../images/thumb-avocado.png';
import CucumberThumb from './../images/thumb-cucumber.png';
import HerbThumb from './../images/thumb-herb.jpg';
import HoneyThumb from './../images/thumb-honey.jpg';
import MilkThumb from './../images/thumb-milk.png';
import TomatoesThumb from './../images/thumb-tomatoes.png';
import TomatoeKetchupThumb from './../images/thumb-tomatoketchup.png';
import OrangeJuiceThumb from './../images/thumb-orange-juice.png';
import RaspberriesThumb from './../images/thumb-raspberries.png';
import TunaThumb from './../images/thumb-tuna.jpg';
import { ProductCard } from './ProductCard';


export let TrendingProducts = () => {



    let Products = [

        {
            id: 1,
            name: 'Sunstar Fresh Melon Juice',
            rating: '4.5',
            price: '$18.00',
            img: BananaThumb,
            discount: '-30%',
            unit: '1 Unit'
        },

        {
            id: 2,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 3,
            name: 'Crunchy Cookies',
            rating: '4.9',
            price: '$24.00',
            img: BiscuitsThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 4,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 5,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 6,
            name: 'Sunstar Fresh Melon Juice',
            rating: '4.5',
            price: '$18.00',
            img: BananaThumb,
            discount: '-30%',
            unit: '1 Unit'
        },

        {
            id: 7,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },

        {
            id: 8,
            name: 'Crunchy Cookies',
            rating: '4.9',
            price: '$24.00',
            img: BiscuitsThumb,
            discount: '',
            unit: '1 Unit'
        },
        {
            id: 9,
            name: 'Fresh Cucumber',
            rating: '4',
            price: '$8.00',
            img: CucumberThumb,
            discount: '-40%',
            unit: '1 Unit'
        },

        {
            id: 10,
            name: 'Powder Milk',
            rating: '4.3',
            price: '$15.00',
            img: MilkThumb,
            discount: '',
            unit: '1 Unit'
        },


    ]


    return <section className="py-5">
        <div className="container-fluid">

            <div className="row">
                <div className="col-md-12">

                    <div className="bootstrap-tabs product-tabs">
                        <div className="tabs-header d-flex justify-content-between border-bottom my-5">
                            <h3>Trending Products</h3>
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <a href="#" className="nav-link text-uppercase fs-6 active" id="nav-all-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-all">All</a>
                                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-fruits-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-fruits">Fruits & Veges</a>
                                    <a href="#" className="nav-link text-uppercase fs-6" id="nav-juices-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-juices">Juices</a>
                                </div>
                            </nav>
                        </div>
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">

                                <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">
                                    {Products.map((product, index) => <ProductCard {...product} key={product.id} />)}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
}






// <div className="tab-pane fade" id="nav-fruits" role="tabpanel" aria-labelledby="nav-fruits-tab">

// <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

//     <div className="col">
//         <div className="product-item">
//             <span className="badge bg-success position-absolute m-3">-30%</span>
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={CucumberThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <span className="badge bg-success position-absolute m-3">-30%</span>
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={MilkThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <span className="badge bg-success position-absolute m-3">-30%</span>
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={OrangeJuiceThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={RaspberriesThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={BananaThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={BananaThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

// </div>
// {/* <!-- / product-grid --> */}

// </div>
// <div className="tab-pane fade" id="nav-juices" role="tabpanel" aria-labelledby="nav-juices-tab">

// <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5">

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={CucumberThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={MilkThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={TomatoesThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={TomatoeKetchupThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={BananaThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

//     <div className="col">
//         <div className="product-item">
//             <a href="#" className="btn-wishlist"><IoMdHeartEmpty /></a>
//             <figure>
//                 <a href="index.html" title="Product Title">
//                     <img src={BananaThumb} className="tab-image" />
//                 </a>
//             </figure>
//             <h3>Sunstar Fresh Melon Juice</h3>
//             <span className="qty">1 Unit</span><span className="rating"><FaStar /> 4.5</span>
//             <span className="price">$18.00</span>
//             <div className="d-flex align-items-center justify-content-between">
//                 <div className="input-group product-qty">
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-left-minus btn btn-danger btn-number"
//                             data-type="minus">
//                             <FaMinus />
//                         </button>
//                     </span>
//                     <input type="text" id="quantity" name="quantity" className="form-control input-number" value="1" />
//                     <span className="input-group-btn">
//                         <button type="button" className="quantity-right-plus btn btn-success btn-number"
//                             data-type="plus">
//                             <FaPlus />
//                         </button>
//                     </span>
//                 </div>
//                 <a href="#" className="nav-link">Add to Cart <iconify-icon icon="uil:shopping-cart" /></a>
//             </div>
//         </div>
//     </div>

// </div>
// {/* <!-- / product-grid --> */}

// </div>

// </div >
// </div >