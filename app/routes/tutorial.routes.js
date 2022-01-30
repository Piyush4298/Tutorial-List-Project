module.exports = app=>{
    const tutorials = require('../controllers/tutorial.controller')

    let router = require("express").Router();

    // create a new tutorial
    router.post("/", tutorials.create);

    // Retrieve all tutorials
    router.get("/", tutorials.findAll);

    // Retrieve all published
    router.get("/published", tutorials.findAllPublished);

    // Retrieve a single tutorial with ID
    router.get("/:id", tutorials.findOne);

    // Update tutorial with ID
    router.put("/:id", tutorials.update);

    // Delete a tutorial with ID
    router.delete("/:id", tutorials.delete);

    // Delete all tutorials 
    router.delete("/", tutorials.deleteAll);


    app.use('/api/tutorials', router);
}