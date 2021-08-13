'use strict';

const express = require('express');

const router = express.Router();
const {Clothes} = require('../models/index');

//crud app
router.get('/clothes', getData);
router.get('/clothes/:id', bringOne);
router.post('/clothes', createData);
router.put('/clothes/:id', updateData);
router.delete('/clothes/:id', deleteData);


async function getData(req, res) {
    const clothesData = await Clothes.findAll();
    res.status(200).json(clothesData);
}

async function getData(req, res) {
    const clothesData = await Clothes.read();
    res.status(200).json(clothesData);
}

async function bringOne(req, res) {
    const id = parseInt(req.params.id); 
   let clothData = await Clothes.findOne({ where: {id: id}});
    res.status(200).json(clothData);
}


async function createData(req, res) {
    let newCloth = req.body;
    let cloth = await Clothes.create(newCloth);
    res.status(200).json(cloth);
}

async function updateData(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let located = await Clothes.findOne({ where: {id: id} });
    let updatedCloth = await located.update(obj);
    res.status(200).json(updatedCloth);
}

async function deleteData(req,res) {
    const id = parseInt(req.params.id);
    let deletedData= await Clothes.destroy({where: {id: id}});
    res.status(204).json(deletedData);
}



module.exports = router;