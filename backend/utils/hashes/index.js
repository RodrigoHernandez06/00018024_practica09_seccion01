import bcrypt from 'bcrypt'
import { HASH_COMPLEXITY } from '../../config.js'

export const hashPassword = async (password) => {
    return await bcrypt.hash(password, HASH_COMPLEXITY)
}