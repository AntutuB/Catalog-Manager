import CategoryForm from "../components/CategoryForm";
import CategoryList from "../components/CategoryList";

import { useCategories } from "../hooks/useCategories";


function Categories() {


  const {
  categories,
  addCategory,
  editCategory,
  removeCategory
} = useCategories();



  return (

    <section>

      <h2>
        Categorías
      </h2>


      <CategoryForm
        onAdd={addCategory}
      />


      <CategoryList
  categories={categories}
  onDelete={removeCategory}
  onEdit={editCategory}
/>


    </section>

  );

}


export default Categories;