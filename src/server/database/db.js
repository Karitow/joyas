//archivo para conexion con la database
//separando logicas si tengo problemas de conexion
import pkg from 'pg'
//las clases se inician con mayuscula, tienen conductores herencias 
const { Pool } = pkg

const config = {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    allowExisOnIdle:true,
    port: process.env.DB_PORT
}

const pool = new Pool(config)
//es la funcion que retorna los datos de la database
const db = (query, values) => pool 
    .query(query, values)
    .then(({ rows }) => rows)
    .catch((code, message) => {
        const error = { status: false, code, message}
        throw error
    })


export default db

