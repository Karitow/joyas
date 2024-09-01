const HATEOAS = (entidad, datos, limits, page) => {
  //mapeamos datos para enlace hateoas  
  const results = datos.map((item) => ({
          name: item.nombre,
          href: `/joyas/${entidad}/${item.id}`
        }));

    //calculando el total y stock
    const totalJoyas = datos.length;
    const stockTotal = datos.reduce((acumulador, valorActual) => acumulador + valorActual.stock, 0);
    //crearmos obj hateoas de paginacion
    const datosHateoas = {
      totalJoyas,
      stockTotal,
      results,
      pagination: {
        limits,
        page,
      totalPages: Math.ceil(totalJoyas / limits)
    }
 };
    console.log(datosHateoas);
    return datosHateoas;
  };
  
  export default HATEOAS;