function SectionTabs({
    active,
    onChange
}){

    return(

        <div className="flex gap-2 border-b mb-6">


            <button

                className={
                    active==="products"
                    ?
                    "border-b-2 border-black pb-2"
                    :
                    "pb-2"
                }

                onClick={()=>onChange("products")}

            >

                Productos

            </button>


            <button

                className={
                    active==="categories"
                    ?
                    "border-b-2 border-black pb-2"
                    :
                    "pb-2"
                }

                onClick={()=>onChange("categories")}

            >

                Categorías

            </button>


        </div>

    );

}


export default SectionTabs;