const express = require('express');
const app = express();
const port = 3000;
const hoursWork = require('./work');

// Set EJS as the view engine
app.set('view engine', 'ejs');

// home
app.get('/', hoursWork, (req, res) => {
    const title = 'My Web App';
    res.render('homepage', { title });
});

// services page
app.get('/services', hoursWork, (req, res) => {
    const title = 'Services page';
    res.render('ourservices', { title });
});

// contact page
app.get('/contact', hoursWork, (req, res) => {
    const title = 'Contact page';
    res.render('contactus', { title });
});



app.listen(port, function() {
    console.log('The server is running, ' +
        ' please, open your browser at http://localhost:%s',
        port);
});