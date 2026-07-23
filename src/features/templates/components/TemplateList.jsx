function TemplateList({
  templates,
  onDelete,
  onEdit
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
            <button

  onClick={()=>
    onEdit(template)
  }

>
  Editar
</button>


          </li>

        ))
      }


    </ul>

  );

}


export default TemplateList;