import React from 'react';
import Product from './Product';

function Products() {
  var products = [
    {
      title: "arqitel",
      description: "arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false
    },
    {
      title: "TTR",
      description: "arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false
    },
    {
      title: "YIR 2022",
      description: "arqu Executive and its employees continue to receive orders for customers and customers that get orders for customers that",
      live: true,
      case: false
    },
    {
      title: "Yahoo!",
      description: "arqu Executive and its employees continue to receive orders for customers ",
      live: true,
      case: true
    }
  ];

  return (
    <div>
    {products.map((product, index) => (
        <Product 
          key={index} 
          title={product.title} 
          description={product.description} 
          live={product.live} 
          case={product.case} 
        />
    ))}
    </div>
  );
}

export default Products;
