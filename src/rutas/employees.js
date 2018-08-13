const express = require('express');
const router = express.Router();

const mysqlConnection = require('../database');

//Todos los empleados
router.get('/', (req, res) => {
    mysqlConnection.query('SELECT * FROM employees', (err, rows, fields) => {
        if (!err) {
            res.json(rows);
        } else {
            console.log(err);
        }
    });
});

//Un empleado por su id
router.get('/:id', (req, res) => {
    const { id } = req.params;
    console.log(id);
    mysqlConnection.query('SELECT * FROM employees WHERE id = ?', [id], (err, rows, fields) => {
        if (!err) {
            //si se coloca rows solo se obtiene el objeto con el 
            //elemento dentro. Si se coloca rows[0] trae el
            //el elemento
            res.json(rows[0]);
        } else {
            console.log(err);
        }
    });
});

//Insertar datos
//'INSERT INTO employees (`id`, `name`, `salary`) VALUES ?, ?, ?' NO SALE >:(
router.post('/', (req, res) => {
    const {id, name, salary } = req.body;
    const query = `
        CALL employeeAddOrEdit(?,?,?);
    `;
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Empleado guardado'});
        } else {
            console.log(err);
        }
    });
});

router.put('/:id', (req, res) => {
    const {name, salary} = req.body;
    const {id} = req.params;

    const query = 'CALL employeeAddOrEdit(?,?,?) ';
    mysqlConnection.query(query, [id, name, salary], (err, rows, fields) => {
        if (!err) {
            res.json({Status: 'Empleado actualizado'});
        } else {
            console.log(err);
        }
    });
});

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    mysqlConnection.query('DELETE FROM employees WHERE id = ?', [id], (err,rows, fields) =>{
        if (!err) {
            res.json({Status: 'Empleado eliminado'});
        } else {
            console.log(err);
        }
    });
});

module.exports = router;