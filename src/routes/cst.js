'use strict';

const express = require('express');

const router = express.Router();
const {CST} = require('../models/index');

//crud app
router.get('/Cst', getData);
router.get('/Cst/:id', bringOne);
router.post('/Cst', createData);
router.put('/Cst/:id', updateData);
router.delete('/Cst/:id', deleteData);


async function getData(req, res) {
    const CSTData = await CST.findAll();
    res.status(200).json(CSTData );
}

async function getData(req, res) {
    const CSTData = await CST.read();
    res.status(200).json(CSTData);
}

async function bringOne(req, res) {
    const id = parseInt(req.params.id); 
   let CSTData = await CST.findOne({ where: {id: id}});
    res.status(200).json(CSTData);
}


async function createData(req, res) {
    let newCloth = req.body;
    let Cst = await CST.create(newCloth);
    res.status(200).json(Cst);
}

async function updateData(req, res) {
    let id = parseInt(req.params.id);
    let obj = req.body;
    let located = await CST.findOne({ where: {id: id} });
    let updatedCloth = await located.update(obj);
    res.status(200).json(updatedCloth);
}

async function deleteData(req,res) {
    const id = parseInt(req.params.id);
    let deletedData= await CST.destroy({where: {id: id}});
    res.status(204).json(deletedData);
}



module.exports = router;