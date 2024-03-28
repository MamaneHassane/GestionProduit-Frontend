interface Product {
  productId : number,
  productName : string,
  productDescription : string,
  productImageUrl : string
}

interface ProductDto {
  productName : string,
  productDescription : string,
  productImageUrl : string
}

export {
  Product,
  ProductDto
}
