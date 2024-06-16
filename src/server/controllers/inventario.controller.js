import * as sql from '../models/inventario.model.js'

export const findAll1 = (req, res) => sql.findAll1(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const findAll2 = (req, res) => sql.findAll2(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

//con el hateoas

// export const findAlljoyasHateoas = async(req,re)=>{
//   try{
//     const alljoyas = await findAllHateoas()
//     const alljoyaswhithHate = await HATEOAS('joyas',alljoyas)
//     res.status(200).json({joya:alljoyaswhithHate})
//   } catch (error){
//     //const errorFound = findError(error.code)
//     return  res.status(500).json({ status: false, code: 500, message: error })
//       // .status(errorFound[0].status)
//       // .json({error:errorFound[0].message})
//   } 
// }

