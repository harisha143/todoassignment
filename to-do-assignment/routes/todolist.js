const express=require('express');
const router=express.Router();
const { v4: uuidv4 } = require('uuid');

const db=require('../util/database');

router.get('/get-task',(req,res,next)=>{
    const query='SELECT * from todolist';
    db.query(query).then(dbres=>{
        res.json({
            error:false,
            todolist:dbres.rows
        });
    }).catch(dbErr=>{
        next(dbErr);
    });
});

router.post('/',(req, res, next) => {
    const query = `
        INSERT INTO todolist
        VALUES (
            '${uuidv4()}', 
            '${req.body.task}'
            )`;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            data: dbRes.rows
        });
    }).catch(dbErr => {
        next(dbErr);
    });
});
router.delete('/:id',(req, res, next) => {
    const query = `
        DELETE FROM todolist
        WHERE id='${req.params.id}'
    `;
    db.query(query).then(dbRes => {
        res.json({
            error: false,
            message: 'task Deleted Successfully'
        });
    }).catch(dbErr => {
        next(dbErr);
    });
});

module.exports=router;