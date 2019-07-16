import React, { Component } from 'react';
import "../index.css";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProductConsumer } from "../context";

export default class Product extends Component {
    render() {
       const { id, title, img, price, inCart } = this.props.product;
        return (
            <ProductWrapper>
                        <div className="card">
                            <Link to="/details">
                                <img className="card-img-top m-2 p-2" alt="product" src={img} onClick={() => console.log("clicked the image")}/>
                            </Link>
                            <div className="card-body">
                                <Link to="/details">
                                    <button className="d-inline btn btn-light">View Details</button>
                                </Link>
                                <p className="d-inline card-text float-right">Stock Id: #{id}</p>
                            </div>
                            <div className="card-footer">
                                <button 
                                    className="btn btn-dark d-inline" 
                                    disabled={inCart ? true : false} 
                                    onClick={() => { console.log('add to cart'); }}>
                                    {inCart ? (
                                        <p className="text-capitalize d-inline" disabled>
                                            {""}
                                            In Cart
                                        </p>
                                    ) : (
                                            <p className="text-capitalize d-inline fas fa-cart-plus">Add to Cart</p>
                                        )}
                                </button>
                                <p className="d-inline float-right">${price}</p>
                            </div>
                        </div>
            </ProductWrapper>
        );
    }
}

const ProductWrapper = styled.div `
.card {
    border-color: transparent;
    transition: all 1s linear;
}
.card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover {
    .card {
        border: 0.04rem solid rgba(0, 0, 0, 0.2);
        box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
        background: rgba(247, 247, 247);
    }
}
`;
