function TemplateList({
  templates,
  onDelete
}) {


  return (

    <ul>


      {
        templates.map(template=>(

          <li key={template.id}>


            <h3>
              {template.name}
            </h3>


            <p>
              {template.format}
            </p>


            <p>
              {template.width} x {template.height}px
            </p>


            <button

              onClick={()=>
                onDelete(template.id)
              }

            >

              Eliminar

            </button>


          </li>

        ))
      }


    </ul>

  );

}


export default TemplateList;