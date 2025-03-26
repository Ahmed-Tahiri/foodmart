import { IoMdHeartEmpty } from 'react-icons/io';
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { useState } from 'react';
export let ProductCard = ({ title, rating, images, discountPercentage, price }) => {

    let [productPrice, setProductPrice] = useState(price);
    let [unitVal, setUnitVal] = useState(0);
    let [unit, setUnit] = useState(1);
    let minusHandler = () => {
        if (unitVal > 0) {
            setUnitVal((prevVal) => prevVal - 1);
        }
        if (unit > 1) {
            setUnit((prevVal) => prevVal - 1);
        }
        if (productPrice > price) {
            setProductPrice((prevVal) => prevVal - price);

        }
    }
    let plusHandler = () => {
        setProductPrice((prevVal) => prevVal + price);
        setUnitVal((prev) => prev + 1);
        setUnit((prevVal) => prevVal + 1);

    }

    let addToCartHandler = () => {


    };
    return (
        <div className="col">
            <div className="product-item">
                <span className="badge bg-success position-absolute m-3">-{discountPercentage}%</span>
                <a href="#" className="btn-wishlist"><IoMdHeartEmpty className='fs-3' /></a>
                <figure>
                    <a href="index.html" title="Product Title">
                        <img src={images} className="tab-image" />
                    </a>
                </figure>
                <h3>{title}</h3>
                <span className="qty">{unit} Unit</span><span className="rating"><FaStar className='fs-6 mb-1 mx-1 RatingStar' /> {rating}</span>
                <span className="price">{productPrice.toFixed(2)}</span>
                <div className="d-flex align-items-center justify-content-between">
                    <div className="input-group product-qty">
                        <span className="input-group-btn">
                            <button onClick={minusHandler} type="button" className="quantity-left-minus btn btn-danger btn-number"
                                data-type="minus">
                                <FaMinus />
                            </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value={unitVal} onChange={() => unitVal} />
                        <span className="input-group-btn">
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" onClick={plusHandler}
                                data-type="plus">
                                <FaPlus />
                            </button>
                        </span>
                    </div>
                    <button onClick={addToCartHandler} className="nav-link">Add to Cart</button>
                </div>
            </div>
        </div>
    )

}