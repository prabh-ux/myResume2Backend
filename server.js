import express from 'express';
import cors from 'cors';
import newsLetterRoute from './routes/newsLetterRoutes.js';
const app=express();

app.use(express.json());
app.use(cors({
    origin:[
         "http://localhost:5173",
         "https://prabhkiratsinghresume.vercel.app"   
    ]
}));

app.use('/newsletter',newsLetterRoute);

const port=4000;
app.listen(port,()=>{
console.log("server started at : "+port);

})

