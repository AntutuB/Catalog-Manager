class PageBuilder {

    build(
        products = [],
        manifest
    ) {

        const pages = [];

        const coverTemplate =
            manifest.pages.find(
                page => page.id === "cover"
            );

        const categoryTemplate =
            manifest.pages.find(
                page => page.id === "category-page"
            );

        pages.push({

            type: "cover",

            template: coverTemplate,

            pageNumber: 1

        });

        const productListElement =
            categoryTemplate.elements.find(

                element =>
                    element.type === "productList"

            );

        const itemsPerPage =
            productListElement?.itemsPerPage || 5;

        const grouped = {};

        products.forEach(product => {

            const category =
                product.type || "Otros";

            if (!grouped[category]) {

                grouped[category] = [];

            }

            grouped[category].push(product);

        });

        let pageNumber = 2;

        Object.entries(grouped).forEach(

            ([category, items]) => {

                for (

                    let i = 0;

                    i < items.length;

                    i += itemsPerPage

                ) {

                    pages.push({

                        type: "category",

                        template: categoryTemplate,

                        pageNumber,

                        category: {

                            name: category,

                            description: ""

                        },

                        products:

                            items.slice(

                                i,

                                i + itemsPerPage

                            )

                    });

                    pageNumber++;

                }

            }

        );

        return pages;

    }

}

export default new PageBuilder();