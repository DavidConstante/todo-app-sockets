import { connect } from 'mongoose'
require('dotenv').config()


const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_NAME = process.env.DB_NAME


console.log(DB_USER);
export const connecDB = async () => {
    try {
        await connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.rt7kn.mongodb.net/?retryWrites=true&w=majority`)
        console.log("Data base conected");
    } catch (error) {
        console.log("Error in data base Conection");
    }
}