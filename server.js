// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Fruit = require('./models/fruits.js');
const methodOverride = require('method-override');

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));

// mongoose connection
mongoose.connect('mongodb://localhost:27017/projectcrud', { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', () => {
    console.log("connected to mongo");
})


// routes
// Index
app.get('/dates', (req, res) => {
    // Use dates model to get all Dates
    DateI.find({}, (error, allDates) => {
        res.render('Index', {
            dates: allDates
        })
    });

});

// New
app.get('/dates/new', (req, res) => {
    res.render('New');
});

// Create
app.post('/dates/', (req, res) => {
    // Use Model to create Date Document
    DateI.create(req.body, (error, createdDate) => {
        // Once created - respond to client
        res.redirect('/dates');
    });
});


// Show
app.get('/dates/:id', (req, res) => {
    // Find the specific document
    Fruit.findById(req.params.id, (error, newDate) => {
        // render the Show route and pass it the foundFruit
        res.render('Show', {
            date: newDate
        });
    });
});


// Delete
app.delete('/dates/:id', (req, res) => {
    // Delete document from collection
    DateI.findByIdAndRemove(req.params.id, (err, date) => {
        res.redirect('/dates');
    });
});

// Edit 
app.get('/dates/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    DateI.findById(req.params.id, (err, newDate) => {
        // render the edit view and pass it the found fruit
        res.render('Edit', {
            date: newDate
        })
    });
});

// Put
app.put('/dates/:id', (req, res) => {
    // Update the fruit document using our model
    DateI.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/dates');
    });
});


// listen
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});