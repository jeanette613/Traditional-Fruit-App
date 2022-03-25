//Import Dependencies

const express = require('express');
const { redirect } = require('express/lib/response');
const router = express.Router();
const Fruit = require('../models/fruit');



//Index
router.get('/', (req, res) => {
    Fruit.find({})
        .then((fruits) => {
            res.render('fruits/Index', { fruits })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

//There is a ghost in here somewhere :-|
// router.get('/', (req, res) => {
//     Fruit.find({})
//         .then((fruits) => {
//             console.log(fruits);
//             res.render('fruits/Index', { fruits })
//         })
//         .catch((error) => {
//             console.log(error);
//             res.status(400).json({ error })
//         })

//     res.send('Controller be finally working?')
//});

//New
//Order is important. new MUST come before Show route
router.get('/new', (req, res) => {
    res.render('fruits/New');
});

//Delete Route
router.delete('/fruits/:id', (req, res) => {
    const { id } = req.params;
    Fruit.findByIdAndDelete(id)
        .then(() => {
            res.redirect('/fruits')
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
})

// router.delete('/fruits/:id', (req, res) => {
//     const id = req.params.id;
//     Fruit.findByIdAndDelete(id)
//         .then(() => {
//             res.redirect('/fruits');
//         })
//         .catch((error) => {
//             console.log(error);
//             res.status(400).json({ error });
//         });
// });

//update route
router.put('/:id', (req, res) => {
    const id = req.params.id;
    req.body.readyToEat = req.body.readyToEat === 'on' ? true : false;
    Fruit.findByIdAndUpdate(id, req.body, { new: true })
        .then(() => {
            //remember to use backticks so you dont have to use damn + sign
            res.redirect(`/fruits/${id}`);
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
    Fruit.create(req.body)
        .then(() => {
            // redirect user to Index page if successfully created item
            res.redirect("/fruits");
        })
        // send error as json
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
})
//send error as json
// .catch((error) => {
//     console.log(error);
//     res.json({ error });
// });

//Edit
router.get('/:id/edit', (req, res) => {
    //id from params
    const id = req.params.id;
    // get fruit from database
    Fruit.findById(id)
        .then((fruit) => {
            //render to Edit page
            res.render('fruits/Edit', { fruit });
        })
        .catch((error) => {
            console.log(error);
            res.status(400).json({ error });
        });
});



//Show
router.get('/:id', (req, res) => {
    const id = req.params.id;
    Fruit.findById(id)
        .then((fruit) => {
            console.log(fruit);
            res.render('fruits/Show', { fruit });
        })
        .catch((error) => {
            console.log(error);
            res.json({ error });
        });
});

module.exports = router