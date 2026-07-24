import templateRegistry from "../registry";


export function getTemplates(){

    return Object.entries(templateRegistry)

        .map(([id, template])=>({

            id,

            name: template.name,

            width: template.canvas.width,

            height: template.canvas.height

        }));

}