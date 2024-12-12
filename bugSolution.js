import {getProduct} from '@/services/product';

export default async function ProductPage({params}){
  try{
    const product = await getProduct(params.id);
    if(!product){
      return <div>Product not found</div>;
    }
    return <div>Product: {product.name}</div>;
  } catch(error){
    console.error("Error fetching product:", error);
    return <div>Error loading product</div>;
  }
}
