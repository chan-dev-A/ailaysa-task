const express = require('express');
const {getBoxList, getBoxById,addBoxInfo, removeBox} = require("../controllers/controller");

const router = express.Router();

router.get('/getAll', getBoxList)

router.get('/getById/:id', getBoxById)

router.post('/add', addBoxInfo)

router.delete('/remove/:id',removeBox)
module.exports = router;