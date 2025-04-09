import { CartData } from "./pages/Home";
import { useContext } from "react";
import { GoPerson } from "react-icons/go";
import { IoMdHeartEmpty } from "react-icons/io";
import { HiShoppingCart } from "react-icons/hi";
import MartLogo from './../images/logo.png';
export let Header = () => {
    let { cartProducts } = useContext(CartData);
    return (
        <header>
            <div className="container-fluid">
                <div className="row py-3 border-bottom">
                    <div className="col-sm-4 col-lg-3 text-center text-sm-start">
                        <div className="main-logo">
                            <a href="index.html">
                                <img src={MartLogo} alt="logo" className="img-fluid" />
                            </a>
                        </div>
                    </div>

                    <div className="col-sm-6 offset-sm-2 offset-md-0 col-lg-5 d-none d-lg-block">
                        <div className="search-bar row bg-light p-2 my-2 rounded-4">
                            <div className="col-md-4 d-none d-md-block">
                                <select className="form-select border-0 bg-transparent">
                                    <option>All Categories</option>
                                    <option>Groceries</option>
                                    <option>Drinks</option>
                                    <option>Chocolates</option>
                                </select>
                            </div>
                            <div className="col-11 col-md-7">
                                <form id="search-form" className="text-center" action="index.html" method="post">
                                    <input
                                        type="text"
                                        className="form-control border-0 bg-transparent"
                                        placeholder="Search for more than 20,000 products"
                                    />
                                </form>
                            </div>
                            <div className="col-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                    <path
                                        fill="currentColor"
                                        d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39ZM11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7Z"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8 col-lg-4 d-flex justify-content-end gap-5 align-items-center mt-4 mt-sm-0 justify-content-center justify-content-sm-end">


                        <ul className="d-flex justify-content-end list-unstyled m-0">
                            <li>
                                <a href="#" className="rounded-circle bg-light p-2 mx-1 navLogo">
                                    <GoPerson className="fs-3 fw-bold" />
                                </a>
                            </li>
                            <li>
                                <a href="#" className="rounded-circle bg-light p-2 mx-1 navLogo">
                                    <IoMdHeartEmpty className="fs-3 fw-bold" />
                                </a>
                            </li>
                            <li className="d-lg-none" id="shoppingCartIcon">
                                <a href="#" className="rounded-circle bg-light p-2 mx-1 navLogo" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
                                    <HiShoppingCart className="fs-3 fw-bold" />
                                </a>
                            </li>
                        </ul>

                        <div className="cart text-end d-none d-lg-block dropdown">
                            <button className="border-0 bg-transparent d-flex flex-column gap-2 lh-1" id="cartViewBtn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasCart">
                                <span className="fs-6 text-muted dropdown-toggle">Your Cart</span>
                                <span className="cart-total fs-5 fw-bold">${cartProducts.reduce((acc, prod) => acc + prod.price, 0).toFixed(2)}</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row py-3">
                    <nav className="navbar navbar-expand-lg d-flex justify-content-center">
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="offcanvas offcanvas-end w-100 px-2" id="offcanvasNavbar">
                            <div className="offcanvas-header justify-content-center">
                                <button type="button" className="btn-close" data-bs-dismiss="offcanvas"></button>
                            </div>
                            <div className="offcanvas-body">
                                <select className="filter-categories border-0 mb-0 me-5">
                                    <option>Shop by Departments</option>
                                    <option>Groceries</option>
                                    <option>Drinks</option>
                                    <option>Chocolates</option>
                                </select>

                                <ul className="navbar-nav justify-content-end list-unstyled d-flex gap-md-3 mb-0">
                                    <li className="nav-item active">
                                        <a href="#women" className="nav-link">Women</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#men" className="nav-link">Men</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#kids" className="nav-link">Kids</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#accessories" className="nav-link">Accessories</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown">
                                            Pages
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><a href="index.html" className="dropdown-item">About Us</a></li>
                                            <li><a href="index.html" className="dropdown-item">Shop</a></li>
                                            <li><a href="index.html" className="dropdown-item">Single Product</a></li>
                                            <li><a href="index.html" className="dropdown-item">Cart</a></li>
                                            <li><a href="index.html" className="dropdown-item">Checkout</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#brand" className="nav-link">Brand</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#sale" className="nav-link">Sale</a>
                                    </li>
                                    <li className="nav-item">
                                        <a href="#blog" className="nav-link">Blog</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
};
