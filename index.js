const express = require('express');
const bodyParser = require('body-parser');
const { checkEmailExists, 
  checkPassword, checkName, checkEmail, createUser } = require('./services/user.js');

const app = express();

app.use(bodyParser.json());

app.listen(3000, () => console.log('ouvindo porta 3000!'));

app.post('/user', checkEmail, checkEmailExists, checkPassword, checkName, createUser);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});
