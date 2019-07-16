import React, { Component } from "react"
import Product from "./Product";
import Title from "./Title";
import { ProductConsumer } from '../context';

export default class ProductList extends Component {
    render () {
        return (
            <React.Fragment>
                <div className="container">
                    <Title name="our" title="products"/>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12-sm mx-auto">
                            <ProductConsumer>
                                {value => {
                                    return value.products.map( product => {
                                        return <Product key={product.id} product={product} />
                                    })
                                }}
                            </ProductConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}