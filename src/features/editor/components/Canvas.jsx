import ElementRenderer from "./ElementRenderer";


function Canvas({
  template,
  product
}) {


  const maxWidth = 500;
  const maxHeight = 700;


  const scale = Math.min(

    maxWidth / template.width,

    maxHeight / template.height

  );



  const canvasStyle = {

    position:"relative",

    width:template.width,

    height:template.height,

    transform:`scale(${scale})`,

    transformOrigin:"top left",

    background:template.background,

  };



  return (

    <div

      style={{

        width:template.width * scale,

        height:template.height * scale,

      }}

    >

      <div style={canvasStyle}>


        {

          template.elements?.map(

            (element,index)=>(

              <ElementRenderer

                key={index}

                element={element}

                product={product}

              />

            )

          )

        }


      </div>

    </div>

  );

}


export default Canvas;