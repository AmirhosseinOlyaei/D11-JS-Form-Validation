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
    document.getElementById('msg1').className = "text-red-600";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg1').className = "text-green-500";
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
    document.getElementById('msg2').className = "text-red-600";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg2').className = "text-green-500";
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
    document.getElementById('msg3').className = "text-red-600";
    }
    //if answer is true turn div green via classname
    else if (answer === true) {
    document.getElementById('msg3').className = "text-green-500";
    }
}

    //check the length of the password input
function checkLen() {
    //state pattern to match length
    //let lengthPattern = /{8,20}/;

    //get password value from input
    let pswd = document.getElementById('pswd').value;

    if (pswd.length >= 8) {
        document.getElementById('msg4').className = "text-green-600"
        document.getElementById('msg4').innerHTML = "Correct"
    }
    else if (pswd.length <= 8) {
        document.getElementById('msg4').className = "text-red-600"
        document.getElementById('msg4').innerHTML = "Short"
    }
}

//mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//document.getElementById("'msg5").innerHTML = "Valid email address!";
//document.getElementById("'msg5").innerHTML = "You have entered an invalid email address!";