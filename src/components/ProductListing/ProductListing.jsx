import React from "react";
import Button from "react-md/lib/Buttons";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";

import "./ProductListing.scss";

class ProductListing extends React.Component {
    render() {
        return (
            <Card className="md-grid md-cell md-cell--12 products-list">
                <CardText>
                    <ul>
                        {this.props.products.map(product => (
                            <li>
                                <figure>
                                    <img src={product.image.publicURL} />
                                </figure>
                                <h3>{product.name}</h3>
                                <p>
                                    <Button raised secondary className="snipcart-add-item"
                                        data-item-id={product.sku}
                                        data-item-price={product.price}
                                        data-item-name={product.name}>
                                        Buy for {product.price}$
                                    </Button>
                                </p>
                            </li>
                        ))}
                    </ul>
                </CardText>
            </Card>
        );
    }
}

export default ProductListing;
