const db = require("../configs/db.config");
const tableName = process.env.DB_NAME + "." + "users";


function getAll(){
    return new Promise ((resolve, reject)=>{
        db.query("SELECT * FROM ?? ",tableName, (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve(results);
        })
    });
}

function getOne(id){
    return new Promise ((resolve, reject)=>{
        db.query("SELECT * FROM ?? WHERE id = ?  ",[tableName,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve(results[0]);
        })
    });
}
function update(id, userData){
    return new Promise ((resolve, reject)=>{
        db.query("UPDATE ?? SET ? WHERE id = ?  ",[tableName,userData,id], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "User successfully updated"});
        })
    });
}

function create(userData){
    return new Promise ((resolve, reject)=>{
        db.query("INSERT INTO ?? SET ?",[tableName,userData], (error, results,fields)=>{
            if(error){
                reject({code: `${error.code}`, message:`${error.message}`})
            }
            resolve({"message": "User successfully created"});
        })
    });
}
function deleteUser(id){
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
    deleteUser

}