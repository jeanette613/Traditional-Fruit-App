const express = require('express');
const res = require('express/lib/response');
const Fruit = require("../models/fruit");
const Vegetable = require("../models/vegetable")


// Create Router

const router = express.Router();

///this isnt even getting touched whyyyyy
router.get('/seed', (req, res) => {
    const startFruits = [
        { name: "Orange", color: "orange", readyToEat: false },
        { name: "Grape", color: "purple", readyToEat: false },
        { name: "Banana", color: "orange", readyToEat: false },
        { name: "Strawberry", color: "red", readyToEat: false },
        { name: "Coconut", color: "brown", readyToEat: false },
    ]

    // Delete all fruits
    Fruit.deleteMany({}).then((data) => {
        Fruit.create(startFruits).then((data) => {
            res.json(data);
        })
    }).catch((err) => {
        res.status(400).send(err)
    })
})
/////////////
Vegetable.deleteMany({}).then((data) => {
    Vegetable.create(startFruits).then((data) => {
        res.json(data);
    })
}).catch((err) => {
    res.status(400).send(err)
})

// Index
/////////
router.get('/', (req, res) => {
    Vegetable.find({})
        .then((vegetables) => {
            res.render("vegetables/Index", { vegetables })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

router.get('/', (req, res) => {
    Fruit.find({})
        .then((fruits) => {
            res.render("fruits/Index", { fruits })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


///////////
router.get('/new', (req, res) => {
    res.render('vegetables/New')
})

// New
router.get('/new', (req, res) => {
    res.render('fruits/New')
})

//////////
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Vegetable.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/vegetables');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

// Delete
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Fruit.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/fruits');
        })
        .catch((error) => {
            res.status(400).json({ error });
        })
})

///////////////
router.put('/:id', (req, res) => {
    const { id } = req.params;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    Vegetable.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/vegetables/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


// Update
router.put('/:id', (req, res) => {
    const { id } = req.params;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;

    Fruit.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            res.redirect(`/fruits/${id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})




///////////
router.post('/', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : fralse;
    Vegetable.create(req.body)
        .then((createdVegetable) => {
            res.redirect(`/vegetables/${createdVegetable._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


// Create
router.post('/', (req, res) => {
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    Fruit.create(req.body)
        .then((createdFruit) => {
            res.redirect(`/fruits/${createdFruit._id}`)
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})



/////////////////
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Vegetable.findById(id)
        .then((vegetable) => {
            res.render('vegetables/Edit', { vegetable })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


// Edit
router.get('/:id/edit', (req, res) => {
    const { id } = req.params
    Fruit.findById(id)
        .then((fruit) => {
            res.render('fruits/Edit', { fruit })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})





///////////////
router.get('/id', (req, res) => {
    const { id } = req.params;

    Vegetable.findById(id)
        .then((vegetable) => {
            res.render('vegetables/Show', { vegetable })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// Show

router.get('/:id', (req, res) => {
    const { id } = req.params;

    Fruit.findById(id)
        .then((fruit) => {
            res.render('fruits/Show', { fruit })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})


module.exports = router;