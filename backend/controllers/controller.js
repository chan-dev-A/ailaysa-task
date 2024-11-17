const db = require('../config/db.js');

const getBoxList = async (req, res) => {
    try{
        const data = await db.query("SELECT * FROM box_table");
        if(!data){
            return res.status(404).send({
                success: false,
                message: 'No records found'
            })
        }else{
            return res.status(200).send({
                success:true,
                message:'List fetched',
                data:data[0]
            })
        }
    }catch(err){
        res.status(500).send({
            message: err.message,
            success: false,
            err
        })
    }
}

const getBoxById = async (req, res) => {
    try{
        const boxId= req.params.id;
        if(!boxId){
            return res.status(404).send({
                success: false,
                message: 'Invalid or Provide boxId'
            })
        }
        const data = await db.query("SELECT * FROM box_table where id=?",[boxId]);
        if(!data){
            return res.status(404).send({
                success: false,
                message: 'No records found',

            })
        }else {
            return res.status(200).send({
                success:true,
                message:'Fetched Successfully',
                data:data[0]
            })
        }

    }catch(err){
        res.status(500).send({
            message: err.message,
            success: false,
            err
        })
    }
}

const addBoxInfo = async (req, res) => {
    try {
        const {title} = req.body;
        if(!title){
            return res.status(400).send({
                success: false,
                message: 'Title is required'
            })
        }
        console.log(title)
        const data = await db.query('INSERT INTO box_table (`title`) VALUES (?)',[title])
        if(!data){
            return res.status(400).send({
                success: false,
                message: 'Data Addition Failed'
            })
        }else{
            return res.status(200).send({
                success:true,
                message:'Info Added Successfully'
            })
        }

    }catch(err){
        res.status(500).send({
            message: err.message,
            success: false,
            err
        })
    }
}

const removeBox = async (req, res) => {
    try{
        const {id} = req.params;
        if(!id){
            return res.status(400).send({
                success: false,
                message: 'Need to Pass Id'
            })
        }
         await db.query("DELETE FROM box_table where id = ?",[id]);
        res.status(200).send({
            success:true,
            message:'Removed Successfully'
        })
    }catch(err){
        res.status(500).send({
            message: err.message,
            success: false,
            err
        })
    }
}


module.exports = {getBoxList,getBoxById,addBoxInfo,removeBox}