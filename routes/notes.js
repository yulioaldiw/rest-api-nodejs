var express = require("express");
var router = express.Router();

const Validator = require("fastest-validator")
const v = new Validator()

const {Notes} = require("../models")

router.post("/", async (req, res, next) => {
    const schema = {
        title: "string",
        description: "string|optional",
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate);
    }

    const note = await Notes.create(req.body);
    res.json({
        status: 200,
        message: "note created successfully",
        data: note
    });
});

router.put("/:id", async (req, res, next) => {
    const id = req.params.id;
    let note = await Notes.findByPk(id);

    if(!note) {
        return res.status(404).json({
            status: 404,
            message: "note id not found"
        });
    }

    const schema = {
        title: "string|optional",
        description: "string|optional"
    };

    const validate = v.validate(req.body, schema);

    if (validate.length) {
        return res.status(400).json(validate)
    }

    note = await note.update(req.body);

    res.json({
        status: 200,
        message: "note updated successfully",
        data: note,
    });
});

module.exports = router;