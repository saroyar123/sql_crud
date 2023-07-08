const mysql = require("mysql");

    const connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "Saroyar@43",
        database:"studentdb"
      });
      
      console.log("2")
      
    connection.connect((err) => {
        if (err) {
          console.log("connection not found due to", err);
          return;
        }
        console.log("database is connected")
      });

      module.exports=connection;
