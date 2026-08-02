import CategoryTable from "../components/CategoryTable";
import CategoryModal from "../components/CategoryModal";

import { useCategories } from "../hooks/useCategories";
import useCategoryModal from "../hooks/useCategoryModal";

import ConfirmModal from "../../../components/ui/ConfirmModal";
import useConfirmModal from "../../../hooks/useConfirmModal";


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



    const {

        isOpen: confirmOpen,

        config: confirmConfig,

        openConfirm,

        closeConfirm

    } = useConfirmModal();



    function handleDeleteCategory(id){

        openConfirm({

            title:"Eliminar categoría",

            message:
                "Esta acción no se puede deshacer.",

            onConfirm(){

                removeCategory(id);

                closeConfirm();

            }

        });

    }



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

                onDelete={handleDeleteCategory}

                onCreate={openCreate}

            />



            <CategoryModal

                isOpen={isModalOpen}

                onClose={closeModal}

                onAdd={addCategory}

                onEdit={editCategory}

                editingCategory={editingCategory}

            />



            <ConfirmModal

                isOpen={confirmOpen}

                title={confirmConfig?.title}

                message={confirmConfig?.message}

                onCancel={closeConfirm}

                onConfirm={confirmConfig?.onConfirm}

            />

        </div>

    );

}


export default Categories;