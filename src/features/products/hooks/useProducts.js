import { useEffect, useState } from "react";


import {
  getProducts,
  createProduct,
  updateProduct,
  deleteProduct
} from "../services/productService";



export function useProducts(){


  const [products, setProducts] = useState([]);



  async function loadProducts(){

    const data = await getProducts();

    setProducts(data);

  }



  async function addProduct(product){

    await createProduct(product);

    await loadProducts();

  }



  async function editProduct(id, data){

    await updateProduct(id, data);

    await loadProducts();

  }



  async function removeProduct(id){

    await deleteProduct(id);

    await loadProducts();

  }



  useEffect(()=>{

    loadProducts();

  },[]);



  return {

    products,

    addProduct,

    editProduct,

    removeProduct

  };


}