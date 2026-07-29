export function resolveBinding(

    binding,

    context

){

    if(!binding || !context){

        return "";

    }

    /*
        Compatibilidad con plantillas antiguas.
        Si el binding no tiene punto,
        primero busca en product.
    */

    if(

        !binding.includes(".") &&

        context.product &&

        binding in context.product

    ){

        return context.product[binding] ?? "";

    }

    /*
        Nuevo formato:
        product.name
        settings.brandName
        page.number
        catalog.productCount
    */

    const path = binding.split(".");

    let value = context;

    for(const key of path){

        value = value?.[key];

    }

    return value ?? "";

}