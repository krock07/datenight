// dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DateI = require('./models/dates.js');
const methodOverride = require('method-override');

//PORT

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/projectcrud'

// middleware
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(methodOverride('_method'));


// Error / success
mongoose.connection.on('error', (err) => console.log(err.message + ' is Mongod not running?'));
mongoose.connection.on('connected', () => console.log('mongo connected: ', MONGODB_URI));
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'));


// mongoose connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
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

// app.get('/seed', async (req, res) => {
//     const newDates =
//     [
//     {
//         name: 'Escape Room Date Night',
//         description: 'The timer starts ticking down from sixty minutes and you immediately feel an adrenaline rush. Will you make it out of this escape room before the clock reaches zero? You rush around and begin to make sense of hidden clues and riddles.',
//         type: ['Cooperative', 'Active', 'Adventure'], 
//         address: [{
//             'streetNumber': 209,
//             'street': 'S Olive Ave',
//             'city': 'West Palm Beach',
//             'state': 'Florida',
//             'zip': 33401
//         }],
//         phoneNumber: 5616695120,
//         img:'https://worldofescapes-com.s3.amazonaws.com/uploads/quests/10890/large/the-escape-game-san-francisco-gold-rush.jpg'
//     }, {
//             name: 'Performers Playground',
//             description: 'Performers Playground Is A Specialized Boutique Performing Arts Studio With An Exciting After School Program. We Provide Top Notch Study In The Areas Of Dance, Theatre and Voice And Our After School Program Immerses Our Students In All Three With Fun Extras Like Art And Yoga. ',
//             type: ['Performing Arts', 'Dance'], 
//             address: [{
//                 'streetNumber': 12900,
//                 'street': 'West State Road 84',
//                 'city': 'Ft Lauderdale',
//                 'state': 'Florida',
//                 'zip': 33325
//             }],
//             phoneNumber: 9543688534,
//             img: 'http://performersplayground.com/wp-content/uploads/2019/01/211.jpg'
//         }
//     ]

// try {
//     const seedItems = await DateI.create(newDates)
//     res.send(seedItems)
// } catch (err) {
//     res.send(err.message)
// }
// })



// Show
app.get('/dates/:id', (req, res) => {
    // Find the specific document
    DateI.findById(req.params.id, (error, newDate) => {
        // render the Show route and pass it the newDate
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
    // Update the date document using our model
    DateI.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel) => {
        res.redirect('/dates');
    });
});


// listen
app.listen(3000, () => {
    console.log('listening on: ' + 3000);
});