import dotenv from 'dotenv';

dotenv.config();

export const port = process.env.PORT || 8000
export const dbURL = process.env.DB_URL