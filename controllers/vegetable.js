//Import Dependencies

const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const Vegetable = require('../models/vegetable');



//Index
router.get('/', (req, res) => {
    Vegetable.find({})
        .then((vegetables) => {
            res.render('vegetables/Index', { vegetables })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//New
//Order is important. new MUST come before Show route
router.get('/new', (req, res) => {
    res.render('vegetables/New');
});

//Delete Route
router.delete('/vegetables/:id', (req, res) => {
    const { id } = req.params;
    Vegetable.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/vegetables')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


//update route
router.put('/:id', (req, res) => {
    const id = req.params.id;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    Vegetable.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/vegetables/${id}`);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error });
        });
});

//create
router.post('/', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    //add username to req.body to track related user
    //    req.body.username = req.session.username;
    //New fruit
    Vegetable.create(req.body)
        .then(() => {
            // redirect user to Index page if successfully created item
            res.redirect("/vegetables");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
})

//Edit
router.get('/:id/edit', (req, res) => {
    const id = req.params.id;
    Vegetables.findById(id)
        .then((vegetable) => {
            //render to Edit page
            res.render('vegetables/Edit', { vegetable });
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error });
        });
});



//Show
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Vegetable.findById(id)
        .then((vegetable) => {
            console.log(vegetable);
            res.render('vegetables/Show', { vegetable });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

module.exports = router