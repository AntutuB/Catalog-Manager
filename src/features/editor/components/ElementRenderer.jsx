function ElementRenderer({
  element,
  product
}) {


  const elementStyle = {

    position:"absolute",

    left:element.x,

    top:element.y,

    width:element.width,

    height:element.height,


    ...(element.style || {})

  };



  function replaceVariables(text){


    return text

      .replace(
        "{name}",
        product.name || ""
      )

      .replace(
        "{brand}",
        product.brand || ""
      )

      .replace(
        "{price}",
        product.price || ""
      );

  }



  if(element.type==="image"){


    const imageUrl =

      product.image

      ?

      URL.createObjectURL(
        product.image
      )

      :

      null;



    return (


      imageUrl

      ?

      <img

        src={imageUrl}

        style={{

          ...elementStyle,

          objectFit:"contain"

        }}

        alt="product"

      />


      :

      <div

        style={{

          ...elementStyle,

          border:"1px dashed #999",

          display:"flex",

          alignItems:"center",

          justifyContent:"center"

        }}

      >

        Imagen

      </div>


    );


  }



  if(

    element.type==="text"

    ||

    element.type==="price"

  ){


    const content =

      element.type==="price"

      ?

      `$${product.price}`

      :

      replaceVariables(
        element.content || ""
      );



    return (

      <div

        style={elementStyle}

      >

        {content}

      </div>

    );

  }



  return null;


}


export default ElementRenderer;