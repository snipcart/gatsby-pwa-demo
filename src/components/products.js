import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Products = (props) => {
    const { products } = props;

    const {site} = useStaticQuery(graphql`
        query ConfigQuery {
            site {
                siteMetadata {
                    siteUrl
                }
            }
        }
    `)

    return (
      <div className="products">
        {products.map(product =>{
          return (
            <article key={product.sku}>
              <img style={{margin: 0}}
                src={product.image.publicURL}
                alt={product.name} />
              <button className="snipcart-add-item"
                data-item-id={product.sku}
                data-item-name={product.name}
                data-item-price={product.price}
                data-item-url={site.siteMetadata.siteUrl}
                >${product.price}</button>
              <p className="product-name">
                {product.name}
              </p>
            </article>
          )
        })}
      </div>
    )
}

export default Products
