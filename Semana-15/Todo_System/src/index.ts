import express, { Request, Response } from "express";
import { AddressInfo } from 'net'
import knex from 'knex';

const app = express();
app.use(express.json()); // Linha mágica (middleware)

const connection = knex({
  client: 'mysql',
  connection: {
    host : 'ec2-18-229-236-15.sa-east-1.compute.amazonaws.com',
    user : 'davi',
    password : process.env.SENHA_DO_BANCO,
    database : 'davi'
  }
});


app.get('/getDetailedUser', (req: Request, res: Response) => {
  const nameToSearch = req.query.username;
  const idToSearch = req.query.id;

  if (!nameToSearch && !idToSearch) {
    res.status(400).end();
    return;
  } 

  try {
    connection.raw(
      `SELECT * FROM Todo_Users 
      WHERE user_name = "${nameToSearch}" OR user_id = ${idToSearch? idToSearch : 0};`
    ).then(result => {
      res.send(result)
    })
  } catch (error) {
    console.error(error);
    res.status(400).end();
    return;
  }
});

app.post('/createNewUser', (req: Request, res: Response) => {
  connection('Todo_Users').insert(req.body).then(result => {
    res.send(result);
  }).catch(e => {
    res.send(e);
  });
});



// Trecho do código responsável por inicializar todas as APIs
const server = app.listen(process.env.PORT || 3000, () => {
  if(server){
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
