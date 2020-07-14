import React, { Component } from 'react'
import '../index.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ProductConsumer } from '../context'
import PropTypes from 'prop-types'

const Image = styled.div`
  height: 240px;
  width: 240px;
`

export default class Product extends Component {
    render() {
       const { stockId, price, image, inCart } = this.props.product;
        return (    
            <ProductWrapper>
                {console.log(this.props.product)}
                        <div className="card">
                            <Link to="/details">
                        <Image className="card-img-top m-2 p-2" alt="product" src={image} onClick={() => console.log("clicked the image")} />
                            </Link>
                            <div className="card-body">
                                <Link to="/details">
                                    <button className="d-inline btn btn-light">View Details</button>
                                </Link>
                                <p className="d-inline card-text float-right">Stock Id: #{stockId}</p>
                            </div>
                            <div className="card-footer">
                                <button 
                                    className="card-btn btn btn-dark d-inline" 
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
display: grid;
grid-template-column: 1;
grid-template-row: 4;
.card {
    border-color: transparent;
    transition: all 1s linear;
    width: 278px;
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
.card-img-top {
    position: relative;
    overflow: hidden;
}
.card-img-top:hover .card-img-top {
    transform:scale(1.2);
}
.cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    background: var(--lightBlue);
    border: none;
    color: var(--mainWhite);
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }
  .card-img-top:hover .cart-btn {
    transform: translate(0, 0);
    transition: all 1s linear;
  }
  .cart-btn:hover {
    color: var(--mainBlue);
    cursor: pointer;
  }
`;
