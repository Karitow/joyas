import HATEOAS from '../../helpers/hateoas.js'
import * as sql from '../models/inventario.dao.js'

export const getJoyas = (req, res) => sql.getJoyasModel(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: HATEOAS('joya', result, req.query.limits, req.query.page) }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error }))

export const getJoyasFiltros = (req, res) => { sql.getJoyasFiltrosModel(req.query)
  .then((result) => res.status(200).json({ status: true, code: 200, message: result }))
  .catch((error) => res.status(500).json({ status: false, code: 500, message: error })); 
};