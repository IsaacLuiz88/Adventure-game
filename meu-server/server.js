import express from 'express'
import cors from 'cors'
import { connectToDatabase } from './database.js';
import { Score } from './model.js';


const app = express()
app.use(express.json())
app.use(cors({
    origin:'*',
    Methods: 'GET, POST',
    allowedHeaders: 'Content-Type'
}))
console.log('cheguei aqui')
connectToDatabase()
console.log('cheguei aqui2')

// Suas rotas aqui
app.post('/api', (req, res) => {
    // Lógica para salvar o score
    res.json({ success: true });
  });

app.post('/', (req, res) => {
    const score = req.body;
    console.log(score)
    Score.insertOne(score)
    .then(() => res.send('Score salvo'))
    .catch((e) => res.send('Erro ao salvar score'))
});

app.get('/all', (req, res) => {
    Score.find()
    .then((scores) => res.send(scores))
    .catch((e) => res.send('Erro ao buscar scores'))
});

app.get('/max', (req, res) => {
    Score.find().sort({score: -1}).limit(1)
    .then((scores) => res.send(scores))
    .catch((e) => res.send('Erro ao buscar scores'))
});


app.listen(process.env.PORT, () => {
    console.log('Server is running on port 3001');
});