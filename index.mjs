import express from 'express';
import bodyParser from 'body-parser';
import Chocolate_repo from './chocolate_repo.js';


const app = express();
const chocolate_repo_obj = new Chocolate_repo();


app.use(bodyParser.json());


app.get('/available_chocolate_flavours', (req, res) => {
    const flavours = getAllflavours();
    res.json(flavours);
  });

app.post('/add_chocolate_flavour', (req, res) => {
    const newFlavour = req.body;    
    chocolate_repo_obj.addChocolateFlavour(newFlavour);
    res.status(201).json(newFlavour);
  });
  
  
app.listen(3000);
