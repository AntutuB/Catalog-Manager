import templateRegistry from "../registry";
import TemplateSchema from "../schema/template.schema";
import AssetManager from "../assets/AssetManager";


class TemplateLoader {


    validate(template) {


        const required = [

            "id",
            "name",
            "version",
            "canvas",
            "assets"

        ];


        for(const property of required){


            if(!(property in template)){


                throw new Error(

                    `Template is missing property: ${property}`

                );

            }

        }


        return true;

    }





    load(templateId){


        const template =

            templateRegistry[templateId];



        if(!template){


            throw new Error(

                `Template "${templateId}" not found.`

            );

        }



        this.validate(template);



        AssetManager.clear();



        AssetManager.register(

            template.assets

        );



        return structuredClone(template);


    }


}


export default new TemplateLoader();