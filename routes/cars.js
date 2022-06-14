"use stricte"
const express = require('express');
const router = express.Router()

router.route('/cars/:id')
    .get((req,res) => {
        console.log(req.params.id)
        res.status(200).json(req.params)
    })

module.exports = router 