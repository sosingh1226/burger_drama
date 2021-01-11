const express = require('express');

const router = express.Router();

// Import the model (cat.js) to use its database functions.
const burger = require('../models/burger');

// Create all our routes and set up logic within those routes where required.
router.get('/', (req, res) => {
  burger.selectAll((data) => {
    const hbsObject = {
      burgers: data,
    };
    console.log('hbsObject', hbsObject);
    res.render('index', hbsObject);
  });
});

router.post("/api/burgers", (req, res) => {
  console.log (req.body.burger_name, req.body.devoured);
  burger.insertOne([req.body.burger_name], (result) => {
    // Send back the ID of the new quote
    console.log(result)
    res.json({ id: result.insertId });
  });
});

router.put('/api/burgers/:id', (req, res) => {
  const condition = `id = ${req.params.id}`;

  console.log('condition', condition);

  burger.devour(
    {
      devoured: req.body.devoured,
    },
    condition,
    (result) => {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});

// Export routes for server.js to use.
module.exports = router;
