const { getConnection } = require('../database/connection');

const getAll = async (request,response,next) => {
    try {
        const connection = await getConnection(); 
        const result = await connection.query('SELECT * FROM task');
        response.json(result);
    } catch (error) {
        next(error);
    }
};

const addTask = async (request,response,next) => {
    try {
        const {title, description} = request.body;
        if(title === '' || description === ''){
            return response.status(400).json({message: "Bad Request. Please fill all fields."})
        }
        const task = {title, description};
        const connection = await getConnection(); 
        const result = await connection.query('INSERT INTO task SET ?', task);
        response.json({message: `Number of rows affected: ${result.affectedRows}`});
    } catch (error) {
        next(error);
    }
};

const searchForId = async (request,response,next) => {
    try {
        const {id} = request.params; 
        if(id === undefined){
            return response.status(404).json({message: "Bad Request. No search parameters."})
        }
        const connection = await getConnection(); 
        const result = await connection.query('SELECT * FROM task WHERE id = ?', id );
        response.json(result);
    } catch (error) {
        next(error);
    }
};

const updateTask = async (request,response,next) => {
    try {
        const {id} = request.params; 
        const {title, description} = request.body;
        if(title === '' || description === ''){
            return response.status(404).json({message: "Bad Request. Please fill all fields."})
        }
        const task = {title, description};
        const connection = await getConnection(); 
        const result = await connection.query('UPDATE task SET ? WHERE id = ?', [task,id] );
        response.json({message: `Number of rows affected: ${result.affectedRows}`});
    } catch (error) {
        next(error);
    }
};

const deleteTask = async (request,response,next) => {
    try {
        const { id } = request.params;
        if(id === undefined){
            return response.status(404).json({message: "Bad Request. No search parameters."})
        }
        const connection = await getConnection(); 
        const result = await connection.query('DELETE FROM task WHERE id = ?', id );
        response.json({message: `Number of rows affected: ${result.affectedRows}`});
    } catch (error) {
        next(error);
    }
};

module.exports = {
    getAll,
    addTask,
    searchForId,
    updateTask,
    deleteTask
}