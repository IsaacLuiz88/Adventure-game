import mongoose from "mongoose";



export function connectToDatabase() {
    const uri = process.env.MONGO_URI;
    console.log(`uri: ${uri}`)

    mongoose.connect(uri)
    .then(() => console.log('conectado ao banco'))
    .catch((e) => console.error('erro ao conectar', e))
}