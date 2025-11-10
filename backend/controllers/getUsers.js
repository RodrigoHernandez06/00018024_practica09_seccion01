import { pool } from '../data/conexion.js'

export const getUsers = async (req, res) => {
  const result = await pool.query('SELECT * FROM users')
  res.json(result.rows)
}

export const getUserById = async (req, res) => {
  const { id } = req.params
  const result = await pool.query('SELECT * FROM users WHERE id = $1', [id])
  res.json(result.rows[0])
}