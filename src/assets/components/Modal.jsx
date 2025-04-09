import { useContext, useState } from 'react';
import './../css/modal.css';
import { CartData } from './pages/Home';


export let Modal = () => {
    let { modalData, isOpen, setIsOpen } = useContext(CartData);
    console.log(modalData)
    return (<>{
        modalData.map((prod) => <div className={`modal ${isOpen ? 'd-block' : 'd-none'} position-fixed start-50 translate-middle w-sm-75 w-50`} tabIndex="-1" aria-hidden="true" key={prod.productId}>
            <div className="modal-dialog">
                <div className="modal-content rounded-4 shadow">
                    <div className="modal-header p-5 pb-4 border-bottom-0">
                        <h1 className="fw-bold mb-0 fs-2">Product Details</h1>
                        <button onClick={() => setIsOpen(setIsOpen(false))} type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-5 pt-0 d-flex flex-column gap-0">
                        <p className="productName ">{prod.title ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Description:{prod.description ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Brand: {prod.brand ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Category: {prod.category ?? 'No Information'}</p>
                        <p className='productDescription text-dark'>{`Dimensions (WxDxH): ${prod.dimensions.width}x${prod.dimensions.depth}x${prod.dimensions.height}` ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Warranty Information: {prod.warrantyInformation ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Shipping Information: {prod.shippingInformation ?? 'No Information'}</p>
                        <p className="productDescription text-dark">Return Policy: {prod.returnPolicy ?? 'No Information'}</p>
                        <p className='tags d-flex flex-row gap-2'>{prod.tags.map((tag, index) => <span className='prodTag' key={`prodTag${index + 1}`}>#{tag}</span>) ?? 'No Information'}</p>
                    </div>
                </div>
            </div>
        </div>)
    }</>)

}