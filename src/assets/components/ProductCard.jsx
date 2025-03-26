import { IoMdHeartEmpty } from 'react-icons/io';
import { FaPlus, FaMinus, FaStar } from "react-icons/fa6";
import { useId, useState } from 'react';
export let ProductCard = ({ title, rating, images, productId, discountPercentage, price, setCartProducts, productsArr }) => {
    let [productPrice, setProductPrice] = useState(price);
    let [unitVal, setUnitVal] = useState(0);
    let [unit, setUnit] = useState(1);
    let minusHandler = () => {
        if (unitVal > 0) { setUnitVal((prevVal) => prevVal - 1); }
        if (productPrice > price) {
            setProductPrice((prevVal) => prevVal - price);
            if (unit > 1) {
                setUnit((prev) => prev - 1);
            }
        }
    }
    let plusHandler = () => {
        setUnitVal((prev) => prev + 1);
        if (unitVal >= 1) {
            setUnit((prev) => prev + 1);
            setProductPrice((prevVal) => prevVal + price);
        }
    }

    let shakeAnimation = () => {

        let cartBtn = document.getElementById('cartViewBtn');
        cartBtn.classList.add('shakeEffect');
        if (cartBtn.classList.contains('shakeEffect')) {
            setTimeout(() => { cartBtn.classList.remove('shakeEffect') }, 500)
        }
        let navCartBtn = document.querySelector('#shoppingCartIcon');
        navCartBtn.classList.add('shakeEffect');
        if (navCartBtn.classList.contains('shakeEffect')) {
            setTimeout(() => { navCartBtn.classList.remove('shakeEffect') }, 500)
        }
    }

    let addToCartHandler = (prodId) => {
        if (unitVal >= 1) {
            let selectedProduct = productsArr.find((product) => product.productId === prodId);
            if (selectedProduct) {
                let newProducts = [];
                for (let i = 0; i < unitVal; i++) {
                    let id = Math.floor(Math.random() * 9999999) + 1;
                    let newProduct = structuredClone(selectedProduct);
                    newProduct.orderId = `order${id}`;
                    newProducts.push(newProduct);
                }
                setCartProducts((prevVal) => [...prevVal, ...newProducts]);
            }
            shakeAnimation();
        }
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
                <span className="price">${productPrice.toFixed(2)}</span>
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
                    <button onClick={() => addToCartHandler(productId)} className="btn text-dark border border-dark border-3 rounded-5 px-2">Add to Cart</button>
                </div>
            </div>
        </div>
    )

}