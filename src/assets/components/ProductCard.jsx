import { IoMdHeartEmpty } from 'react-icons/io';
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { useState } from 'react';
export let ProductCard = ({ name, rating, img, discount, price }) => {

    let [unitVal, setUnitVal] = useState(0);
    let minusHandler = () => {
        if (unitVal > 0) {
            setUnitVal((prevVal) => prevVal - 1);
        }
    }
    return (
        <div className="col">
            <div className="product-item">
                <span className="badge bg-success position-absolute m-3">{discount}</span>
                <a href="#" className="btn-wishlist"><IoMdHeartEmpty className='fs-3' /></a>
                <figure>
                    <a href="index.html" title="Product Title">
                        <img src={img} className="tab-image" />
                    </a>
                </figure>
                <h3>{name}</h3>
                <span className="qty">1 Unit</span><span className="rating"><FaStar className='fs-6 mb-1 mx-1 RatingStar' /> {rating}</span>
                <span className="price">{price}</span>
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
                            <button type="button" className="quantity-right-plus btn btn-success btn-number" onClick={() => setUnitVal((prev) => prev + 1)}
                                data-type="plus">
                                <FaPlus />
                            </button>
                        </span>
                    </div>
                    <a href="#" className="nav-link">Add to Cart</a>
                </div>
            </div>
        </div>
    )

}