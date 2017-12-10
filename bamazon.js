var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "safety",
  database: "bamazon_db"
});

connection.connect(function(err, rsp){
  if(err) throw err;
  displayInv();
});

function displayInv(){
  connection.query("SELECT * FROM products", function(err, resp){
    for(var i=0; i < resp.length; i++){
      console.log("ID: "+ resp[i].unique_id +" || Item: "+ resp[i].item_name +" || Price: $"+ resp[i].price);
    }
    runPOS();
  });
}

function runPOS(){
  inquirer.prompt([
  {
    name: "choice",
    type: "input",
    message: "Select the ID of the Item you would like:",
    validate: function(value) {
      if (isNaN(value) === false) {
            return true;
          }
          return false;
    }
  },
  {
    name: "quantity",
    type: "input",
    message: "How many would you like:",
    validate: function(value) {
      if (isNaN(value) === false) {
            return true;
          }
          return false;
    }
  }
  ]).then(function(answer){
    connection.query("SELECT * FROM products WHERE unique_id = ?", [answer.choice], function(err,res){
      if(err) throw err;
      if(parseInt(res[0].stock) < parseInt(answer.quantity)){
        console.log("I'm sorry, there are only " + res[0].stock + " of that item left.");
        console.log("Please try again with a different quantity.");
        runPOS();
      }
      else {
        connection.query("UPDATE products SET stock = ? WHERE unique_id= ?", [(res[0].stock - answer.quantity), answer.choice], function(err, rsp){
          if(err) throw err;
          console.log("$"+ parseFloat(res[0].price) * parseInt(answer.quantity) +" has been deducted from your account.");
          inquirer.prompt({
            name: "keepShopping",
            type: "confirm",
            message: "Would you like to keep shopping?"
          }).then(function(answer){
            if(answer.keepShopping){
              runPOS();
            }
            else {
              console.log("Thank you for shopping with Bamazon! Have an adequate day.");
              connection.end;
            }
          });
        });
      }

    });

  });
}