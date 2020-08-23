// Import MySQL connection.
var connection = require("../config/connection.js");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  // loop through the keys and push the key/value as a string int arr
  for (var key in ob) {
    var value = ob[key];
    // check to skip hidden properties
    if (Object.hasOwnProperty.call(ob, key)) {
      // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
      // e.g. {sleepy: true} => ["sleepy=true"]
      arr.push(key + "=" + value);
    }
  }

  // translate array of strings to a single comma-separated string
  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
   create: function(table, cols, vals, cb) {
     var boolean = false;
    console.log("Vals Name" +vals);
    console.log("Type of Vals Name" +typeof vals)

      if(vals != ""){
      var queryString = `INSERT INTO ${table} (${cols}) VALUES ('${vals}', ${boolean});`
      console.log(queryString);
      connection.query(queryString, vals, function(err, result) {
        if (err) {
          throw err;
        }
 
        cb(result);
      });
      }else{
         alert("Please enter the burger name");

           $(document).ready(function () {
            var errmsg = $("<div>").addClass("errMsg").text("Please enter the burger name");
             $("#ca").append(errmsg);
          });
       }
   

      }
   },

   //An example of objColVals would be {name: panther, sleepy: true}
   update: function(table, objColVals, condition, cb) {

    var queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
     //console.log(queryString);
     connection.query(queryString, function(err, result) {
       if (err) {
         throw err;
       }

       cb(result);
     });
   }
};

// Export the orm object for the model (cat.js).
module.exports = orm;
