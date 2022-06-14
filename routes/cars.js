"use stricte"
const express = require('express');
const router = express.Router()

const cars = (req,res) => {
    console.log(req.params.id)
    res.status(200).json(req.params)
}

router.route('/cars/:id')
    .get(cars)
    .post(cars)

module.exports = router 