import React, { Component } from "react"


class Products extends Component<any, any>{

    
    render() {
        console.log(this.props.products)
        return (
            <div>
                <ul className="products">
                    {
                        this.props.products.map((product: any) => {
                            return (
                                <li key={product._id}>
                                    <div className="product">
                                        <img src={product.image} alt="dress" />
                                        <p>
                                            {product.title}
                                        </p>
                                        <div className="product-price">
                                            <span>{product.price}</span>
                                            <button className="button primary">Add To Cart</button>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )

    }

}


export default Products