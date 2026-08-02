import { useMemo, useState } from "react";


function useProductFilters(products, externalCategories = []) {

    const [search, setSearch] = useState("");

    const [categoryFilter, setCategoryFilter] = useState("all");

    const [typeFilter, setTypeFilter] = useState("all");

    const [sortBy, setSortBy] = useState("name");



    const categories = useMemo(() => {

        const sourceCategories = externalCategories.length

            ? externalCategories.map(category =>
                typeof category === "string"
                    ? category
                    : category.name
            )

            : products
                .map(product => product.categoryName);



        return [

            "all",

            ...new Set(

                sourceCategories

                    .filter(Boolean)

                    .filter(category =>
                        typeof category === "string"
                    )

            )

        ];


    }, [

        products,

        externalCategories

    ]);



    const types = useMemo(() => [

        "all",

        ...new Set(

            products

                .map(product => product.type)

                .filter(Boolean)

        )

    ], [products]);



    const filteredProducts = useMemo(() => {

        let data = [...products];



        if (search.trim()) {

            const value = search.toLowerCase();


            data = data.filter(product =>

                product.name?.toLowerCase().includes(value) ||

                product.brand?.toLowerCase().includes(value)

            );

        }



        if (categoryFilter !== "all") {

            data = data.filter(

                product => product.categoryName === categoryFilter

            );

        }



        if (typeFilter !== "all") {

            data = data.filter(

                product => product.type === typeFilter

            );

        }



        if (sortBy === "price") {

            data.sort(

                (a, b) =>
                    Number(a.price) - Number(b.price)

            );


        } else {

            data.sort(

                (a, b) =>
                    a.name.localeCompare(b.name)

            );

        }



        return data;


    }, [

        products,

        search,

        categoryFilter,

        typeFilter,

        sortBy

    ]);



    return {

        search,
        setSearch,

        categoryFilter,
        setCategoryFilter,

        typeFilter,
        setTypeFilter,

        sortBy,
        setSortBy,

        categories,
        types,

        filteredProducts

    };

}


export default useProductFilters;