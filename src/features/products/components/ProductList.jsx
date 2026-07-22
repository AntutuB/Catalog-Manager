import { useEffect, useState } from "react";


function ProductList({
  products,
  onDelete
}) {


  const [productsWithImages, setProductsWithImages] = useState([]);



  useEffect(()=>{

    const loadImages = async()=>{


      const data = products.map(product=>{


        let imageUrl = null;


        if(product.image){

          imageUrl = URL.createObjectURL(product.image);

        }


        return {

          ...product,

          imageUrl

        };


      });


      setProductsWithImages(data);


    };


    loadImages();


    return ()=>{

      productsWithImages.forEach(product=>{

        if(product.imageUrl){

          URL.revokeObjectURL(product.imageUrl);

        }

      });

    };


  },[products]);



  return (

    <div>


      {
        productsWithImages.length === 0 ?

        (

          <p>
            No hay productos registrados.
          </p>

        )

        :

        (

          <ul>

            {
              productsWithImages.map(product=>(

                <li key={product.id}>


                  {
                    product.imageUrl &&

                    <img

                      src={product.imageUrl}

                      width="150"

                      alt={product.name}

                    />

                  }


                  <h3>
                    {product.name}
                  </h3>


                  <p>
                    Marca: {product.brand}
                  </p>


                  <p>
                    Tipo: {product.type}
                  </p>


                  <p>
                    Precio: ${product.price}
                  </p>


                  <p>
                    {product.description}
                  </p>


                  <button

                    onClick={()=>
                      onDelete(product.id)
                    }

                  >
                    Eliminar
                  </button>


                </li>

              ))
            }


          </ul>

        )

      }


    </div>

  );

}


export default ProductList;