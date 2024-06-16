import format from 'pg-format'
import db from '../database/db_connect.js'
import { response } from 'express'


// export const findAllHateoas = async ()=>{
//   const alljoyas =  await Pool.query('SELECT * FROM inventario')
//   return alljoyas.rows
// }

export const prepararHATEOAS = (inventario) => {
  const results = inventario.map((joya) => {
    return {
      name: joya.nombre,
      href: `/joyas/joyas/${joya.id}`,
    };
  });
  const total = results.length;
  const HATEOAS = {
    total,
    results,
  };
  return HATEOAS;
};

export const findAll1 = async ({ limits = 10, page = 1, order_by: orderBy = 'id_asc' }, response) => {
  const [column, sort] = orderBy.split('_');
  const offset = (page - 1) * limits;
  const formattedQuery = format(
    `SELECT * FROM INVENTARIO ORDER BY %I %s LIMIT %L OFFSET %L;`,
    column,
    sort,
    limits,
    offset
  );
  try {
    const respDatos = await db.query(formattedQuery); 
    const HATEOAS = prepararHATEOAS(respDatos.rows); 
    response.json(HATEOAS);
  } catch (error) {
    console.error('Database query failed:', error);
    response.status(500).json({ error: 'Database query failed' });
  }
};

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