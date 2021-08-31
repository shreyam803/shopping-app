const path = require('path');

const express = require('express');

const sequelize = require('./util/database');

// db.execute('SELECT * FROM products')
//     .then((result) => {
//         console.log(result[0], result[1]);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

//const bodyParser = require('body-parser');

const expressHbs = require('express-handlebars');

const app = express();
app.use(express.json());

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set('view engine', 'hbs');

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error')

//app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

sequelize
    .sync()
    .then(result => {
        //console.log(result)
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    })
