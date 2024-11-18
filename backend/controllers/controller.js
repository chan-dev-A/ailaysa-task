const db = require('../config/db.js');

const handleError = (res, err) => {
    res.status(500).send({
        message: err.message || 'Internal Server Error',
        success: false,
        error: err,
    });
};

const getBoxList = async (req, res) => {
    try {
        const [data] = await db.query('SELECT * FROM box_table');
        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No records found',
            });
        }
        res.status(200).send({
            success: true,
            message: 'List fetched successfully',
            data,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const getBoxById = async (req, res) => {
    try {
        const { id: boxId } = req.params;
        if (!boxId) {
            return res.status(400).send({
                success: false,
                message: 'Invalid or missing box ID',
            });
        }

        const [data] = await db.query('SELECT * FROM box_table WHERE id = ?', [boxId]);
        if (data.length === 0) {
            return res.status(404).send({
                success: false,
                message: 'No records found for the provided ID',
            });
        }

        res.status(200).send({
            success: true,
            message: 'Box fetched successfully',
            data: data[0],
        });
    } catch (err) {
        handleError(res, err);
    }
};

const addBoxInfo = async (req, res) => {
    try {
        const { title } = req.body;
        if (!title) {
            return res.status(400).send({
                success: false,
                message: 'Title is required',
            });
        }

        const [result] = await db.query('INSERT INTO box_table (`title`) VALUES (?)', [title]);
        if (result.affectedRows === 0) {
            return res.status(400).send({
                success: false,
                message: 'Failed to add box',
            });
        }

        res.status(201).send({
            success: true,
            message: 'Box added successfully',
            boxId: result.insertId,
        });
    } catch (err) {
        handleError(res, err);
    }
};

const removeBox = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id) {
            return res.status(400).send({
                success: false,
                message: 'Box ID is required',
            });
        }

        const [result] = await db.query('DELETE FROM box_table WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).send({
                success: false,
                message: 'Box not found',
            });
        }

        res.status(200).send({
            success: true,
            message: 'Box removed successfully',
        });
    } catch (err) {
        handleError(res, err);
    }
};

module.exports = { getBoxList, getBoxById, addBoxInfo, removeBox };
