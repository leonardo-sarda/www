import postgres from 'postgres';
import 'dotenv/config';

const sql = postgres(process.env.DATABASE_URL, {
  ssl: { rejectUnauthorized: false }, // importante para Neon
});

export default sql

/*import postgres from "postgres";
import 'dotenv/config' 


const http = require("http");
const { neon } = require("@neondatabase/serverless");

const sql = neon(process.env.DATABASE_URL);

export const db = postgres(sql,{ssl: 'require'})*/



//postgresql://neondb_owner:a9tduQYGAU3x@ep-jolly-base-a5bfgfjo-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require


