import React from "react";
import Button from "react-md/lib/Buttons";
import Card from "react-md/lib/Cards";
import CardText from "react-md/lib/Cards/CardText";

import config from "../../../data/SiteConfig";

import "./ProductListing.scss";

class ProductListing extends React.Component {
    render() {
        var postUrl =
            config.siteUrl +
            config.pathPrefix +
            (this.props.path[0] === "/" ? this.props.path.substr(1) : this.props.path);
        return (
            <Card className="md-grid md-cell md-cell--12 products-list">
                <CardText>
                    <ul>
                        {this.props.products.map(product => {
                            var def = {
                                id: product.sku,
                                price: product.price,
                                name: product.name,
                                image: config.siteUrl + product.image.publicURL,
                                url: postUrl,
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
                                        data-item-url={def.url}
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
