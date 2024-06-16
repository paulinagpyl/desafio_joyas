import * as sql from '../models/inventario.model.js'
import { prepararHATEOAS } from './../models/inventario.model.js';

export const findAll1 = (req, res) =>{sql.findAll1(req.query)
  // .then((result) => {const formattedResult = prepararHATEOAS(result);res.status(200).json({message:formattedResult })})
  .then((result) => res.status(200).json({message:prepararHATEOAS(result) }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))}

export const findAll2 = (req, res) => sql.findAll2(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result}))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))


// // funcion original que trae todo sin el formato HATEOAS
// export const findAll1 = (req, res) =>{sql.findAll1(req.query)
//   .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
//   .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))
// }
