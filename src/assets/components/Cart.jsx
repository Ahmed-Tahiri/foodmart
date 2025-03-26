import { useContext } from "react";
import { CartData } from "./pages/Home";

export let Cart = () => {



    let { cartProducts, setCartProducts } = useContext(CartData);
    return (
        <div
            className="offcanvas offcanvas-end"
            data-bs-scroll="true"
            tabIndex="-1"
            id="offcanvasCart"
            aria-labelledby="offcanvasCartLabel"
            aria-modal="true"
            role="dialog"
        >
            <div className="offcanvas-header justify-content-center">
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="offcanvas"
                    aria-label="Close"
                ></button>
            </div>
            <div className="offcanvas-body">
                <div className="order-md-last">
                    <h4 className="d-flex justify-content-between align-items-center mb-3">
                        <span className="text-primary">Your cart</span>
                        <span className="badge bg-primary rounded-pill">{cartProducts.length}</span>
                    </h4>
                    <ul className="list-group mb-3">
                        {cartProducts.map((product, index) => <li className="list-group-item d-flex justify-content-between lh-sm" key={`cart${index + 1}`}>
                            <div>
                                <h6 className="my-0">{product.title}</h6>
                                <small className="text-body-secondary"></small>
                            </div>
                            <span className="text-body-secondary">${product.price}</span>
                        </li>)}

                        <li className="list-group-item d-flex justify-content-between">
                            <span>Total (USD)</span>
                            <strong>${cartProducts.reduce((acc, prod) => acc + prod.price, 0).toFixed(2)}</strong>
                        </li>
                    </ul>

                    <button className="w-100 btn btn-primary btn-lg" type="submit">
                        Continue to checkout
                    </button>
                </div>
            </div>
        </div>
    );
};
