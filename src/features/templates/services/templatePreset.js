import { db } from "../../../database/db";


export async function createDefaultTemplates(){


  const count = await db.templates.count();


  if(count > 0){

    return;

  }



  await db.templates.bulkAdd([


    {

      name:"Instagram Story Demo",

      format:"story",

      width:1080,

      height:1920,

      background:"#ffffff",


      elements:[

        {

          type:"text",

          content:"{brand}",

          x:100,

          y:100,

          width:800,

          height:80

        },


        {

          type:"text",

          content:"{name}",

          x:100,

          y:200,

          width:800,

          height:100

        },


        {

          type:"image",

          x:100,

          y:400,

          width:880,

          height:880

        },


        {

          type:"price",

          x:100,

          y:1400,

          width:500,

          height:100

        }

      ],

      createdAt:new Date()

    }

  ]);


}