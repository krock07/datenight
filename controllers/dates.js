const express = require('express');
const router = express.Router();
const DateI = require('../models/dates.js');


// Index
router.get('/', (req, res) => {
    // Use dates model to get all Dates
    DateI.find({}, (error, allDates) => {
        console.log(allDates)
        res.render('Index', {
            dates: allDates
        })
    });

});

// New
router.get('/new', (req, res) => {
    res.render('New');
});

//Create
router.post('/', (req, res) => {
    // Use Model to create Date Document
    DateI.create(req.body, (error, createdDate) => {
        // Once created - respond to client
        res.redirect('/dates');
    });
});




// Show
router.get('/:id', (req, res) => {
    // Find the specific document
    DateI.findById(req.params.id, (error, newDate) => {
        // render the Show route and pass it the newDate
        res.render('Show', {
            date: newDate
        });
    });
});


// Delete
router.delete('/:id', (req, res) => {
    // Delete document from collection
    DateI.findByIdAndRemove(req.params.id, (err, date) => {
        res.redirect('/dates');
    });
});

// Edit 
router.get('/:id/edit', (req, res) => {
    // Find our document from the collection - using mongoose model
    DateI.findById(req.params.id, (err, newDate) => {
        // render the edit view and pass it the found fruit
        res.render('Edit', {
            date: newDate
        })
    });
});

// Put
router.put('/:id', (req, res) => {
    // Update the date document using our model
    DateI.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/dates');
    });
});

module.exports = router;
