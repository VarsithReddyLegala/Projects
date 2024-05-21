const {Pool} = require("pg")
const pool =new Pool({
    user:"postgres",
    password:"Lsvn@1536",
    host: "localhost",
    port:5432,
    database:"oline_library_application",
})

// const createTblQry= `CREATE TABLE users(
//     user_id serial PRIMARY KEY,
//     username VARCHAR(50) UNIQUE NOT NULL,
//     password VARCHAR(50) UNIQUE NOT NULL);`

// pool.query(createTblQry).then((Response)=>{
//     console.log("Table Created");
//     console.log(Response);
// })
// .catch((error)=>{
//     console.log(error);
// })

module.exports = pool;