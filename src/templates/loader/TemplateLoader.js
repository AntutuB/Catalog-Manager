import TemplateSchema from "../schema/template.schema";

class TemplateLoader {

    validate(template) {

        for (const property of TemplateSchema.required) {

            if (!(property in template)) {

                throw new Error(

                    `Template is missing property: ${property}`

                );

            }

        }

        return true;

    }

}

export default new TemplateLoader();