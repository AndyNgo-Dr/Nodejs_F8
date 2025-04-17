const path = require('path');
const express = require('express');
const morgan = require('morgan');
const hbs = require('express-handlebars');
const app = express();
const port = 3000;
const route = require('./routers');

// Run static file
app.use(express.static(path.join(__dirname, 'public')));
// add Midleware
app.use(express.urlencoded());
app.use(express.json());
// app.use(morgan("combined"));
// Hello world
// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });
// Test template engine Handlebars
app.engine('hbs', hbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

// make route
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port at http://localhost:${port}`);
});
