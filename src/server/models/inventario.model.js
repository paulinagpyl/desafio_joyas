import format from 'pg-format'
import db from '../database/db_connect.js'

export const prepararHATEOAS = (data) => {
  const total = data.length;
  const totalStock = data.reduce((sum, joya) => sum + joya.stock, 0);
  
  const results = data.map((joya) => {
    return {
      name: joya.nombre,
      href: `/joyas/joyas/${joya.id}`,
    };
  });
  const HATEOAS = {
    "totalJoyas":total,
    "totalStock":totalStock,
    "results": results
  };
  return HATEOAS;
};

// exporta a inventario.controller los datos con limite, orden y paginación, sin formato aún
export const findAll1 = ({ limits = 10, page = 1, order_by: orderBy = 'id_asc' }) => {
  let query = `SELECT * FROM INVENTARIO`
  console.log(query)
  const [column,sort]=orderBy.split('_')
  const offset = Math.abs(+page !=0 ? page -1 : 0) * limits
  const formattedQuery = format(`${query} ORDER BY %s %s LIMIT %s OFFSET %s;`,column,sort, limits, offset)
  console.log(formattedQuery)
  return db(formattedQuery)
};

//exporta a invetario.controller los datos con filtro
export const findAll2 = ({precio_max : precioMax, precio_min : precioMin, categoria, metal}) => {
  let query = 'SELECT * FROM inventario'
  const filtros =[]
  const values =[]

  if (precioMin){values.push(precioMin);filtros.push(`precio >= $${values.length}`)}
  if (precioMax){values.push(precioMax);filtros.push(`precio <= $${values.length}`)}
  if (categoria){values.push(categoria);filtros.push(`categoria = $${values.length}`)}
  if (metal){ values.push(metal);filtros.push(`metal = $${values.length}`)}
  if(filtros.length >0) {query += ` WHERE ${filtros.join( ' AND  ')}`}
  
  const formattedQuery = format(`${query};`)
  return db(formattedQuery, values)
}