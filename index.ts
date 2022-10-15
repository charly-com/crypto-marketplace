import express, { Express, Request, Response, urlencoded } from 'express';
import dotenv from 'dotenv';
import { register } from './interfaces/interface.register';

dotenv.config();

const app: Express = express();
const port = process.env.PORT;
const BASE_URL: string = "/auth/v1";
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server');
});

app.post(`${BASE_URL}/register`, (req: Request, res: Response) => {
   let data:register = req.body
   
   res.status(201).json({
    message:"User Resgistered Successfully"
   })
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});