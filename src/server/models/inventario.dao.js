//dao objeto de accesso a los datos se encuentran los cruds
// separando logicas si tengo un problema de consultas
import format from 'pg-format'
import db from '../database/db.js'

//obtenemos joyas del inventario 
export const getJoyasModel = ({ limits = 6, order_by: orderBy = 'stock_asc', page = 0 }) => {
  const query = 'SELECT * FROM inventario'
  const [columnaTabla, orden] = orderBy.split('_')
  //calculo para paginacion
  const offset = Math.abs(+page !== 0 ? page - 1 : 0) * limits
  //formateamos la query
  const formatear = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`, columnaTabla, orden, limits, offset)
  return db(formatear)
}
//filtramos
export const getJoyasFiltrosModel = ({ precio_min: precioMin, precio_max: precioMax, categoria, metal }) => {
  let query = 'SELECT * FROM inventario'
  const filtros = []
  const values = []
  if (precioMin) {
    values.push(precioMin)
    filtros.push(`precio >= $${values.length}`)
  }
  if (precioMax) {
    values.push(precioMax)
    filtros.push(`precio <= $${values.length}`)
  }
  if (categoria) {
    values.push(categoria)
    filtros.push(`categoria = $${values.length}`)
  }
  if (metal) {
    values.push(metal)
    filtros.push(`metal = $${values.length}`)
  }
  if (filtros.length > 0) {
    query += ` WHERE ${filtros.join(' AND ')}`
  }
  const formatear = format(`${query};`)
  return db(formatear, values)
}