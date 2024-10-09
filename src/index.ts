import express, { Request, Response } from 'express';
import { title } from 'process';
import { Utils } from './Utils';


const app = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {

    res.send('Hello, World!');

});

app.get('/addUser', async(req: Request, res: Response) => {
const data: any ={
   "name":"panda",
   "username":"pp"
}
 const result = await Utils.addUser(data);

 res.send(result)
})

app.listen(port, () => {

    console.log(`Server is running ${port}`);

});