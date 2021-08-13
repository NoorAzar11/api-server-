'use strict';

const express = require('express');

const router = express.Router();
const {Food} = require('../models/index');

//crud app
router.get('/food', getData);
router.get('/food/:id', bringOne);
router.post('/food', createData);
router.put('/food/:id', updateData);
router.delete('/food/:id', deleteData);


async function getData(req, res) {
    const foodData = await Food.findAll();
    res.status(200).json(foodData);
}

async function bringOne(req, res) {
    const id = parseInt(req.params.id); 
   let foodData = await Food.findOne({ where: {id: id}});
    res.status(200).json(foodData);
}

async function createData(req, res) {
    let newFoodData = req.body;
    let foodData = await Food.create(newFoodData);
    res.status(200).json(foodData);
}



async function updateData(req, res) {
  let id = parseInt(req.params.id);
    let  obj = req.body;
    let foundData = await Food.findOne({ where: {id: id}});
    let updated = await foundData.update(obj);
    res.status(200).json(updated);
}



async function deleteData(req,res) {
    const id = parseInt(req.params.id);
    let deletedData= await Food.destroy({where: {id: id}});
    res.status(204).json(deletedData);
}



module.exports = router;