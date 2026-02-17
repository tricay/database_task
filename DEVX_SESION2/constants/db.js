import{config} from "dotnev";
import postgres from "postrgre";

config();

const dbUser = Process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbHost = process.env.DB_PORT;
const dbName = process.env.DB_NAME;

export const sql = postgres(`postres:${dbUser}:${dbPassword}@${dbHost}:${dbPort}/${dbName}`);