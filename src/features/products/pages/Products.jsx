import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

import { useProducts } from "../hooks/useProducts";

import { useCategories } from "../../categories/hooks/useCategories";


function Products() {


  const {

    products,

    addProduct,

    removeProduct

  } = useProducts();



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

      />



      <ProductList

        products={products}

        onDelete={removeProduct}

      />


    </section>

  );

}


export default Products;