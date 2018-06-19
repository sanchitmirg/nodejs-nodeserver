const express = require('express');
//hbs is handlebars which is helpful in creating template driven page
const hbs = require('hbs');
const port = process.env.PORT || 3000;
const app = express();




//registering partial means when we take out the common code from html file like footer and title
//and keep it in different files for that we have to register partials
hbs.registerPartials(__dirname+'/views/partials')
app.set('view engine', 'hbs');

//we are tweaking express when request comes in to first do this task
//setting to public directory to render static pages.
app.use(express.static(__dirname+'/public'));


app.get('/', (req, res) => {
    res.send("Hello World Again!!!");
})

app.get('/about', (req, res) => {
    //the second argument will go into hbs and we can use title key like this {{title}} to
    //replace it with lable.
    res.render('about.hbs', {
        title:'This is about page through Templating'
    })
})
app.listen(port);