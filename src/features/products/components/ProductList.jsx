function ProductList({
  products,
  onDelete
}) {


  return (

    <div>


      {
        products.length === 0 ?

        (

          <p>
            No hay productos registrados.
          </p>

        )

        :

        (

          <ul>

            {
              products.map(product=>(

                <li
                  key={product.id}
                >

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