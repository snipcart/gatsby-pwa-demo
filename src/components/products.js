import React from "react"

const Products = (props) => {
    const { products } = props;
    return (
      <div className="products">
        {products.map(product =>{
          return (
            <article>
              <img style={{margin: 0}}
                src={product.image.publicURL}
                alt={product.name} />
              <button className="snipcart-add-item"
                data-item-id={product.sku}
                data-item-name={product.name}
                data-item-price={product.price}
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
