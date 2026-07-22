import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

import { useProducts } from "../hooks/useProducts";

import { useCategories } from "../../categories/hooks/useCategories";

import { useState } from "react";


function Products() {


  const {

  products,

  addProduct,

  editProduct,

  removeProduct

} = useProducts();

const [editingProduct, setEditingProduct] = useState(null);

  const {

    categories

  } = useCategories();



  return (

    <section>


      <h2>
        Productos
      </h2>



      <ProductForm

  categories={categories}

  onAdd={addProduct}

  onEdit={editProduct}

  editingProduct={editingProduct}

  cancelEdit={()=>
    setEditingProduct(null)
  }

/>



      <ProductList

  products={products}

  onDelete={removeProduct}

  onEdit={setEditingProduct}

/>


    </section>

  );

}


export default Products;