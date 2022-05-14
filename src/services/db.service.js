const db = require("../configs/db.config");
const tableName = process.env.DB_NAME + "." + "users";

/**
 * @description Queries the database for all records then return the result as a promise.
 * @param {string} tableName Table name to query
 * @returns {Promise<data[]>} Results from the query of the table.
 */
function getAll(tableName){
    return new Promise ((resolve, reject)=>{
        db.query("SELECT * FROM ?? ",tableName, (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve(results);
        })
    });
}
/**
 * @description Queries the database for the record that has the id that was passed. 
 * @param {string} tableName Table name to query 
 * @param {number} id ID of the record to find.
 * @returns 
 */
function getOne(tableName,id){
    return new Promise ((resolve, reject)=>{
        db.query("SELECT * FROM ?? WHERE id = ?  ",[tableName,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            if(results.length < 0){
                reject({code: "missing record", message: "There is no record that match this id"})
            }
            resolve(results[0]);
        })
    });
}
/**
 * @description Queries the database for the record that has the id, then updates the record with the data.
 * @param {string} tableName Table name to query
 * @param {number} id ID of the record to find and Update.
 * @param {data} userData Data to update the record with. 
 * @returns 
 */
function update(tableName,id, userData){
    return new Promise ((resolve, reject)=>{
        db.query("UPDATE ?? SET ? WHERE id = ?  ",[tableName,userData,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "User successfully updated"});
        })
    });
}
/**
 * @description Creates a record with the data that is passed. 
 * @param {string} tableName Table name to query
 * @param {data} userData Data that will be used to create the record. 
 * @returns 
 */
function create(tableName, userData){
    return new Promise ((resolve, reject)=>{
        db.query("INSERT INTO ?? SET ?",[tableName,userData], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "User successfully created"});
        })
    });
}

/**
 * @description Deletes the record specified by the id.
 * @param {string} tableName Table name to query
 * @param {number} id ID for the record to delete
 * @returns 
 */
function deleteRecord(tableName,id){
    return new Promise ((resolve, reject)=>{
        db.query("DELETE FROM ?? WHERE id = ?",[tableName,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "User successfully deleted"});
        })
    });
}

module.exports = {
    getAll,
    getOne,
    update,
    create,
    deleteRecord

}