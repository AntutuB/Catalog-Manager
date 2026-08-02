import CategoryTable from "../components/CategoryTable";
import CategoryModal from "../components/CategoryModal";

import { useCategories } from "../hooks/useCategories";
import useCategoryModal from "../hooks/useCategoryModal";


function Categories(){


    const {

        categories,

        addCategory,

        editCategory,

        removeCategory

    } = useCategories();



    const {

        isModalOpen,

        editingCategory,

        openCreate,

        openEdit,

        closeModal

    } = useCategoryModal();



    return (

        <div
            className="
                flex
                h-full
                min-h-0
                flex-col
            "
        >

            <CategoryTable

                categories={categories}

                onEdit={openEdit}

                onDelete={removeCategory}

                onCreate={openCreate}

            />



            <CategoryModal

                isOpen={isModalOpen}

                onClose={closeModal}

                onAdd={addCategory}

                onEdit={editCategory}

                editingCategory={editingCategory}

            />

        </div>

    );

}


export default Categories;