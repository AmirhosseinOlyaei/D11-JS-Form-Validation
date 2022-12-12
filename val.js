/*validate the inputs for email and password and let the user know what they are missing
The password has to be 8+ characters, with numbers, uppercase, lowercase, etc.
You will be using regular expression and if-else statements.*/

//sate pattern that we want the password to match
function checkUpper() {
        
    // state pattern that we want the password to match
    let uppercasepattern = /[A-Z]/g;
    
    //get password value from input
    let pswd = document.getElementById('pswd').value;

    //check if password has uppercasepattern
    let answer = uppercasepattern.test(pswd);
    //display if password has uppercase
    document.getElementById('msg1').innerHTML = answer;

    //if answer is true turn div green via classname
    if (answer === false){
    document.getElementById('msg1').className = "bg-red-500";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg1').className = "bg-green-500";
    }
    }


//sate pattern that we want the password to match
function checkLower() {
        
    // state pattern that we want the password to match
    let lowercasepattern = /[a-z]/g;
    
    //get password value from input
    let pswd = document.getElementById('pswd').value;

    //check if password has lowercasepattern
    let answer = lowercasepattern.test(pswd);
    //display if password has uppercase
    document.getElementById('msg2').innerHTML = answer;

    //if answer is true turn div green via classname
    if (answer === false){
    document.getElementById('msg2').className = "bg-red-500";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg2').className = "bg-green-500";
    }
    }


    //sate pattern that we want the password to match
function checkNumber() {
        
    // state pattern that we want the password to match
    let numberPattern = /[0-9]/g;
    
    //get password value from input
    let pswd = document.getElementById('pswd').value;

    //check if password has number
    let answer = numberPattern.test(pswd);
    //display if password has number or not
    document.getElementById('msg3').innerHTML = answer;

    //if answer is true turn div green via classname
    if (answer === false){
    document.getElementById('msg3').className = "bg-red-500";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg3').className = "bg-green-500";
    }
    }
