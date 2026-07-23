const TemplateSchema = {

    required: [

        "id",
        "name",
        "version",
        "canvas",
        "theme",
        "fonts",
        "assets",
        "elements"

    ],

    elementRequired: [

        "id",
        "type",
        "frame"

    ],

    elementTypes: [

        "background",

        "asset",

        "image",

        "text",

        "shape"

    ],

    bindings: [

        "product.name",

        "product.price",

        "product.category",

        "product.description",

        "product.brand",

        "product.image"

    ]

};

export default TemplateSchema;