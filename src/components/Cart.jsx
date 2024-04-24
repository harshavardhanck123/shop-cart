import React, { Component } from 'react'

export class Cart extends Component {
    render() {

        return (
            <div>
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                
                    <div className="text-center">
                    {this.props.isInCart ? (<a className="btn btn-outline-dark mt-auto "  onClick={() => this.props.addToCart(this.props.item)}href="#">Remove from cart</a>):(<a className="btn btn-outline-dark mt-auto " onClick={() => this.props.addToCart(this.props.item)}href="#">Add to cart</a>)}
                    </div>
                </div>
            </div>

        )
    }
}

export default Cart