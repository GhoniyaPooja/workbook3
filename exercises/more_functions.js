
function displayMailingLabel(name, address, city, state, zip) {
    // console.log(name, address, city, state, zip); 
    console.log(name); 
    console.log(address); 
    console.log(city + ",", state, zip); 
    console.log();
}
displayMailingLabel("pooja", "Este pl", "Bloomfield", "New jersey", 12345);
displayMailingLabel("Anjli", "Estepl 212", "Bloomfield", "New york", 12654);

function numbersForSomething(num1, num2) {
    var result = num1 + num2;
    console.log(num1, "+", num2, "=", result);
    console.log();
}

var x = 20;
var y = 30;

numbersForSomething(x, y);

function displayReceipt(totalDue, amountPaid) {
    var change = amountPaid - totalDue;
    console.log("Total Due: " + "$" + totalDue);
    console.log("Amount paid:" + "$" + amountPaid);
    if (change > 0) {
        console.log("Change:" + "$" + change); 
    }
    else if (change == 0) {
        console.log("No change needed");
    }
    else if (change< 0 ) {
        console.log("You still owe another: " + Math.abs(change));
    }
    console.log();
}
displayReceipt(11.75, 20);
displayReceipt(11.75, 11.75);
displayReceipt(11.75, 10);
