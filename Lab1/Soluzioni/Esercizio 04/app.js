const express = require('express');
const app = express();

const data = require('./colors.json');

app.set('view engine', 'pug');

//app.set("views", path.join(__dirname, "views"));

app.use((req,res,next)=>{
  console.log(req.path);
  next();
})

app.get('/', (req, res)=> {
  res.send('Hello World!');
});

/* Esercizio 3.1 */
app.get('/colors', (req, res)=> {
  res.header("Content-Type",'application/json');
  res.send(JSON.stringify(data));
  
  //res.json(data);
})

/* Esercizio 3.2 */
app.get('/contacts', (req, res)=> {
    res.sendFile(__dirname  + '/www/contacts.html');
});

/* Esercizio 3.2 bis */
app.use(express.static('public'));

/* Esercizio 3.3 */
app.get('/sayhello/:name', (req, res)=> {
    res.send("Hello " + req.params.name + "!!!");
});

/* Esercizio 3.4 */
app.get('/tehello/:name', (req, res)=> {
    res.render("hello", {name: req.params.name});
});

/* Esercizio 3.4 bis */
app.get('/conta/:numero', (req, res)=> {
	let nums = [];
	for(var i = 0; i <= req.params.numero; i++){
		nums.push(i);
	} 
    res.render("visualizza_numeri", {numeri: nums});
});


app.use((req, res)=>{
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Ops... Pagina non trovata');
});

app.listen(3000, function () {
  console.log('Prepared to be amazed on port 3000!');
});
