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
 * @description Queries the database for the record that has the value in the field that was passed.
 * @param {string} tableName Table name to query 
 * @param {string} fieldName Field name to query by 
 * @param {any} value value that will be used to test against
 * @returns 
 */
function getOneByFieldName(tableName,fieldName, value){
    return new Promise ((resolve, reject)=>{
        db.query("SELECT * FROM ?? WHERE ?? = ?  ",[tableName,fieldName,value], (error, results,fields)=>{
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
function update(tableName,id, newData){
    return new Promise ((resolve, reject)=>{
        db.query("UPDATE ?? SET ? WHERE id = ?  ",[tableName,newData,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "successfully updated"});
        })
    });
}
/**
 * @description Queries the database for the record that has the value in the field that was passed then update the record.
 * @param {string} tableName Table name to query
 * @param {string} fieldName Field name of the record to Query.
 * @param {any} value Value of the field to search for in the table.
 * @param {data} userData Data to update the record with. 
 * @returns 
 */
 function updateByFieldName(tableName,fieldName,value, newData){
    return new Promise ((resolve, reject)=>{
        db.query("UPDATE ?? SET ? WHERE ?? = ?  ",[tableName,newData,fieldName,value], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "successfully updated"});
        })
    });
}
/**
 * @description Creates a record with the data that is passed. 
 * @param {string} tableName Table name to query
 * @param {data} userData Data that will be used to create the record. 
 * @returns 
 */
function create(tableName, newData){
    return new Promise ((resolve, reject)=>{
        db.query("INSERT INTO ?? SET ?",[tableName,newData], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "successfully created"});
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
            resolve({"message": "successfully deleted"});
        })
    });
}

/**
 * @description Queries the database for the record that matches the field name and value passed then delete said field.
 * @param {string} tableName Table name to query
 * @param {string} fieldName Field name to query
 * @param {any} value Value to find in the field.
 * @returns 
 */
function deleteRecordByField(tableName,fieldName,value){
    return new Promise ((resolve, reject)=>{
        db.query("DELETE FROM ?? WHERE ?? = ?",[tableName,fieldName,value], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "successfully deleted"});
        })
    });
}


module.exports = {
    getAll,
    getOne,
    update,
    create,
    deleteRecord,
    getOneByFieldName,
    updateByFieldName,
    deleteRecordByField

}