import express from 'express';
import cors from 'cors';
import healthCareBot from './routes/healthCare.routes.js'

const app = express();
const PORT = 3000;

app.use(cors())
app.use(express.json())
app.use('/api/v1/pet_health', healthCareBot)
app.listen(PORT, () => {
    console.log("Listening to port ", PORT);
    
})

