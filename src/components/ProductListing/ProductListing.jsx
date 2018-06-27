import React from "react";
import Button from "react-md/lib/Buttons";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";

import "./ProductListing.scss";

class ProductListing extends React.Component {
    componentDidMount() {
        this.url = window.location.href;
        this.host = window.location.protocol + "//" + window.location.host;
    }
    render() {
        return (
            <Card className="md-grid md-cell md-cell--12 products-list">
                <CardText>
                    <ul>
                        {this.props.products.map(product => {
                            var def = {
                                id: product.sku,
                                price: product.price,
                                name: product.name,
                                image: (this.host || "") + product.image.publicURL,
                                url: this.url,
                            };
                            return (
                            <li key={product.sku}>
                                <figure>
                                    <img src={product.image.publicURL} />
                                </figure>
                                <h3>{product.name}</h3>
                                <p>
                                    <Button raised secondary className="snipcart-add-item"
                                        data-item-id={product.sku}
                                        data-item-price={product.price}
                                        data-item-name={product.name}
                                        data-item-image={def.image}
                                        data-item-url={this.url}
                                        data-snip-def={JSON.stringify(def)}>
                                        Buy for {product.price}$
                                    </Button>
                                </p>
                            </li>
                        )})}
                    </ul>
                </CardText>
            </Card>
        );
    }
}

export default ProductListing;
