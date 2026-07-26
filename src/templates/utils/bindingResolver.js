export function resolveBinding(

    binding,

    product

){

    if(!binding || !product){

        return "";

    }


    const path = binding.split(".");


    let value = product;


    for(const key of path){

        value = value?.[key];

    }


    return value ?? "";

}