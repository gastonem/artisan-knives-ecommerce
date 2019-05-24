import React, { Component } from 'react'

export default class Product extends Component {
    render () {
        return (
            <div className="col-3">
                <div className="card">
                    <h3>Pairing Knife</h3>
                    <p>Excellent for cooking</p>
                    <img alt="Pairing Knife" src={'./img/couplesknives.jpg'} />
                </div>
            </div>
        )
    }
}